"""Publish traceable honey specifications, without copying private pricing or rights data."""
from pathlib import Path
import json,re,csv,hashlib
root=Path(__file__).resolve().parents[1];ev=root/'content-evidence';dest=root/'content/honey-products.json'
backup=ev/'products-before-specification-enrichment.json'
if not backup.exists():backup.write_text(dest.read_text())
products=json.loads(backup.read_text());src=json.loads((ev/'asset-review/master/products.json').read_text());rows=json.loads((ev/'source-review/honey-master-rows.json').read_text());audit=json.loads((ev/'catalog-expansion-audit.json').read_text())
rights=json.loads((ev/'source-review/master-extra-sheet-13.json').read_text())
def base(s):return re.sub(r'[^A-Z0-9]','',s.split('盖子')[0].upper())
restricted={base(r[1]) for r in rights if len(r)>4 and r[4]=='否'}
def write(p,x):p.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
def findrow(x):
 candidates=[(i+2,r) for i,r in enumerate(rows) if r.get('B','').strip()==x['model'].strip() and r.get('E','').strip()==x['parameters'].strip()]
 assert len(candidates)==1,(x['model'],len(candidates))
 return candidates[0]
def num(t,label,unit):
 m=re.search(label+r'\s*:?\s*(\d+(?:\.\d+)?)\s*'+unit,t,re.I)
 return m.group(1)+' '+unit.lower() if m else ''
def dims(raw):
 raw=raw.strip().upper().replace('(MM)','MM')
 if not raw or not raw.endswith('MM'):return {}
 vals=dict(re.findall(r'([HDWFC])\s*(\d+(?:\.\d+)?)',raw))
 return vals
