import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {slides,SLIDE_INTERVAL_MS} from '../src/hero-content.js';

test('hero holds ten original photographs for ten seconds each',async()=>{
  assert.equal(SLIDE_INTERVAL_MS,10000);
  assert.equal(slides.length,10);
  assert.equal(new Set(slides.map(s=>s.id)).size,10);
  assert.match(slides[0].title,/Happy children\s+Happy somalia/);
  for(const slide of slides){
    assert.ok(slide.title&&slide.description&&slide.alt,slide.id);
    const image=await readFile(new URL('../public'+slide.image,import.meta.url));
    assert.equal(image.readUInt16BE(0),0xffd8,slide.id+' uses an original JPEG');
  }
});
test('program photographs use their matching reach figures',()=>{
  for(const slide of slides.filter(s=>s.id.startsWith('mosque-'))){
    assert.equal(slide.figure,undefined,slide.id);
    assert.ok(slide.detail&&slide.scope,slide.id);
  }
  for(const slide of slides.filter(s=>s.figure)){
    assert.ok((slide.figure==='148,000+'&&slide.unit==='people supported')||(slide.figure==='544,000+'&&slide.unit==='families fed')||(slide.id.startsWith('team-')&&slide.figure==='75,600+'&&slide.unit==='iftar portions distributed'));
  }
});
