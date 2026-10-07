from pathlib import Path
import json,csv,collections
root=Path('/Users/gracepack/Documents/en.gracepackhoneypackaging');ev=root/'content-evidence'
rows=json.loads((ev/'honey-keyword-audit.json').read_text())
selected={
'/':['honey packaging','honey packaging supplier'],
'/products/':['honey bottles wholesale','honey jars bulk','honey jars wholesale','honey containers','empty honey bottles','empty honey jars'],
'/plastic-honey-bottles/':['plastic honey bottles','plastic honey containers','pet honey bottles'],
'/plastic-honey-jars/':['plastic honey jars','plastic honey jars wholesale','plastic honey jars bulk','plastic honey jars with lids','pet honey jars','bulk plastic honey jars'],
'/products/wide-mouth-pet-honey-jar-shapes/':['wide mouth honey jars'],
'/products/square-pet-honey-jars/':['square plastic honey jars'],
'/glass-honey-jars/':['glass honey jars','glass honey jars wholesale','glass honey jars bulk','glass jars for honey'],
'/honey-bear-bottles/':['honey bear bottles','honey bear bottle','honey bear bottles wholesale','empty honey bear bottles','plastic honey bear bottles'],
'/honey-squeeze-bottles/':['honey squeeze bottles','squeeze honey bottles','honey squeeze bottle','inverted honey bottles'],
'/hexagon-honey-jars/':['hexagon honey jars','hexagonal honey jars','hex honey jars'],
'/mini-honey-jars/':['mini honey jars','small honey jars','mini honey jars bulk','mini honey jars wholesale','empty mini honey jars','honey jar wedding favors'],
'/products/ribbed-glass-honey-jars/':['beehive honey jar','glass beehive honey jar','beehive glass honey jar','beehive shaped honey jar','honey jar beehive'],
'/products/mini-glass-honey-jar-25ml-blp0317/':['round honey jars','round glass honey jars','round honey jar'],
'/custom-honey-packaging/':['custom honey packaging','custom honey bottles','honey packaging design'],
'/honey-jar-lids-and-caps/':['honey jar lids','honey bottle caps','honey bottle closures'],
'/guides/honey-jar-sizes/':['honey jar sizes','honey bottle sizes'],
'/guides/glass-vs-plastic-honey-packaging/':['glass vs plastic honey jars','best container for honey'],
'/guides/honey-bottle-caps-and-seals/':['honey jar seals'],
'/guides/honey-filling-and-packaging/':['bottling honey','honey bottling']}
primary={kw:url for url,kws in selected.items() for kw in kws}
for r in rows:
 kw=r['keyword'].lower()
 if kw in primary:r.update(publicationDecision='核心页面主题词',finalPage=primary[kw],publicationReason='人工选入页面主题；同义词由同一页面自然覆盖，不单独建页')
 elif 'bear' in kw and 'glass' in kw:r.update(publicationDecision='暂不上站',finalPage='',publicationReason='本次核实的熊形瓶为PET；不使用玻璃熊瓶词描述塑料产品')
 elif r['websiteDecision']=='Commercial candidate':r.update(publicationDecision='语义扩展储备',finalPage='',publicationReason='商业候选并不等于已使用；容量、品牌、特定材质或款式需对应真实供货，不机械加入页面')
 elif r['websiteDecision']=='Guide candidate':r.update(publicationDecision='指南研究储备',finalPage='',publicationReason='仅为指南选题线索；不承诺逐词覆盖或新建长尾页')
 else:r.update(publicationDecision='排除' if r['websiteDecision']=='Exclude' else '暂不上站',finalPage='',publicationReason=r['reason'])
(ev/'honey-keyword-audit.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2))
with (ev/'honey-keyword-audit.csv').open('w',encoding='utf-8-sig',newline='') as f:
 w=csv.DictWriter(f,fieldnames=rows[0].keys());w.writeheader();w.writerows(rows)
products=json.loads((root/'content/honey-products.json').read_text());cats=json.loads((root/'content/honey-categories.json').read_text())
with (ev/'honey-page-keyword-map.csv').open('w',encoding='utf-8-sig',newline='') as f:
 w=csv.writer(f);w.writerow(['最终URL','类型','页面主题/产品','核心关键词','工作簿命中数','证据和范围'])
 for url,kws in selected.items():w.writerow([url,'指南' if url.startswith('/guides/') else ('产品详情' if url.startswith('/products/') and url!='/products/' else '商业/分类'),url,'; '.join(kws),sum(kw in {r['keyword'] for r in rows} for kw in kws),'以已核实产品范围承接；关键词不是库存/规格承诺'])
 for p in products:w.writerow(['/products/'+p['slug']+'/','产品详情',p['title'],p['title']+'; '+p['model'],'不为型号词虚构搜索量','富通产品明细总表.xlsx + Gracepack 原始产品照片'])
with (ev/'honey-product-evidence.csv').open('w',encoding='utf-8-sig',newline='') as f:
 w=csv.writer(f);w.writerow(['URL','型号','材料','目录容积','参考蜜重','图片键','参数来源','使用限制'])
 for p in products:w.writerow(['/products/'+p['slug']+'/',p['model'],p['material'],p['volume'],p['honeyWeight'],p['image'],'/Volumes/YE05-市场部03-钟郑贵/建站资料准备/资料文件/富通产品明细总表.xlsx','容量、口径及实配盖最终以确认样为准；系列图仅展示款式'])
(ev/'keyword-publication-summary.json').write_text(json.dumps(dict(collections.Counter(r['publicationDecision'] for r in rows)),ensure_ascii=False,indent=2))
print('Publication mapping',collections.Counter(r['publicationDecision'] for r in rows))
