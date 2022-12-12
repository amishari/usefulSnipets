const numbers = [1, 2, 3, 2, 2, 4, 5, 5, 6];

const duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));

console.log(duplicates);
// [ 2, 2, 5 ]


const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

const isDuplicate = numbers.some((item, index) => index !== numbers.indexOf(item));

if (!isDuplicate) {
    console.log(`Array doesn't contain duplicates.`);
} else {
    console.log(`Array contains duplicates.`);
}
// Output: Array contains duplicates.
