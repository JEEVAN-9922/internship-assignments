// Program 1: Create array from 1 to 5
let arr1 = [];
for (let i = 1; i <= 5; i++) {
    arr1.push(i);
}
console.log("Program 1:", arr1);

// Program 2: Create even numbers array
let arr2 = [];
for (let i = 2; i <= 10; i += 2) {
    arr2.push(i);
}
console.log("Program 2:", arr2);

// Program 3: Create odd numbers array
let arr3 = [];
for (let i = 1; i <= 9; i += 2) {
    arr3.push(i);
}
console.log("Program 3:", arr3);

// Program 4: Create square of numbers
let arr4 = [];
for (let i = 1; i <= 5; i++) {
    arr4.push(i * i);
}
console.log("Program 4:", arr4);

// Program 5: Create array in reverse order
let arr5 = [];
for (let i = 5; i >= 1; i--) {
    arr5.push(i);
}
console.log("Program 5:", arr5);

// Program 6: Create array of multiples of 3
let arr6 = [];
for (let i = 1; i <= 5; i++) {
    arr6.push(i * 3);
}
console.log("Program 6:", arr6);

// Program 7: Create array of first 5 natural numbers using function
function createArray(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}
console.log("Program 7:", createArray(5));
