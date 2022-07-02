let btnBack = document.querySelector('.button-back');

btnBack.addEventListener('click', replier);

function replier(){
    let lienTexte = document.querySelectorAll('.lien-texte');
    document.querySelector('.menu').classList.toggle('replier');
    for(let i=0; i<lienTexte.length; i++){
        lienTexte[i].classList.toggle('cacher');
    }
    this.classList.toggle('position-bouton');
}