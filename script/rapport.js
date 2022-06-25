const title = document.getElementById('titre');
const matricule = document.getElementById('matricule');
const identite = document.getElementById('nom');
const faits = document.getElementById('texte');
const infosImportantes = document.getElementById('infos');
const button = document.querySelector("div#button > input");
const body = document.querySelector("body");

title.addEventListener('input', function(createTitle){
    const h2 = document.getElementById('resultTitle');
    h2.innerHTML = createTitle.target.value;
})

faits.addEventListener('input', function(createFaits){
    const resultFaits = document.getElementById('resultFaits');
    resultFaits.innerHTML = createFaits.target.value;
})

infosImportantes.addEventListener('input', function(createInfos){
    const resultInfos = document.getElementById('resultInfos');
    resultInfos.innerHTML = "Informations à retenir :" + "\n" + createInfos.target.value;
})

matricule.addEventListener('input', function(createMatricule){
    const resultMatricule = document.getElementById('resultMatricule');
    identite.addEventListener('input', function(createNom){
        const resultNom = document.getElementById('resultNom');
        resultMatricule.innerHTML = "Rapport écrit par l'Officier " + createMatricule.target.value + " | " + createNom.target.value;
    })
})

const resultRapport = document.querySelector('div.resultRapport');
const ecriture = document.getElementById('form');

button.addEventListener('click', function(createRapport){
    resultRapport.style.display = "block";

    ecriture.style.display = "none";
})

const modifier = document.querySelector("div#modifier > form > input");

modifier.addEventListener('click', function(modifierRapport){

    resultRapport.style.display = "none";
    ecriture.style.display = "block";
})