import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import {createRequire} from 'node:module';
import {createHash} from 'node:crypto';
import {categoryLabels,campaignFilters,batchLabels,filterCampaigns,filterPhotos,campaignProgram,photoDate,somaliValidation,clearValidation} from '../src/localization.js';
import {givingPrograms,programLabel,selectedProgram,reportMessage,paymentMethods} from '../src/donations.js';
const json=async path=>JSON.parse(await readFile(new URL('../'+path,import.meta.url),'utf8'));

test('all Somali campaign filters preserve category counts and support-program routing',async()=>{
 const programs=await json('src/campaigns.json');
 const expected={'All programs':7,Water:1,Eid:3,'Zakat al-Fitr':1,'Ramadan iftar':2};
 for(const key of campaignFilters){const selected=filterCampaigns(programs,key);assert.equal(selected.length,expected[key]);assert.ok(categoryLabels[key]);for(const p of selected){const donation=selectedProgram(campaignProgram(p.category));assert.notEqual(donation.id,'general');assert.ok(programLabel(donation.name)!==donation.name);}}
 assert.equal(selectedProgram(campaignProgram('Zakat al-Fitr')).minimumUSD,null);
 assert.equal(filterCampaigns(programs,'Eid').some(p=>p.id==='eid-additional'),true);
});

test('gallery batch keys and Somali date labels preserve both source groups',async()=>{
 const photos=await json('src/school-photos.json');
 for(const [key,count] of [['All photos',28],['School ceremony',26],['Eid support',2]]){assert.equal(filterPhotos(photos,key).length,count);assert.ok(batchLabels[key]);}
 assert.equal(photoDate('2025-09-11'),'11 Sebtembar 2025');assert.equal(photoDate('2026-03-15'),'15 Maarso 2026');
});

test('every giving program and type has a Somali display label and report',()=>{
 for(const program of givingPrograms){assert.notEqual(programLabel(program.name),program.name);assert.notEqual(programLabel(program.type),program.type);const message=reportMessage({program,amount:'5',method:paymentMethods[0],senderPhone:'0612345678'});assert.ok(message.includes(programLabel(program.name)));assert.doesNotMatch(message,/Where most needed|Water relief|Education and orphan care|Ramadan iftar|Eid support|Zakat al-Fitr|Please|Payment method/);}
});

test('Somali validation replaces browser messages and clears on editing',()=>{
 const input={type:'email',validity:{typeMismatch:true},setCustomValidity(value){this.message=value;}};
 somaliValidation({target:input});assert.equal(input.message,'Fadlan geli cinwaan iimayl oo sax ah.');clearValidation({target:input});assert.equal(input.message,'');
 input.validity={valueMissing:true};somaliValidation({target:input});assert.equal(input.message,'Fadlan buuxi goobtan.');
});

test('graduate localization preserves the exact approved forty names',async()=>{
 const cohorts=await json('src/graduate-cohorts.json');assert.deepEqual(cohorts.map(c=>[c.year,c.students.length]),[[2025,20],[2026,20]]);
 assert.equal(createHash('sha256').update(JSON.stringify(cohorts.map(c=>c.students))).digest('hex'),'0826f6e634f991caaf4349e0da42b63d7d5ed6f1dfc0bc70ccabb51e787c1784');
});

test('every JSX file parses and has no unbound non-browser identifiers',async()=>{
 const require=createRequire(import.meta.resolve('@vitejs/plugin-react'));const babel=require('@babel/core');
 const globals=new Set(['window','document','navigator','setInterval','clearInterval']);
 for(const file of (await readdir(new URL('../src',import.meta.url))).filter(f=>f.endsWith('.jsx'))){
  const ast=babel.parseSync(await readFile(new URL('../src/'+file,import.meta.url),'utf8'),{filename:file,parserOpts:{plugins:['jsx']},configFile:false,babelrc:false});
  babel.traverse(ast,{ReferencedIdentifier(path){assert.ok(path.scope.hasBinding(path.node.name)||globals.has(path.node.name),file+': undefined '+path.node.name);}});
 }
});

test('all source JSON parses and known English interface regressions stay absent',async()=>{
 const files=await readdir(new URL('../src',import.meta.url));
 for(const file of files.filter(f=>f.endsWith('.json')))await json('src/'+file);
 const html=await readFile(new URL('../index.html',import.meta.url),'utf8');assert.match(html,/<html lang="so">/);
 const english=/\b(?:We distributed|We have started|Our Halyeeyada|Children holding|Payment reference|Choose how to donate|View photo|Show all|people supported|families fed|e\.g\.)\b/;
 for(const file of files.filter(f=>/\.(jsx|js|json)$/.test(f))){assert.doesNotMatch(await readFile(new URL('../src/'+file,import.meta.url),'utf8'),english,file);}
});

test('reduced motion and hidden-page autoplay guards remain in place',async()=>{
 const source=await readFile(new URL('../src/HeroSlideshow.jsx',import.meta.url),'utf8'),css=await readFile(new URL('../src/styles.css',import.meta.url),'utf8');
 assert.match(source,/prefers-reduced-motion: reduce/);assert.match(source,/if\(reducedMotion\|\|!visible\)return/);assert.match(source,/clearInterval\(timer\)/);assert.match(source,/removeEventListener\('change',motionChanged\)/);assert.match(css,/@media\(prefers-reduced-motion:reduce\)/);assert.match(css,/animation:none!important/);
});
