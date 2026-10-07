from pathlib import Path
from pypdf import PdfReader
import zipfile,xml.etree.ElementTree as E,json
root=Path('/Volumes/YE05-市场部03-钟郑贵/建站资料准备/资料文件')
out=Path('/Users/gracepack/Documents/en.gracepackhoneypackaging/content-evidence/source-review');out.mkdir(exist_ok=True)
ns={'s':'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
for p in root.rglob('*'):
 if p.suffix.lower()=='.pdf':
  try:
   doc=PdfReader(p); txt='\n'.join(page.extract_text() or '' for page in doc.pages)
   (out/(p.stem+'.txt')).write_text(txt)
  except Exception as e:print(p.name,type(e).__name__)
 elif p.suffix.lower()=='.xlsx':
  try:
   z=zipfile.ZipFile(p);ss=[]
   if 'xl/sharedStrings.xml' in z.namelist():ss=[''.join(x.itertext()) for x in E.fromstring(z.read('xl/sharedStrings.xml'))]
   ls=[]
   for name in z.namelist():
    if name.startswith('xl/worksheets/sheet') and name.endswith('.xml'):
     for row in E.fromstring(z.read(name)).findall('.//s:row',ns):
      vals=[]
      for c in row.findall('s:c',ns):
       v=c.find('s:v',ns);value=v.text if v is not None else ''.join(c.find('s:is',ns).itertext()) if c.find('s:is',ns)is not None else ''
       vals.append(ss[int(value)] if c.get('t')=='s' and value else value)
      ls.append(' | '.join(vals))
   (out/(p.stem+'.txt')).write_text('\n'.join(ls))
  except Exception as e:print(p.name,type(e).__name__)
print('Review files:',len(list(out.iterdir())))
