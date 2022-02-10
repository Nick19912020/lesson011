const btn = document.getElementById('btn');
const input = document.getElementById('text');
const square = document.getElementById('square');
const circle = document.getElementById('circle');
const e_btn = document.getElementById('e_btn');
const range = document.getElementById("range");
const idSpan = document.getElementById("range-span");
//задание 1
const color = function () {
    square.style.backgroundColor = input.value;
};

//задание 2
const ebtnF = function (event) {
    ebtn.style.display = "none"
};
//задание 3
const rangeF = function (event) {
    idSpan.textContent = event.target.value;
    circle.style.width = event.target.value + "%";
    circle.style.height = event.target.value + "%";
};

document.addEventListener('DOMContentLoaded', ebtnF);
btn.addEventListener('click', color);
range.addEventListener('input', rangeF);
console.log(idSpan);



