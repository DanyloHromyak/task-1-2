"use strict";

// Завдання 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Завдання 2
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("Парне число", i);
  } else {
    console.log("Непарне число", i);
  }
}

// Завдання 3
let num = 20;

while (num <= 28) {
  // Не буде більше 28 це означає, що і може бути 28, чи як? В мене з алгебри 7, вибачте.
  console.log(num);
  num++;
}

// Завдання 4
let name = ``;
name = prompt("ім'я твого супергероя💀");

while (name.length < 6) {
  console.log(name);
  name = prompt("ім'я твого супергероя💀");
}
