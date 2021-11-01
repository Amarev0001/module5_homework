let days = new Map();
days.set(1, "Monday");
days.set(2, "Tuesday");
days.set(3, "Wednesday");
days.set(4, "Thursday");
days.set(5, "Friday");
days.set(6, "Saturday");
days.set(7, "Sunday"); 
for (let name of days.keys()) { //Ïîëó÷àåì êëþ÷è ìàññèâà
	console.log(name);
}
days.forEach((value, key) => { //Âûâîä â êîíñîëü çíà÷åíèé â çàäàííîì âèäå
	console.log(`Дунь - ${key}, Месяц - ${value}`);
});