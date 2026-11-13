import test from 'node:test';
import assert from 'node:assert/strict';
import {givingPrograms,selectedProgram,validDonation,donationPresets,paymentMethods,paymentCode,dialLink,reportMessage,whatsappLink,validSenderPhone} from '../src/donations.js';

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
  const data={program:selectedProgram('Water relief'),amount:'25',method:paymentMethods[0],senderPhone:' 0612345678 ',dedication:' My parents ',email:' donor@example.com ',updates:false};
  const message=reportMessage(data);
  assert.match(message,/waxaan rabaa in la hubiyo deeqdayda/);
  assert.match(message,/Lambarka lacagta laga diray: 0612345678/);
  assert.match(message,/donor@example.com/);
  assert.match(message,/Sadaqada waxaa loogu talagalay: My parents/);
  assert.doesNotMatch(message,/Payment reference/);
  assert.doesNotMatch(reportMessage({...data,dedication:''}),/Sadaqada waxaa loogu talagalay/);
  assert.doesNotMatch(message,/marka deeq-bixin cusub bilaabato/);
  assert.match(reportMessage({...data,updates:true}),/marka deeq-bixin cusub bilaabato/);
  assert.doesNotMatch(reportMessage({...data,email:'',updates:true}),/marka deeq-bixin cusub bilaabato/);
  assert.equal(new URL(whatsappLink(message)).searchParams.get('text'),message);
});

test('sender phone accepts common local and international formats without transfer codes',()=>{
  for(const value of ['0612345678','+252 61 234 5678','0712-828-308'])assert.equal(validSenderPhone(value),true);
  for(const value of ['','123','*712*616666744*5#','abc0612345678','1234567890123456','61+2345678'])assert.equal(validSenderPhone(value),false);
});
