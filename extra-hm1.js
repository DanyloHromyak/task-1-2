const username = prompt("Створіть нікнейм");
const password = prompt("Створіть пароль");

const adminUsername = "ADMIN";
const adminPassword = "PASSWORD";

if (username === adminUsername && password === adminPassword) {
  alert("Вітаємо, Адмін!");
} else {
  alert("Неправильні дані для входу");
}
