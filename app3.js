"use strict";

//Завдання 1
const k1 = parseInt("5px");
const k2 = parseInt("12djd334");
const k3 = parseInt("12.45asdwe12");
const k4 = parseInt("qwqweeewq");

console.log(k1, k2, k3, k4);

//Завдання 2
const e1 = parseFloat("5px");
const e2 = parseFloat("12djd334");
const e3 = parseFloat("12.45asdwe12");
const e4 = parseFloat("qwqweeewq");

console.log(e1, e2, e3, e4);

//Завдання 3
console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18));
console.log(Math.min(2, 34, -99, 3, 22, 36, 733, 18));

//Завдання 4
const random = Math.random() * (19 - 3) + 3;
console.log(random);

//Завдання 5
const result = 5 + 5 + "5";
console.log(result, typeof result);

//Завдання 6
const email = "danylohromyak12@gmail.com";
const validEmail = email.includes("@");
const emailLength = email.length;
console.log(email, validEmail, emailLength);

//  Завдання 7
const my = "My";
const name = "name";
const is = "is";
const fullName = `${my} ${name} ${is} Danylo`;
console.log(fullName);
// Або:
// const my = "My";
// const name = "name";
// const is = "is";
// const fullName = my + " " + name + " " + "Viktor";
// console.log(fullName);

//Завдання 8
const userName = prompt("Як вас звати?");
const payment = 300;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);