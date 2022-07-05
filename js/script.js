liens = document.querySelectorAll('.lien');

liens[0].classList.add('colorDeFond');

liens.forEach(lien => {
    lien.addEventListener('click', lienSelectionne);
});

function lienSelectionne(){
    liens.forEach(lien => {
        lien.classList.remove('colorDeFond');
    });
    this.classList.add('colorDeFond');
}

// liens.forEach(lien => {
//     lien.addEventListener('mouseover', lienSurvole);
// });

// function lienSurvole(){
//     liens.forEach(lien => {
//         lien.classList.remove('colorDeFond');
//     });
//     this.classList.toggle('colorDeFond');
// }

let btnBack = document.querySelector('.button-back');

btnBack.addEventListener('click', replier);

function replier(){
    document.querySelector('.menu').classList.toggle('replier');
    this.classList.toggle('position-bouton');
}