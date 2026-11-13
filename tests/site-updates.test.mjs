import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {slides} from '../src/hero-content.js';

test('mosque slides distinguish the new building, prayer hall and ablution area',()=>{
 const exterior=slides.find(s=>s.id==='mosque-exterior'),interior=slides.find(s=>s.id==='mosque-interior'),ablution=slides.find(s=>s.id==='mosque-ablution');
 assert.equal(exterior.title,'Masjidka cusub.');assert.match(exterior.description,/caawimaaddaada iyo sadaqada aad bixisay/);
 assert.equal(interior.title,'Gudaha masjidka.');assert.match(interior.description,/Qaybta salaadda/);
 assert.equal(ablution.title,'Qaybta weysada ee masjidka.');assert.match(ablution.description,/weysada lagu qaataa/);
 for(const item of [exterior,interior,ablution]){assert.equal(item.figure,undefined);assert.doesNotMatch(item.title,/Goobo adeeg|Goobo ay/);}
});

test('news articles have real local images, unique identities and safe optional sources',async()=>{
 const items=JSON.parse(await readFile(new URL('../src/news.json',import.meta.url),'utf8'));
 assert.equal(items.length,3);assert.equal(new Set(items.map(n=>n.id)).size,items.length);
 for(const item of items){for(const key of ['title','summary','alt','category','context','sourceNote'])assert.ok(item[key]?.trim(),item.id+' '+key);assert.ok(item.body.length>=2);await access(new URL('../public'+item.image,import.meta.url));if(item.link)assert.match(item.link,/^(https:\/\/|#[a-z-]+$)/);assert.equal(item.publishedAt,undefined);}
 assert.match(items.find(n=>n.id==='ramadan-iftar').body.join(' '),/ma aha tiro dad gaar ah/);
});

test('old project and donation labels do not return to the visible source',async()=>{
 for(const file of ['App.jsx','HeroSlideshow.jsx','Campaigns.jsx','Donations.jsx','About.jsx','News.jsx','SiteNavigation.jsx','hero-content.js','localization.js'])assert.doesNotMatch(await readFile(new URL('../src/'+file,import.meta.url),'utf8'),/Barnaamijyada|barnaamijyada|Deeq bixi|deeq bixi/);
 const app=await readFile(new URL('../src/App.jsx',import.meta.url),'utf8');assert.match(app,/<About\/>/);assert.match(app,/<News\/>/);assert.match(app,/Sadaqa bixi/);
});
