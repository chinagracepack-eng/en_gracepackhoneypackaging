import zipfile,xml.etree.ElementTree as E,json,re,posixpath,io
from pathlib import Path
from PIL import Image,ImageOps,ImageDraw
z=zipfile.ZipFile('/Volumes/YE05-市场部03-钟郑贵/建站资料准备/资料文件/富通产品明细总表.xlsx')
ns={'s':'http://schemas.openxmlformats.org/spreadsheetml/2006/main','a':'http://schemas.openxmlformats.org/drawingml/2006/main','x':'http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing','r':'http://schemas.openxmlformats.org/officeDocument/2006/relationships'}
ss=[''.join(x.itertext()) for x in E.fromstring(z.read('xl/sharedStrings.xml'))]
rel={x.get('Id'):posixpath.normpath(posixpath.join('xl',x.get('Target'))) for x in E.fromstring(z.read('xl/_rels/cellimages.xml.rels'))}
imgs={pic.find('.//x:cNvPr',ns).get('name'):rel[pic.find('.//a:blip',ns).get('{'+ns['r']+'}embed')] for pic in E.fromstring(z.read('xl/cellimages.xml'))}
out=Path('/Users/gracepack/Documents/en.gracepackhoneypackaging/content-evidence/asset-review/master');out.mkdir(exist_ok=True)
rows=[]
for row in E.fromstring(z.read('xl/worksheets/sheet1.xml')).findall('.//s:row',ns):
 vals={}
 for c in row.findall('s:c',ns):
  v=c.find('s:v',ns);val=v.text if v is not None else ''
  vals[re.sub(r'\d','',c.get('r'))]=ss[int(val)] if c.get('t')=='s' and val else val
 model=vals.get('B','');desc=vals.get('E','');formula=vals.get('D','')
 if not model or 'Capacity' not in desc:continue
 imid=re.search('ID_[A-Z0-9]+',formula);path=''
 if imid and imid[0] in imgs:
  path=str(out/(re.sub(r'[^A-Za-z0-9_-]','_',model)+'.jpg'))
  try:Image.open(io.BytesIO(z.read(imgs[imid[0]]))).convert('RGB').save(path)
  except Exception: path=''
 rows.append({'model':model,'parameters':desc,'neck':vals.get('F',''),'bodyDimensions':vals.get('G',''),'image':path})
(out/'products.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2))
for batch in range((len(rows)+31)//32):
 subset=rows[batch*32:batch*32+32];sheet=Image.new('RGB',(1000,8*190),'white');d=ImageDraw.Draw(sheet)
 for j,r in enumerate(subset):
  if not r['image']:continue
  im=Image.open(r['image']);im.thumbnail((240,160));x=j%4*250;y=j//4*190;sheet.paste(im,(x+(240-im.width)//2,y));d.text((x+5,y+164),r['model'],fill='black')
 sheet.save(out/f'overview-{batch}.jpg')
print('Extracted models:',len(rows))
