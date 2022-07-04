const formPlainte = document.querySelector('div.formPlainte');
const resultPlainte = document.querySelector('div.resultPlainte');

const plaignantId = document.getElementById('plaignant')
const plaignantTel = document.getElementById('tel-plaignant')
const cible = document.getElementById('cible')
const motif = document.getElementById('motifs')
const dateFaits = document.getElementById('dateFaits')
const faits = document.getElementById('totalFaits')
const infosImportantes = document.getElementById('infosImpo')
const partiCivil = document.getElementById('parti-civil')
const matricule = document.getElementById('matricule')
const nomAgent = document.getElementById('idAgent')
const datePlainte = document.getElementById('date-plainte')
const lireRapport = document.querySelector('div.lireRapport > input')

const resultPlaignant = document.getElementById('resultPlaignant')
const resultCible = document.getElementById('resultCible')
const resultMotifs = document.getElementById('resultMotifs')
const resultDateFaits = document.getElementById('resultDateFaits')
const resultFaits = document.getElementById('resultFaits')
const resultInfos = document.getElementById('resultInfos')
const resultPartiCivil = document.getElementById('resultPartiCivil')
const resultTelPlaignant = document.getElementById('resultTelPlaignant')
const resultEnregistrementPlainte = document.getElementById('resultEnregistrementPlainte')
const modifier = document.querySelector('div#modifier > form > input')

plaignantId.addEventListener('input', function(plaignantId){
    resultPlaignant.innerHTML = "Plaignant : " + plaignantId.target.value;
});

cible.addEventListener('input', function(cible){
    resultCible.innerHTML = "Cible : " + cible.target.value;
});

motif.addEventListener('input', function(motif){
    resultMotifs.innerHTML = "Motif(s) : " + motif.target.value;
});

dateFaits.addEventListener('input', function(dateFaits){
    resultDateFaits.innerHTML = "Date & heure des faits : " + dateFaits.target.value; 
});

faits.addEventListener('input', function(faits){
    resultFaits.innerHTML = "Faits : " + "\n" + faits.target.value;
});

infosImportantes.addEventListener('input', function(infos){
    resultInfos.innerHTML = "---" + "\n" + "Informations importantes :" + "\n" + infos.target.value;
});

partiCivil.addEventListener('change', function(particivil){
    resultPartiCivil.innerHTML = particivil.target.value;
});

plaignantTel.addEventListener('input', function(resultel){
    resultTelPlaignant.innerHTML = "Numéro du Plaignant :" + resultel.target.value;
});

matricule.addEventListener('input', function(matriculeAgent){
    nomAgent.addEventListener('input', function(identiteAgent){
        datePlainte.addEventListener('input', function(datePlainte){
            resultEnregistrementPlainte.innerHTML = "Plainte enregistrée le " + datePlainte.target.value + " par " + matriculeAgent.target.value + " | " + identiteAgent.target.value;
        })
    })
});

lireRapport.addEventListener('click', function lire(){
    formPlainte.style.display= 'none';
    resultPlainte.style.display= 'block';
});

modifier.addEventListener('click', function modifier(){
    formPlainte.style.display = 'block';
    resultPlainte.style.display = 'none';
});