all_specs={};report=[];out=[];held=[]
for p in products:
 mapped=[a for a in audit if a['page']==f"/products/{p['slug']}/"]
 assert len(mapped)==len(p['variants'])
 # Original page variants follow the expansion mapping, not necessarily source sort order.
 for v in p['variants']:
  if v['image']=='a54-concept':idx=72
  else:idx=int(v['image'].rsplit('-',1)[-1])
  x=src[idx];rn,r=findrow(x);issues=[]
  if base(x['model']) in restricted:
   held.append({'model':x['model'],'page':p['slug'],'sourceRow':rn,'reason':'客户私模型号 sheet marks external sale 否; confirm rights before publishing'})
   v['_hold']=True;continue
  t=r['E'];body=dims(r.get('G',''));overall=dims(t.splitlines()[-1]);spec={}
  for label,key in [('Bottle Weight','bodyWeight'),('Cap Weigh(?:t)?','capWeight')]:spec[key]=num(t,label,'G')
  for prefix,vals,raw in [('overall',overall,t.splitlines()[-1]),('body',body,r.get('G',''))]:
   if raw.strip() and not vals:issues.append(prefix+' dimensions: unconfirmed unit/format')
   for letter,value in list(vals.items()):
    if float(value)>400 or (letter=='H' and float(value)<20):issues.append(prefix+' '+letter+': implausible dimension withheld');del vals[letter]
  # Keep ambiguous body/assembly heights and conflicting profile measurements off the page.
  if body.get('H') and overall.get('H') and float(body['H'])>=float(overall['H']):
   issues.append('Body height not below assembled height; body height withheld');body.pop('H')
  if idx==22:issues.append('Body profile conflicts with assembled profile; body dimensions withheld');body={}
  if idx==119:issues.append('Body height has an apparent decimal error; withheld');body.pop('H',None)
  if idx==32:issues.append('Height uses unrecognized G notation; heights withheld')
  if idx==65:issues.append('Body height 1448 is implausible; withheld')
  if idx==78:issues.append('Neck reference C28/C30 conflicts; neck dimensions withheld');body.pop('C',None);overall.pop('C',None);v['neck']='Confirm with selected sample'
  spec.update({'overallHeight':overall.get('H',''),'bodyHeight':body.get('H',''),'diameter':body.get('D',overall.get('D','')),'width':body.get('W',overall.get('W','')),'depth':body.get('F',overall.get('F','')),'mouthReference':body.get('C',overall.get('C',''))})
  # Dimensions retain the source's D/W/F designations; C is not a complete neck finish.
  for key in ['overallHeight','bodyHeight','diameter','width','depth','mouthReference']:
   if spec[key]:spec[key]+=' mm'
  def positive(s):return bool(re.fullmatch(r'\d+',s or '')) and int(s)>0
  spec['moq']=f"{int(r['N']):,} pieces" if positive(r.get('N')) else ''
  spec['cartonCount']=f"{int(r['O']):,} units" if positive(r.get('O')) else ''
  carton=r.get('P','').strip();spec['cartonDimensions']=' × '.join(re.findall(r'\d+(?:\.\d+)?',carton))+' cm' if re.fullmatch(r'\d+(?:\.\d+)?\s*\*\s*\d+(?:\.\d+)?\s*\*\s*\d+(?:\.\d+)?',carton) else ''
  weight=r.get('Q','').strip();wm=re.fullmatch(r'(\d+(?:\.\d+)?)\s*kg\s*/\s*(\d+(?:\.\d+)?)\s*kg',weight,re.I);spec['netWeight']='';spec['grossWeight']=''
  if wm:
   n,g=map(float,wm.groups())
   if n<g<100:
    # Packaging configuration differs (bodies alone or assembled). Below-body mass is inconsistent.
    minimum=float(spec['bodyWeight'].split()[0])*int(r['O'])/1000 if spec['bodyWeight'] and positive(r.get('O')) else 0
    if n>=minimum*.9:spec['netWeight']=wm.group(1)+' kg';spec['grossWeight']=wm.group(2)+' kg'
    else:issues.append('Carton net weight inconsistent with listed body weight × count; shipping weights withheld')
   else:issues.append('Carton net/gross weights inconsistent; withheld')
  elif weight:issues.append('Shipping weight unit or formatting unconfirmed; withheld')
  # Recover numeric values with misplaced colons, without inventing missing fills.
  for label,key,unit in [('Water Capacity','volume','ML'),('Honey Capacity','honeyWeight','G')]:
   val=num(t,label,unit)
   if val:v[key]=val
  v['specId']=str(idx)
  all_specs[str(idx)]={**spec,'source':'Gracepack product master · Honey bottles','sourceRow':rn,'reviewed':'2026-09-15','issues':issues}
  report.append({'page':p['slug'],'model':v['model'],'source_sheet':'蜂蜜瓶','source_excel_row':rn,**spec,'withheld_issues':'; '.join(issues)})
 p['variants']=[v for v in p['variants'] if not v.get('_hold')]
 if not p['variants']:continue
 if len(p['variants'])!=len(mapped):
  p['model']=' / '.join(v['model'] for v in p['variants']);p['image']=p['variants'][0]['image'];p['imageKind']=p['variants'][0]['imageKind'];p['volume']=' / '.join(dict.fromkeys(v['volume'] for v in p['variants']));p['honeyWeight']=' / '.join(dict.fromkeys(v['honeyWeight'] for v in p['variants']))
  if p['slug']=='compact-inverted-honey-bottles':p['specNotes']='Compare shelf height, grip, label space and the selected closure. Request a model-specific sample to approve the tamper-evident arrangement.'
 out.append(p)
write(dest,out);write(root/'content/honey-specifications.json',all_specs);write(ev/'restricted-honey-models-review.json',held)
with (ev/'honey-specification-audit.csv').open('w',encoding='utf-8-sig',newline='') as f:w=csv.DictWriter(f,fieldnames=report[0]);w.writeheader();w.writerows(report)
summary={'pages':len(out),'variants':len(report),'restrictedEntriesHeld':len(held),'fields':{k:sum(bool(s[k]) for s in all_specs.values()) for k in spec},'entriesWithIssues':sum(bool(s['issues']) for s in all_specs.values())}
write(ev/'honey-specification-summary.json',summary);print(json.dumps(summary,indent=2))
