// SI Apre
const button0 = document.querySelector(`i`);
const show = document.querySelector(`.hamburger-menu`);

button0.addEventListener(`click`, function() {
    show.style.display = `block`;
});

// SI Chiude
const button1 = document.querySelector(`.close`);

button1.addEventListener(`click`, function() {
    show.style.display = `none`;
});


