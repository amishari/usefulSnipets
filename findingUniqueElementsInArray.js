arr = [1, 2, 4, 5, 1, 2, 9, 8, 7, 3, 2, 5, 4, 1, 2, 4, 9];

function uniqueFinderarray(arr) {
	let array = arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item));
	return array;
}
