import {readFileSync,writeFileSync,mkdirSync,existsSync,unlinkSync} from 'node:fs';
import {dirname} from 'node:path';
const posts=JSON.parse(readFileSync('content/honey-blog.json','utf8'));
// Next static export cannot build a dynamic route with an empty params list.
// Only install pagination routes once their second page exists.
for(const [template,path,needed] of [
 ['blog-pagination','app/resources/blog/page/[page]/page.tsx',posts.length>12],
 ['blog-category-pagination','app/resources/blog/category/[slug]/page/[page]/page.tsx',[...new Set(posts.flatMap(p=>p.categories))].some(c=>posts.filter(p=>p.categories.includes(c)).length>12)]
]){if(needed){mkdirSync(dirname(path),{recursive:true});writeFileSync(path,readFileSync(`scripts/templates/${template}.tsx.txt`));}else if(existsSync(path))unlinkSync(path);}
