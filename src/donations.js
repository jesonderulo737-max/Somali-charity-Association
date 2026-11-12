import givingPrograms from './giving-programs.json' with {type:'json'};
import {validAmount} from './calculations.js';

export {givingPrograms};
export const paymentMethods = [
  {id:'evc',name:'EVC Plus',recipient:'616 666 744',number:'616666744',prefix:'712'},
  {id:'mpesa',name:'M-Pesa',recipient:'0712828308',number:'0712828308',accountName:'Abdullahi Mahamed'},
  {id:'zaad',name:'Telesom ZAAD',recipient:'0616666744',number:'0616666744',prefix:'880'},
  {id:'sahal',name:'Golis Sahal',recipient:'0616666744',number:'0616666744',prefix:'883'},
  {id:'edahab',name:'E-Dahab',recipient:'0626666744',number:'0626666744'}
];
export function selectedProgram(name){return givingPrograms.find(p=>p.name===name)??givingPrograms[0];}
export function validDonation(value,program){return program.minimumUSD!==null&&validAmount(value)&&Number(value)>=program.minimumUSD;}
export function amountText(value){return Number(value).toFixed(2).replace(/\.00$/,'').replace(/(\.\d)0$/,'$1');}
export function donationPresets(program){return program.minimumUSD===null?[]:[...new Set([program.minimumUSD,1,5,10,25,50,100])].filter(a=>a>=program.minimumUSD);}
export function paymentCode(method,value){if(!method?.prefix||!validAmount(value))return null;return `*${method.prefix}*${method.number}*${amountText(value)}#`;}
export function dialLink(code){return code?`tel:${encodeURIComponent(code)}`:null;}
export function whatsappLink(message){return 'https://wa.me/252616666744?text='+encodeURIComponent(message);}
export function reportMessage({program,amount,method,reference,email,updates}){
  return ['Salaan SCO, waxaan rabaa in la hubiyo deeqdayda. / Please verify my donation.',
    'Program: '+program.name,'Amount selected on website: USD '+amountText(amount),
    'Payment method: '+method.name,'Recipient: '+method.recipient,
    'Payment reference: '+reference.trim(),email.trim()?'Email for a receipt after confirmation: '+email.trim():null,
    updates&&email.trim()?'I would also like email updates when new donation rounds open.':null,
    'Please confirm receipt after checking the transfer.'].filter(Boolean).join('\n');
}
