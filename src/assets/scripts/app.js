// Permet de définir une variable `songs` pour l'exercice 6
import songs from './data';

// Exo 1 : Plan d'action
// 1/ On va commencer par sélectionner le bouton "mode nuit"
// 2/ On va brancher un écouteur d'event sur ce bouton, avec 'click' en 1er argument
// 3/ Lorsque l'event sera déclenché, on va ajouter/retirer la classe 'dark' au body du document

const themeButton = document.querySelector('#theme-button');
themeButton.addEventListener('click', () => {
    // Ici le toggle, c'est comme un bouton poussoir : Quand j'appuie une fois, il s'active, quand j'appuie une deuxième fois il se désactive
    document.body.classList.toggle('dark');
});

// Exo 2 : Plan d'action
// 1/ On va commencer par sélectionner le formulaire "#tour-form"
// 2/ On va brancher un écouteur d'event sur le formulaire, cette fois, on attend l'évenement "soumission du formulaire" ("submit")
// 3/ Empeche le comportement par défaut du form
// 4/ On sélectionne la balise select concernée
// 5/ Puis, on récupère la valeur du select
// 6/ Selectionner toutes les villes contenues dans la balise #cities

const tourForm = document.querySelector('#tour-form');
tourForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const selectElement = tourForm.querySelector('select');
    const selectValue = selectElement.value;
    const cities = document.querySelectorAll('#cities li')

    for (const city of cities) {
        if (selectValue === city.dataset.country || selectValue === "all") {
            city.classList.remove('hidden');
        } else {
            city.classList.add('hidden');
        }
    }
});
// exo3
// on recupere le lien de la carotte -> j'ajoute un id a <a>
// on selectionne l'element sur lequel on va travailler (#listen)
// on ecoute cet element//
// si === play alors on ajoute la classe  animate sinon on retire la classe

const carotAnimate = document.querySelector('#carot');
const audioPlayer = document.querySelector('#audio-player');

audioPlayer.addEventListener('play', () => {
    carotAnimate.classList.add('animate');
})
audioPlayer.addEventListener('pause', () => {
    carotAnimate.classList.remove('animate');
})

//exo 4
// recuperrer l'element sur lequel on travaille
//ecouter l'element
//agir en fonction remove hidden

const buttonContact = document.querySelector('#contactButton');
const contactView = document.querySelector('#contact');
buttonContact.addEventListener('click', () => {
    contactView.classList.remove('hidden');
})
//pour refermer la modal
const closeButton = document.querySelector('.modal-close');
function modalClose() {
    contactView.classList.add('hidden');
}
closeButton.addEventListener('click', closeButton);
document.addEventListener('keyup', (event) => {
    if (event.code === 'Escape') {
        modalClose();
    }
});

//exo 5
const carotScroll = document.querySelector('#carot');
carotScroll.addEventListener("click", (event) => {
    event.preventDefault();
    carotScroll = scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });;
})

//exo 6
//liste des morceau dispo sous var songs

const songForm = document.querySelector('#songs');
const formSearch = document.querySelector("#search");//form action
const resultList = document.querySelector("#result");//result

buttonSong.addEventListener('submit', (event) => {
    event.preventDefault();
    const album = formSearch.querySelector('select[name=albim]').value;
    const composer = formSearch.querySelector('#composer').value; //
    for (const song of songs) {
        if ((song.composer === composer || song.composer === "all") &&
            (song.album === album || song.album === 'all')) {
            const list = document.createElement('li');
            list.className = 'segment-item';
            list.textContent = 'song-title';
            resultList.append("list");

        }
    }
});

