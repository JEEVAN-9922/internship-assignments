// Program 1: Create array from 1 to 5
let arr1 = [];
let i1 = 1;
while (i1 <= 5) {
    arr1.push(i1);
    i1++;
}
console.log("Program 1:", arr1);

// Program 2: Create even numbers array
let arr2 = [];
let i2 = 2;
while (i2 <= 10) {
    arr2.push(i2);
    i2 += 2;
}
console.log("Program 2:", arr2);

// Program 3: Create odd numbers array
let arr3 = [];
let i3 = 1;
while (i3 <= 9) {
    arr3.push(i3);
    i3 += 2;
}
console.log("Program 3:", arr3);

// Program 4: Create square of numbers
let arr4 = [];
let i4 = 1;
while (i4 <= 5) {
    arr4.push(i4 * i4);
    i4++;
}
console.log("Program 4:", arr4);

// Program 5: Create array in reverse order
let arr5 = [];
let i5 = 5;
while (i5 >= 1) {
    arr5.push(i5);
    i5--;
}
console.log("Program 5:", arr5);

// Program 6: Create array of multiples of 3
let arr6 = [];
let i6 = 1;
while (i6 <= 5) {
    arr6.push(i6 * 3);
    i6++;
}
console.log("Program 6:", arr6);

// Program 7: Create array using function + while loop
function createArrayWhile(n) {
    let arr = [];
    let i = 1;
    while (i <= n) {
        arr.push(i);
        i++;
    }
    return arr;
}
console.log("Program 7:", createArrayWhile(5));
