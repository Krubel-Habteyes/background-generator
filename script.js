
sally.hi;

var array = [1, "5", 4, 591, 392, 391, 2, "2", 10, 2, 1, "1", 1, 20, 20];

function arraySort(arr) {
	let numArr = arr.filter((value) => typeof value === "number");

	let stringArr = arr.filter((value) => typeof value === "string");

	numArr.sort(function (a, b) {
		return a - b;
	});
	console.log(numArr);

	stringArr.sort(function (a, b) {
		return a - b;
	});
	console.log(stringArr);

	var endArray = [];

	var storeArray = [];

	numArr.forEach(function (value, i) {
		if (value === arr[i + 1]) {
			storeArray.push(value);
		} else if (value === arr[i - 1]) {
			storeArray.push(value);
			endArray.push(storeArray);
			storeArray = [];
		} else {fdfdfas
			endArray.push(value);
		}
	});

	console.log(endArray);
	return arr;
}

arraySort(array);
