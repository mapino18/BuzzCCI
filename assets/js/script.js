const btnRaleur = document.getElementById('btnRaleur');
const btnComprenpas = document.getElementById('btnComprenpas');
const btnQuestions = document.getElementById('btnQuestions');
const btnFlo = document.getElementById('btnFlo');
const btnConnerie = document.getElementById('btnConnerie');
const nbRaleur = document.getElementById('nbRaleur');
const nbComprenpas = document.getElementById('nbComprenpas');
const nbQuestions = document.getElementById('nbQuestions');
const nbFlo = document.getElementById('nbFlo');
const nbConnerie = document.getElementById('nbConnerie');
const geoffreyImg = document.getElementById('geoffrey');



btnRaleur.onclick = () => {
    nbRaleur.innerText = parseInt(nbRaleur.innerText) + 1;
    document.cookie = `${name}=${encodeURIComponent("nbraleur= " + nbRaleur + "; samesite=strict")};`;

}

btnComprenpas.onclick = () => {
    nbComprenpas.innerText = parseInt(nbComprenpas.innerText) + 1;
    document.cookie = `${name}=${encodeURIComponent("nbComprenpas= " + nbRaleur + "; samesite=strict")}`;
}

btnQuestions.onclick = () => {
    nbQuestions.innerText = parseInt(nbQuestions.innerText) + 1;
    document.cookie = `${name}=${encodeURIComponent("nbQuestions= " + nbRaleur + "; samesite=strict")}`;
}

btnFlo.onclick = () => {
    nbFlo.innerText = parseInt(nbFlo.innerText) + 1;
    document.cookie = `${name}=${encodeURIComponent("nbFlo= " + nbFlo + "; samesite=strict")}`;
}

btnConnerie.onclick = () => {
    nbConnerie.innerText = parseInt(nbConnerie.innerText) + 1;
    document.cookie = `${name}=${encodeURIComponent("nbConnerie= " + nbConnerie + "; samesite=strict")}`;
    console.log(nbConnerie);
    if (parseInt(nbConnerie.innerHTML) > 9 && parseInt(nbConnerie.innerHTML) < 20 ){
        geoffreyImg.setAttribute('src','assets/img/hamm.png')
    }else if (parseInt(nbConnerie.innerHTML) > 19 && parseInt(nbConnerie.innerHTML) < 30 ){
        geoffreyImg.setAttribute('src','assets/img/hamm2.jpg')

    }

}




function showCookies() {
  const output = document.getElementById('cookies')
  output.textContent = `> ${document.cookie}`
}

function clearOutputCookies() {
  const output = document.getElementById('cookies')
  output.textContent = ''
}

/**
 * 
 * @param {string} name 
 * @returns {string|null}
 */
function getCookie(name){
    const cookie = document.cookie(';')
    const value = cookie
        .find(c => c.startsWith(name))
        ?.split('=')[1]
        console.log(value)
    if (value === undefined){
        return null
    }
    return decodeURIComponent(value)
}
