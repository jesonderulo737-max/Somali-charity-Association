import givingPrograms from './giving-programs.json' with {type:'json'};
import {validAmount} from './calculations.js';

export {givingPrograms};
export const programLabel=(name)=>({'Where most needed':'Meesha baahidu ugu badan tahay','Water relief':'Gurmadka biyaha','Education and orphan care':'Waxbarashada iyo daryeelka agoonta','Ramadan iftar':'Af-furka Ramadaanka','Eid support':'Taageerada Ciidda','Zakat al-Fitr':'Sakada Fidriga','Sadaqah':'Sadaqo'}[name]??name);
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
export function validSenderPhone(value){const phone=String(value??'').trim();return /^[+0-9 ()-]+$/.test(phone)&&/^\+?\d{7,15}$/.test(phone.replace(/[ ()-]/g,''));}
export function reportMessage({program,amount,method,senderPhone='',dedication='',email='',updates}){
  return ['Salaan SCO, waxaan rabaa in la hubiyo deeqdayda.',
    'Mashruuca: '+programLabel(program.name),'Cadadka laga doortay bogga: USD '+amountText(amount),
    'Habka lacag-bixinta: '+method.name,'Qaataha: '+method.recipient,
    'Lambarka lacagta laga diray: '+senderPhone.trim(),dedication.trim()?'Sadaqada waxaa loogu talagalay: '+dedication.trim():null,email.trim()?'Iimaylka rasiidhka marka la xaqiijiyo: '+email.trim():null,
    updates&&email.trim()?'Waxaan rabaa farriimo iimayl ah marka deeq-bixin cusub bilaabato.':null,
    'Fadlan xaqiiji helitaanka lacagta marka wareejinta la hubiyo.'].filter(Boolean).join('\n');
}
