import test from 'node:test';
import assert from 'node:assert/strict';
import {givingPrograms,selectedProgram,validDonation,donationPresets,paymentMethods,paymentCode,dialLink,reportMessage,whatsappLink} from '../src/donations.js';

test('program minimums govern eligibility and suggested amounts',()=>{
  const program={...selectedProgram('Water relief'),minimumUSD:5};
  assert.equal(validDonation('4.99',program),false);
  assert.equal(validDonation('5',program),true);
  assert.deepEqual(donationPresets(program),[5,10,25,50,100]);
  assert.equal(donationPresets(selectedProgram('Zakat al-Fitr')).length,0);
  assert.equal(validDonation('100',selectedProgram('Zakat al-Fitr')),false);
  assert.equal(givingPrograms.filter(p=>p.minimumUSD!==null).length,5);
});
test('SCO transfer codes retain the complete recipient and chosen amount',()=>{
  const zaad=paymentMethods.find(p=>p.id==='zaad'),sahal=paymentMethods.find(p=>p.id==='sahal');
  assert.equal(paymentCode(paymentMethods.find(p=>p.id==='evc'),'10'),'*712*616666744*10#');
  assert.equal(paymentCode(zaad,'25.00'),'*880*0616666744*25#');
  assert.equal(paymentCode(sahal,'0.50'),'*883*0616666744*0.5#');
  assert.equal(decodeURIComponent(dialLink(paymentCode(zaad,'10.25'))),'tel:*880*0616666744*10.25#');
  assert.ok(dialLink(paymentCode(zaad,'1')).endsWith('%23'));
  for(const bad of ['0','-5','1*999#','Infinity','1.001'])assert.equal(paymentCode(zaad,bad),null);
  for(const method of paymentMethods.filter(p=>!p.prefix))assert.equal(paymentCode(method,'10'),null);
});
test('payment reports remain verification requests and update consent stays separate',()=>{
  const data={program:selectedProgram('Water relief'),amount:'25',method:paymentMethods[0],reference:' SAMPLE-123 ',email:' donor@example.com ',updates:false};
  const message=reportMessage(data);
  assert.match(message,/Please verify my donation/);
  assert.match(message,/Payment reference: SAMPLE-123/);
  assert.match(message,/donor@example.com/);
  assert.doesNotMatch(message,/new donation rounds/);
  assert.match(reportMessage({...data,updates:true}),/new donation rounds/);
  assert.doesNotMatch(reportMessage({...data,email:'',updates:true}),/new donation rounds/);
  assert.equal(new URL(whatsappLink(message)).searchParams.get('text'),message);
});
