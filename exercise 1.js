let inputNum = prompt("Введите пожалуйста число: ");
inputNum = +inputNum;
if (typeof inputNum === 'number'){
	evenTest = inputNum % 2;
	if (evenTest === 0){
		console.log("число " + inputNum + " четное.")
	}
	else if (evenTest === 1) {
		console.log("число " + inputNum + " нечетное.")
	}
	else {
		console.log("Упс, кажется, вы ошиблись")
	}
}