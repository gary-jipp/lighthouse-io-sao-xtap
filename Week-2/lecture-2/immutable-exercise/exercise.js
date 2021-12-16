const array1 = [1, 2, 3, 4, 5];
const object1 = {
  item1: 1,
  item2: 2,
  item3: 3,
  item4: 4
};

// 1) Duplicate an array
let array2 = [...array1];
console.log(array1);
console.log(array2);

// 2) Duplicate an object
let object2 = { ...object1 };
console.log(object1);
console.log(object2);

// 3) Add an item to an array
array2 = [...array1, 6];
console.log(array1);
console.log(array2);

// 4) Remove items from an array that match a specific condition 
array2 = array1.filter(item => (item > 2));
console.log(array1);
console.log(array2);

// 5) Update the specific key's value in an object
let item3 = 33;
object2 = { ...object1, item3 };
console.log(object1);
console.log(object2);



// 6) Remove a specific key from an object and get the remaining values. 
const [value1, value2] = [1, 2];


// the "rest" operator
let { item1, ...object3 } = object1;  // item1 name must match an existing get

console.log(item1);
console.log(object3);   // object3 is our new object and its missing item1