/*
function addComplaint(victim, accused, content) {
    return fetch("http://141.94.244.187:4002/api/lspd/complaints/add", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoxOTUxLCJsYXN0X25hbWUiOiJXaWxsIiwiZmlyc3RfbmFtZSI6Ikh1ZHNvbiIsInBsYXllcl9pZCI6NTg1LCJkaXNjb3JkIjoiZGlzY29yZDozNTg3MTQwOTk0MDU4MTU4MTkiLCJiaXJ0aF9kYXRlIjoiMTk5NS0xMS0xMlQwMDowMDowMC4wMDBaIiwidXNlcm5hbWUiOiJzbm93IiwiYXBpX2FkbWluIjoxLCJjb21wYW55X2lkIjowLCJjb21wYW55X2dyYWRlX2lkIjoxLCJwZXJtcyI6eyJhY2NvdW50X2FjY2VzcyI6MCwiaGllcmFyY2h5IjowfX19.bjiK5YjgK66zqW3eZqKpM8eYc2j8O4Y1U3HDBc-tmto",
        },
        body: JSON.stringify({ victim: victim, accused: accused, content: content })}
    )}

let finalPlaignant = plaignantId.value;
let finalCible = cible.value;
let finalMotif = motif.value;
let finalDateFaits = dateFaits.value;
let finalFaits = faits.value;
let finalInfos = infosImportantes.value;
let finalPC = partiCivil.value;
let finalTel = plaignantTel.value;
let finalPlainte = "Plainte enregistrée le " + datePlainte.value + " par " + matricule.value + " | " + nomAgent.value;

function sendContent(finalPlaignant, finalCible, finalMotif, finalDateFaits, finalFaits, finalInfos, finalPC, finalTel, finalPlainte){
    let finalContent = "Plaignant : " + finalPlaignant + "\n" + "Cible(s) : " + finalCible + "\n" + "Motif(s) : " + finalMotif + "\n" + "Date et heure des faits : " + finalDateFaits + "\n" + "\n" + "Faits : " + finalFaits + "\n" + "\n" + "---" + "\n" + "Informations importantes : " + "\n" + finalInfos + "\n" + "\n" + finalPC + "\n" + "\n" + "Téléphone du plaignant : " + finalTel + "\n" + "\n" + finalPlainte;
    addComplaint(finalPlaignant, finalCible, finalContent).then((response) => {
        console.log(response);
    })
}

const envoyer = document.querySelector("div#envoyer > form > input");

envoyer.addEventListener('click', sendContent)
*/

function addComplaint(victim, accused, content) {
    return fetch("http://141.94.244.187:4002/api/lspd/complaints/add", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoxOTUxLCJsYXN0X25hbWUiOiJXaWxsIiwiZmlyc3RfbmFtZSI6Ikh1ZHNvbiIsInBsYXllcl9pZCI6NTg1LCJkaXNjb3JkIjoiZGlzY29yZDozNTg3MTQwOTk0MDU4MTU4MTkiLCJiaXJ0aF9kYXRlIjoiMTk5NS0xMS0xMlQwMDowMDowMC4wMDBaIiwidXNlcm5hbWUiOiJzbm93IiwiYXBpX2FkbWluIjoxLCJjb21wYW55X2lkIjowLCJjb21wYW55X2dyYWRlX2lkIjoxLCJwZXJtcyI6eyJhY2NvdW50X2FjY2VzcyI6MCwiaGllcmFyY2h5IjowfX19.bjiK5YjgK66zqW3eZqKpM8eYc2j8O4Y1U3HDBc-tmto",
        },
        body: JSON.stringify({ victim: victim, accused: accused, content: content })}
    )
}

document.querySelector("div#envoyer > form > input").addEventListener('click', () => {
    let finalPlaignant = plaignantId.value;
    let finalCible = cible.value;
    let finalMotif = motif.value;
    let finalDateFaits = dateFaits.value;
    let finalFaits = faits.value;
    let finalInfos = infosImportantes.value;
    let finalPC = partiCivil.value;
    let finalTel = plaignantTel.value;
    let finalPlainte = "Plainte enregistrée le " + datePlainte.value + " par " + matricule.value + " | " + nomAgent.value;
    let finalContent = "Plaignant : " + finalPlaignant + "\n" + "Cible(s) : " + finalCible + "\n" + "\n" + "Motif(s) : " + finalMotif + "\n" + "Date et heure des faits : " + finalDateFaits + "\n" + "\n" + "Faits : " + "\n" + finalFaits + "\n" + "\n" + "---" + "\n" + "Informations importantes : " + "\n" + finalInfos + "\n" + "\n" + finalPC + "\n" + "\n" + "Téléphone du plaignant : " + finalTel + "\n" + "\n" + finalPlainte;
    console.log(finalPlaignant, finalCible, finalContent);
    addComplaint(finalPlaignant, finalCible, finalContent).then((response) => {
        console.log(response);
    })
});