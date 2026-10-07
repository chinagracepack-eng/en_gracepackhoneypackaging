import fs from 'node:fs/promises';
import sharp from 'sharp';
const jobs=JSON.parse(await fs.readFile('content-evidence/catalog-expansion-assets.json','utf8'));
jobs.push({name:'a54-concept',source:'/Users/gracepack/.codex/generated_images/01a09497-9915-7921-9c28-20733d9640a8/exec-8465fade-bd6d-497b-8366-7e8065c1b9bb.png'});
const report=[];
for(const job of jobs){const files=[];for(const width of [480,960,1440]){let best;let delta=Infinity;const qualities=job.name==='a54-concept'?[80,85,90,93,95,97,99,100]:[90];for(const quality of qualities){const buf=await sharp(job.source).flatten({background:'#ffffff'}).resize(width,width,{fit:'contain',background:'#ffffff'}).webp({quality}).toBuffer();if(Math.abs(buf.length-170000)<delta){best=buf;delta=Math.abs(buf.length-170000)}}const file=`public/assets/honey/${job.name}-${width}.webp`;await fs.writeFile(file,best);files.push({file,bytes:best.length})}report.push({...job,files});}
await fs.writeFile('content-evidence/catalog-image-export.json',JSON.stringify(report,null,2));console.log('Exported',report.length,'image sets',report.at(-1));

await sharp(jobs.at(-1).source).flatten({background:'#ffffff'}).resize(850,850).webp({nearLossless:true,quality:1}).toFile('public/assets/honey/a54-concept-850.webp');
