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


//filter

function filterOpen() {
    var filterOpenBtn = document.getElementById('filter-open-btn');
    filterOpenBtn.classList.add('hide');

    var filterFrom = document.querySelector('section#filter_toggle>form');
    filterFrom.classList.remove('hide');

}

function filterClose() {
    var filterOpenBtn = document.getElementById('filter-open-btn');
    filterOpenBtn.classList.remove('hide');

    var filterFrom = document.querySelector('section#filter_toggle>form');
    filterFrom.classList.add('hide');
}

function selectFilter() {
    var filterOption1 = document.querySelector('input');
    filterOption1.classList.toggle('active_input_button');
    document.querySelector('input[type=submit]').value = 'Er zijn (22) reslutaten';

}

function selectFilter2() {
    var filterOption2 = document.querySelector('input[name="2"]');
    filterOption2.classList.toggle('active_input_button');
    document.querySelector('input[type=submit]').value = 'Er zijn (64) reslutaten';
}

function selectFilter3() {
    var filterOption3 = document.querySelector('input[name="3"]');
    filterOption3.classList.toggle('active_input_button');
    document.querySelector('input[type=submit]').value = 'Er zijn (99) reslutaten';
}

function selectFilter4() {
    var filterOption4 = document.querySelector('input[name="4"]');
    filterOption4.classList.toggle('active_input_button');
    document.querySelector('input[type=submit]').value = 'Er zijn (12) reslutaten';
}

function selectFilter5() {
    var filterOption5 = document.querySelector('input[name="5"]');
    filterOption5.classList.toggle('active_input_button');
    document.querySelector('input[type=submit]').value = 'Er zijn (18) reslutaten';
}

function selectFilter6() {
    var filterOption6 = document.querySelector('input[name="6"]');
    filterOption6.classList.toggle('active_input_button');
    document.querySelector('input[type=submit]').value = 'Er zijn (9) reslutaten';
}

function selectFilter7() {
    var filterOption7 = document.querySelector('input[name="7"]');
    filterOption7.classList.toggle('active_input_button');
    document.querySelector('input[type=submit]').value = 'Er zijn (11) reslutaten';
}

function selectFilter8() {
    var filterOption8 = document.querySelector('input[name="8"]');
    filterOption8.classList.toggle('active_input_button');
    document.querySelector('input[type=submit]').value = 'Er zijn (15) reslutaten';
}

function selectFilter9() {
    var filterOption9 = document.querySelector('input[name="9"]');
    filterOption9.classList.toggle('active_input_button');
    document.querySelector('input[type=submit]').value = 'Er zijn (2) reslutaten';
}



