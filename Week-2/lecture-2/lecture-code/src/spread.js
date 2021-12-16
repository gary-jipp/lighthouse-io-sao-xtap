const array1 = [1, 2, 3];

// const array2 = array1.slice(); // we can do this
const array2 = [...array1];       // this is more efficient
array2.push(4);

// const array4 = [1,2,3   ,7];
const array4 = [...array1, 7]; // immutable "push"

console.log(array1);
console.log(array2);
console.log(array4);

const obj1 = {
  item1: 1,
  item2: 2,
  item3: 3,
};

// const obj2 = {...obj1}
const item2 = 22;
const obj2 = { ...obj1, item2 };

console.log(Object.keys(obj2));
console.log(Object.values(obj2));

console.log(obj1);
console.log(obj2);

// {...obj1}  ->  {item1:  1, item2:  2, item3:  3}
// - copy array
// - add to array
// - copy object
// - add to object
// - replace item in object

// array5 = 1, 2, 3, 4;
// console.log(...array5);