let arrNew = [2, 4, 8, 16, 32, 64];
console.log("Длина массива: " + arrNew.length);
let arrNew1 = arrNew.map(function(item, index, array) { //Перебираем массив
	return item + 3 //Увеличиваем значение элементов массива на 3
  });
console.log("Массив до изменения: " + arrNew);
console.log("Массив после изменения: " + arrNew1);