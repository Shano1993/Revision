const LEFT_BUTTON = 0;
const RIGHT_BUTTON = 2;
const cases = document.getElementsByClassName('case');

document.addEventListener('contextmenu', function (event){
    event.preventDefault();
});

for (let i = 0; i < cases.length; i++) {
    cases[i].addEventListener('mouseup', function (event) {
        if(event.button === LEFT_BUTTON)
            inserText(this, 'X', 'green');
        else if(event.button === RIGHT_BUTTON)
            inserText(this, 'O', 'red');
    })
}

/**
 *
 * @param element
 * @param lettreJoueur
 * @param classCss
 */

function inserText(element, lettreJoueur, classCss) {
    element.innerHTML = lettreJoueur;
    element.classList.add(classCss);
}