// import {a,b,sum} from "./App.js";
// console.log(sum())

//method1
// var regEx1 = require('./App.js').mail
// var regEx2 = require('./App.js').name
// var regEx3 = require('./App.js').mobileNo
// var regEx4 = require('./App.js').passwd

//var { mail, name, mobileNo, passwd } = require('./App.js');//method2
var regEx1 = require('./App')
console.log("my Email validation is : " ,regEx1);//method3
//let mail = regEx1.test("Santoshi1@gmail.com")
//console.log("my Email validation is : " +mail);

 let Check2 = regEx1.name.test("Santoshi");//method4
 console.log("my Name validation is :" +Check2);

// let Check3 = regEx3.test("7798978782");
// console.log("my MObileNo validation is :" +Check3);

// let Check4 = regEx4.test("Santoshi@123");
// console.log("my Password validation is :" +Check4);
