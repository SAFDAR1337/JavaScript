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

// >> convert into number [Number(),ParseFloat,]  
let mynumber= Number(str1);
let myflotValue = parseFloat(str2);
let StrTonum = Number(str3);
let CombinedValue = Number(str4)
let emptyStringValueConverted = Number(emptyStringValue);
// checking 
console.table([mynumber,myflotValue,StrTonum,CombinedValue]);
console.log([typeof(mynumber),typeof(myflotValue),typeof(StrTonum),typeof(CombinedValue)])

// "Hello12" contains letters, it cannot be converted into a numeric value.
// The result is NaN, which technically has the data type "number", but it represents an invalid number.

console.log(isNaN(CombinedValue))
// *
// The Unary + Operator
// if number: "5"
let StringNumber = "5";
let ConvertedValueof = +StringNumber
console.log(ConvertedValueof);
console.log(typeof(ConvertedValueof));
// if not a number: "String"
let strValue = "string"
let strConvertedValue= +strValue;
console.log(strConvertedValue);
console.log(typeof(strConvertedValue));
// if just empty string: "" >> Converted into Zero 
let myEmptyValue= "";
let emptyConvertedValue = +myEmptyValue;
console.log(emptyConvertedValue);
console.log(typeof(emptyConvertedValue));

// String to number conversion 
// Resources:
// https://github.com/SAFDAR1337/JavaScript/blob/main/DataTypes/ParseFloat.md
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
