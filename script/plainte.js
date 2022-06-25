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

lireRapport.addEventListener('click', function(lire){
    formPlainte.style.display= 'none';
    resultPlainte.style.display= 'block';
});

modifier.addEventListener('click', function(modifier){
    formPlainte.style.display = 'block';
    resultPlainte.style.display = 'none';
});