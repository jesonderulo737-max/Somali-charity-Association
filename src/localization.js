export const categoryLabels={'All programs':'Dhammaan mashaariicda',Water:'Gurmadka biyaha',Eid:'Taageerada Ciidda','Zakat al-Fitr':'Sakada Fidriga','Ramadan iftar':'Af-furka Ramadaanka'};
export const campaignFilters=Object.keys(categoryLabels);
export const batchLabels={'All photos':'Dhammaan sawirrada','School ceremony':'Xafladda dugsiga','Eid support':'Taageerada Ciidda'};
export const galleryFilters=Object.keys(batchLabels);
export const categoryPrograms={Water:'Water relief',Eid:'Eid support','Ramadan iftar':'Ramadan iftar','Zakat al-Fitr':'Zakat al-Fitr'};
export function campaignProgram(category){return categoryPrograms[category]??'Where most needed';}
export function filterCampaigns(programs,category){return category==='All programs'?programs:programs.filter(p=>p.category===category);}
export function filterPhotos(photos,batch){return batch==='All photos'?photos:photos.filter(p=>p.batch===batch);}
export function photoDate(date){const [year,month,day]=date.split('-');const months=['Janaayo','Febraayo','Maarso','Abriil','Maajo','Juun','Luulyo','Agoosto','Sebtembar','Oktoobar','Nofeembar','Diseembar'];return Number(day)+' '+months[Number(month)-1]+' '+year;}
export function somaliValidation(event){const input=event.target;if(!input.validity)return;const v=input.validity;let message='Fadlan hubi xogta aad gelisay.';if(v.valueMissing)message='Fadlan buuxi goobtan.';else if(v.typeMismatch&&input.type==='email')message='Fadlan geli cinwaan iimayl oo sax ah.';else if(v.badInput)message='Fadlan geli tiro sax ah.';else if(v.rangeUnderflow)message='Geli tiro aan ka yarayn '+input.min+'.';else if(v.rangeOverflow)message='Geli tiro aan ka badnayn '+input.max+'.';else if(v.stepMismatch)message='Geli cadad leh ugu badnaan laba meelood oo jajab ah.';input.setCustomValidity(message);}
export function clearValidation(event){event.target.setCustomValidity?.('');}
