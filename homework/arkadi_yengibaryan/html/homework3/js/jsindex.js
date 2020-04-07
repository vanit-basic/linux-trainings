let menu_btn = document.getElementById('menu_btn');
let menu = document.getElementById('menu');
let content = document.getElementById('content');
let deactivate_menu_btn = document.getElementById('deactivate_menu_btn');
let setting = document.getElementById('setting');

menu_btn.addEventListener('click', menuAnime);
deactivate_menu_btn.addEventListener('click', menuAnime);
setting.addEventListener('click', settingAnime);

function menuAnime() {
    menu.classList.toggle('menu_active');
    content.classList.toggle('menu_active_bg');
}

function settingAnime() {
    setting.classList.toggle('settings_active');
}

let colors = document.getElementsByClassName('change_conten_color');

for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', function () { changeContentColor(i) });
}

function changeContentColor(i) {
    const bgColorsList = ['#e74c3c', '#673ab7', '#e67e22', '#1abc9c', '#5da4d9'];
    const borderColorsList = ['#c83c2e', '#512da8', '#b86318', '#248673', '#4783c2'];

    const changeBgElems = document.getElementsByClassName('change_bg');
    const changeTextColorElems = document.getElementsByClassName('change_text_color');
    const changeBorderColorElems = document.getElementsByClassName('change_border_color');
    const changeSkillsBgElems = document.getElementsByClassName('change_skills_bg');

    let background = bgColorsList[i];
    let border = borderColorsList[i];

    changeColor(changeBgElems, 'backgroundColor', background);
    changeColor(changeTextColorElems, 'color', background);
    changeColor(changeBorderColorElems, 'borderColor', border);
    changeColor(changeSkillsBgElems, 'backgroundColor', border);
}

function changeColor(arr, elem, color) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].style[elem] = color;
    }
}