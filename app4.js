"use strict";

//Завдання 1
const number = prompt("Введіть число");
if (55 <= number && number <= 99) {
  console.log("Число потрапляє в діапазон");
} else if (55 >= number || number >= 99) {
  console.log("Число не потрапляє в діапазон");
}
else {
  console.log("Це не число!");
}

//Завдання 2
const Max = 55;
if (0 <= Max && Max <= 16) {
  console.log("Дитя");
} else if (17 <= Max && Max <= 60) {
  console.log("Дорослий");
} else if (61 <= Max && Max <= 100) {
  console.log("Пенсіонер");
} else if (0 > Max || Max > 100) {
  console.log("Супердовгожитель або ненароджений");
} else {
  console.log("Це не вік!");
}

//Завдання 3
const firstName = "Danylo";
const secondName = "Hromyak";

if (firstName.length > 4 && secondName.length > 5) {
  console.log(firstName.length + secondName.length);
} else {
  console.log("УПС");
}

//Завдання 4
const randomNumber = Math.floor(Math.random() * 5 + 1);
if (randomNumber === 1) {
  console.log("Це число - 1!");
} else if (randomNumber === 2) {
  console.log("Це число - 2!");
} else if (randomNumber === 3) {
  console.log("Це число - 3!");
} else if (randomNumber === 4) {
  console.log("Це число - 4!");
} else if (randomNumber === 5 ) {
  console.log("Це число - 5 !");
}

//Завдання 5
let lang = prompt("напишіть: ua або en, або ru, або fr");

switch (lang) {
  case "ua":
    console.log("Травень");
    break;
  case "en":
    console.log("May");
    break;
  case "ru":
    console.log("Май");
    break;
  case "fr":
    console.log("Mai");
    break;
  default:
    console.log("this lang is not existed");
    break;
}
