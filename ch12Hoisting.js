
// -----------------hoisting---------------
// note -> only var Keyword variable declaration hoisted top of thier scope.
// example
// test = 10;  //value assign the varible 
// console.log(test);//variable print
// var test;//variable declare

//  o\p-> 10;

// -------------------function declaration-----------------------
// // note -> normal function declaration is hoisted top of the scope
// test();
// function test(){
// console.log("hello programmer");
// }

// o \ p -> hello programmer

// ------------------function expression \ arrow function----------
// note -> hoisting is not work with function expression and arrow function it works with normal fuction

// test();
// let test = function (){
// console.log("hello programmer");
// }

// test1();
// let test1 = () => console.log("hello programmer");


// o\p ->ReferenceError: Cannot access 'test' before initialization
