// Creating Variables according datatypes and assigning values 
let NumberData= 123;  // Number - Data_Type (Has number object and it's wrapper)
let StringData="xyz String" // String - Data_Type (Has String object and it's wrapper)
let BooleanData= true  //it has no wrapper 
// just variable for undefined value 
let JustVariable; 
let VariableNull= null

// let's see, what it return
// printing all together using console.table([variable1,variavle2,variable3,variable4,variable5])
console.table([NumberData,StringData,BooleanData,JustVariable,VariableNull]);

console.log([typeof(NumberData),typeof(StringData),typeof(BooleanData),typeof(JustVariable),typeof(VariableNull)])















/* primitive values are immutable — once a primitive value is created,
 It cannot be changed, although the variable that holds,it may be reassigned another value.*/

let a = "Hello";
let b = a; // Copy of the value is assigned

b = "World"; // Changing b does NOT affect a

// console.log(a); // "Hello"
// console.log(b); // "World"

// Reference Types 
// objects are stored by reference, changing obj2 also affects obj1.

let obj1 = { name: "Alice" };
let obj2 = obj1; // Reference to the same object

obj2.name = "Bob"; // Modifies the original object

// console.log(obj1.name); // "Bob"
// console.log(obj2.name); // "Bob"


// Primitive & Reference types 

// Immutable and mutable concept 
// Stack and Heap Concept 

// Resources:
// https://www.freecodecamp.org/news/mutability-vs-immutability-in-javascript/
// https://blog.devgenius.io/mutable-and-immutable-in-javascript-78a3cbc6187c