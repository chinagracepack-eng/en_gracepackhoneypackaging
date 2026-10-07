import './prepare-blog-pagination.mjs';
import {spawnSync} from 'node:child_process';
import {existsSync,readFileSync,rmSync} from 'node:fs';
// Remove generated output so deleted French routes cannot survive a rebuild.
for(const dir of ['out','.next'])if(existsSync(dir))rmSync(dir,{recursive:true,force:true});
const build=spawnSync(process.execPath,['node_modules/next/dist/bin/next','build'],{stdio:'inherit',env:{...process.env,NODE_ENV:'production'}});
if(build.status!==0)process.exit(build.status||1);
const detail=JSON.parse(readFileSync('.next/export-detail.json','utf8'));
if(!detail.success||!existsSync('out/index.html'))throw new Error('Static export failed.');
const verify=spawnSync(process.execPath,['scripts/verify-honey-site.mjs'],{stdio:'inherit'});process.exit(verify.status||0);
