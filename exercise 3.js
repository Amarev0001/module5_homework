let stringInput = prompt("Введите пожалуйста текст");
console.log("Вы ввели: " + stringInput);
const reverse = stringInput.split('').reverse().join('');
console.log("В обратном порядке будет: " + reverse);