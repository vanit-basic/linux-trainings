let a = document.querySelectorAll('div.d-flex > a');
let phone_input = document.getElementById('phone_input');
let dropdown_button = document.getElementById('dropdown_button');

for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('click', function () { addSign(i); });
}
function addSign(i) {
    let img = '';
    img = '<img src="img/' + i + '.svg">';
    phone_input.value = a[i].innerHTML;
    dropdown_button.innerHTML = img;
}