//Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)
'use strict';
let myElement = document.querySelector('.list');

for (let i = 1; i <= 100; i++) {
    myElement.innerHTML += `<dib>${i}</dib>`    
}