function addDarkTheme() {
    var backgroundNavButton = document.querySelector('nav#end-story>ul>a');
    backgroundNavButton.classList.toggle('white-button');

    var navButtonTextColor = document.querySelector('nav#end-story>ul>a');
    navButtonTextColor.classList.toggle('white-button-text');

    var backgroundColor = document.querySelectorAll('body, main');
    var backgroundColorArray = Array.from(backgroundColor);

//    backgroundColor.classList.toggle('dark-bg');
    backgroundColorArray.forEach(function(el) {
        el.classList.toggle('dark-bg');
    })

    var textColor = document.querySelectorAll('h1, i, i>a, p');
    var textColorArray = Array.from(textColor);



    textColorArray.forEach(function(el) {
        el.classList.toggle('dark-text');
    })


}

//button toggle

var toggleButton = document.querySelector('button');
var icon = document.querySelector('button>img');
var label = document.querySelector('button>div');
var status = 'false';

function rotateButton() {
    if (status == 'day') {
        status = 'night';
        icon.classList.remove('rotated');
        label.innerHTML = 'Donker';
    } else {
        status = 'day';
        icon.classList.add('rotated');
        label.innerHTML = 'Licht';
    }
}

toggleButton.addEventListener('click', rotateButton, false);


