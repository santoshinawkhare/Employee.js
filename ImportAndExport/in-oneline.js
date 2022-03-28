//method1
// var regEx1 = require('./App')
 //console.log("my Email validation is : " ,regEx1);//method3
 //method2
// let Check2 = regEx1.name.test("Santoshi");
//  console.log("my Name validation is :" +Check2);
//method3

var regex = require('./App')
console.log("my all validation is;",regex);

//email
let regex3=regex.mail.test("Saurabhyeggewar@gmail.com");
console.log("my Email is :",regex3);
//geting 1st name
let regex1=regex.name.test("Saurabh");
console.log("my FirstName is :",regex1);
//phoenumber
let regex4=regex.mobileNo.test("91 9922992299");
console.log("my phonenumber is :",regex4);
//password
let regex2=regex.passwd.test("Saurabhyeggewar2#");
console.log("my Password is :",regex2);