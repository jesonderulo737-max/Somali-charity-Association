import React,{useEffect,useRef,useState} from 'react';
import {givingPrograms,selectedProgram,paymentMethods,validDonation,paymentCode,dialLink,whatsappLink,reportMessage,amountText} from './donations.js';

export function DonationDialog({open,onClose,cause,amount,monthly,onProgramChange,onAmountChange}){
  const dialog=useRef(null),trigger=useRef(null);
  const [methodId,setMethodId]=useState('evc'),[copied,setCopied]=useState(''),[reference,setReference]=useState(''),[email,setEmail]=useState(''),[updates,setUpdates]=useState(false);
  const program=selectedProgram(cause),method=paymentMethods.find(m=>m.id===methodId),valid=validDonation(amount,program);
  const code=valid?paymentCode(method,amount):null;
  useEffect(()=>{
    if(open){setReference('');setEmail('');setUpdates(false);setCopied('');trigger.current=document.activeElement;if(!dialog.current.open)dialog.current.showModal();}
    else {dialog.current?.close();trigger.current?.focus();}
  },[open]);
  async function copy(value){try{await navigator.clipboard.writeText(value);setCopied(value);}catch{setCopied('Select the code or number below and copy it.');}}
  const reportHref=valid&&reference.trim()?whatsappLink(reportMessage({program,amount,method,reference,email,updates})):null;
  function shareReport(e){e.preventDefault();if(reportHref)window.open(reportHref,'_blank','noopener,noreferrer');}
  return <dialog ref={dialog} className="donation-dialog" aria-labelledby="donation-title" onCancel={onClose} onClick={e=>{if(e.target===dialog.current)onClose();}}>
    <button className="close" aria-label="Close donation options" onClick={onClose}>Close</button>
    <span className="eyebrow">SUPPORT SCO</span><h2 id="donation-title">Choose how to donate</h2>
    <div className="donation-summary"><div><span>{program.type}</span><strong>{cause}</strong></div><strong>{valid?'$'+amountText(amount):program.minimumUSD===null?'Confirm amount with SCO':'Choose a valid amount'}</strong></div>
    <div className="donation-edit"><label>Donation program<select value={cause} onChange={e=>{onProgramChange(e.target.value);setReference('');}}>{givingPrograms.map(p=><option key={p.id} value={p.name}>{p.name}</option>)}</select></label><label>Donation amount (USD)<input type="number" min={program.minimumUSD??0.5} max="1000000" step="0.01" value={amount} disabled={program.minimumUSD===null} onChange={e=>{onAmountChange(e.target.value);setReference('');}}/></label></div>
    {program.minimumUSD!==null&&<p className="payment-note">Starting amount: ${amountText(program.minimumUSD)}</p>}
    {monthly&&<p className="payment-note">Monthly giving is a personal commitment. These payment options prepare one transfer at a time.</p>}
    <p lang="so">Waxaad ku deeqi kartaa inta aad awoodo.</p>
    {!valid?<div className="payment-panel"><p>{program.minimumUSD===null?'Contact SCO to confirm the current Zakat al-Fitr amount per person.':'Choose an amount that meets this program’s minimum.'}</p><a className="primary" href={whatsappLink('Salaan SCO, please confirm the donation amount for '+cause+'.')} target="_blank" rel="noopener noreferrer">Ask SCO on WhatsApp</a></div>:<>
      <div className="payment-methods" aria-label="Payment method">{paymentMethods.map(m=><button key={m.id} aria-pressed={methodId===m.id} className={methodId===m.id?'selected':''} onClick={()=>{setMethodId(m.id);setCopied('');setReference('');}}>{m.name}</button>)}</div>
      <section className="payment-panel" aria-label={method.name+' payment details'}><div className="payment-recipient"><div><span>Recipient</span><strong>{method.recipient}</strong>{method.accountName&&<small>{method.accountName}</small>}</div><button className="copy-button" onClick={()=>copy(method.number)}>Copy number</button></div>
        {code?<><label className="dial-code">Transfer code<input readOnly value={code} onFocus={e=>e.target.select()} aria-label="Prefilled transfer code"/></label><div className="payment-actions"><button className="copy-button" onClick={()=>copy(code)}>Copy code</button><a className="primary" href={dialLink(code)}>Open phone dialer</a></div><p className="payment-note">Use the correct mobile-money SIM. Review the recipient and amount on your phone before confirming. If your phone does not open the code, copy and paste it into the dialer.</p></>:<p className="payment-note">Open {method.name} on your phone and use this recipient number. {method.id==='mpesa'?'Confirm the receiving currency and transfer amount with SCO; the USD amount shown here is not a KES conversion.':'Enter your donation amount in the service’s transfer menu.'}</p>}
        <p role="status" className="copy-status">{copied?(copied==='Select the code or number below and copy it.'?copied:'Copied: '+copied):''}</p>
      </section>
      <a className="whatsapp-help" href={whatsappLink(`Salaan SCO, I would like to donate USD ${amountText(amount)} to ${cause} using ${method.name}. Please help me confirm the payment details.`)} target="_blank" rel="noopener noreferrer">Get payment help on WhatsApp →</a>
      <details className="payment-report"><summary>Already sent your donation?</summary><p>Share your transfer reference with SCO so we can check it. Opening the dialer does not confirm a payment.</p><form onSubmit={shareReport}><label>Payment reference<input required maxLength="100" value={reference} onChange={e=>setReference(e.target.value)} autoComplete="off" placeholder="Transaction reference"/></label><label>Email for your receipt (optional)<input type="email" maxLength="254" value={email} onChange={e=>{setEmail(e.target.value);if(!e.target.value.trim())setUpdates(false);}} autoComplete="email" placeholder="you@example.com"/></label><label className="email-optin"><input type="checkbox" checked={updates} onChange={e=>setUpdates(e.target.checked)} disabled={!email.trim()}/> <span>Email me when new donation rounds open.</span></label><small>Your request is prepared for WhatsApp; you choose whether to send it. Automated email receipts and subscriptions are not active yet.</small><button className="primary" type="submit" disabled={!reportHref}>Prepare WhatsApp message</button></form></details>
    </>}
    <p className="payment-footnote">Complete the transfer on your phone. SCO confirms donations after checking the payment record.</p>
  </dialog>;
}
