let x = `1`;
if (typeof x === 'number') {
	console.log("x является числом")
}
else if (typeof x === 'string') {
	console.log("x является строкой")
	}
else if (typeof x === 'boolean') {
	console.log("x принадлежит к логическому типу")
	}
else {
	console.log("Тип x не определён")
}