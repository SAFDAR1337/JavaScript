// >> String to Number Conversion <<

// variables 
let str1 = "123"
// String contain number 
let str2 = "3.5"
// String contain floating number
let str3 = "Hello"
// String contain pure string value
let str4 = "Hello12"
// String contain string+number
let emptyStringValue = "";
// empty String: ""

// >> convert into number [Number(),ParseFloat(),ParseInt()] 
// Using Number() Method

let mynumber = Number(str1); //123

let myflotValue = parseFloat(str2); // 3.5

let StrTonum = Number(str3); // NaN
// "Hello12" contains letters, it cannot be converted into a numeric value.
// The result is NaN, which technically has the data type "number", but it represents an invalid number.


let CombinedValue = Number(str4) //NaN
console.log(isNaN(CombinedValue))
let emptyStringValueConverted = Number(emptyStringValue); // Zero 0

// checking 
console.table([mynumber, myflotValue, StrTonum, CombinedValue, emptyStringValueConverted]);
console.log([typeof (mynumber), typeof (myflotValue), typeof (StrTonum), typeof (CombinedValue)])



// *
// The Unary + Operator
// if number: "5"
let StringNumber = "5";
let ConvertedValueof = +StringNumber
console.log(ConvertedValueof); // Converted in 5
// Checking  
console.log(typeof (ConvertedValueof));

// if not a number: "String"
let strValue = "string"
let strConvertedValue = +strValue;
console.log(strConvertedValue); //NaN 
console.log(typeof (strConvertedValue));

// if just empty string: "" >> Converted into Zero

let myEmptyValue = "";
let emptyConvertedValue = +myEmptyValue;
console.log(emptyConvertedValue);
console.log(typeof (emptyConvertedValue));

//* 
// ParseFloat()

// * Variables
// let str1 = "123"   
// let str2 = "3.5"   
// let str3 = "Hello" 
// let str4 = "Hello12" 
// let emptyStringValue = "";
let str1Converted = parseFloat(str1) //Result: 123
let str2Converted = parseFloat(str2) // Result: 3.5
let str3Converted = parseFloat(str3) //Result: NaN
let str4Converted = parseFloat(str4) //Result:NaN
let emptyStringValueConverted1 = parseFloat(emptyStringValue) //Result:NaN
//*
console.table([str1Converted, str2Converted, str3Converted, str4Converted, emptyStringValueConverted1]);
//*
//typeof
console.table([typeof (str1Converted), typeof (str2Converted), typeof (str3Converted), typeof (str4Converted), typeof (emptyStringValueConverted1)]);

//*
// Note:
// if empty string "";
// Number () Returns. 0 (Zero)
// ParseFloat() Returns. NaN

let strFLoat = "3.5.2";
let str2Float = "3.1 * 1.2";
let str3Float = "12Hello";
let str4Float= "Hello123";
let str5Float= "        12";
let str6Float="";

//*
// Important note like, empty string behaviour
console.log(parseFloat("123abc")); // Output: 123
console.log(Number("123abc"));     // Output: NaN











// String to number conversion 
// Resources:
// https://github.com/SAFDAR1337/JavaScript/blob/main/DataTypes/ParseFloat.md
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc  little bit study of this
