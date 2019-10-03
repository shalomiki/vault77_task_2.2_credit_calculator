
//
let sum = Number(prompt("Сумма займа",""));
let time = Number(prompt("Время займа", ""));
let interest = Number(prompt("Интерес",""));
let daily = ((sum) + (sum*interest/100))/time;
let overflow = daily*time-sum;
// подставте значениея
document.getElementById('sum').innerHTML = sum;
document.getElementById('time').innerHTML = time;
document.getElementById('interest').innerHTML = interest;
document.getElementById('daily').innerHTML = daily;
document.getElementById('overflow').innerHTML = overflow;
