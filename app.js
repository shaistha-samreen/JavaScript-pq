//level-8 practice question

//1Q Write an arrow function named array Average that accepts an array of numbers and
//returns the average of those numbers.


const arrayAverage = (arr)=>{
    let total = 0;
    for (let number of arr) {
        total += number;
    }
    return total/arr.length;
};

let arr = [1,2,3,4,5,6];
console.log (arrayAverage(arr));

//----------------------------------------------

//2Q Write an arrow function named isEven() that takes a single number
//as argument and returns if it is even or not.

let num = 4;
const isEven = (num)=>num % 2 == 0;

//----------------------------------------------

//3Q Create a new array whose elements are inupper case of words present in the original array

let strings = ["Shaistha", "samreen", "Khatoon", "aleena"];
console.log(strings.map((string)=>string.toUpperCase()));

//----------------------------------------------

//4Q Write a function called mergeObjects that accepts two objects and returns a new object which contains 
// all the keys and values of the first object and second object

const mergeObjects=(obj1,obj2)=>({...obj1,...obj2}); 
mergeObjects({a:1,b:2}, {c:3,d:4});
//---------------------------------------



