// ------------variable and block scope-----------
// javascript hava 3 scope 
// 1.global scope
// functonal scope
// local sope

// scope-> area where variable is define or accessible

// let score = 90; //global scope
// note -> global scope is accessible in any scope

// block scope { --scope within curley bracesses--}
// // note -> let and const is block scope
// note -> local scope
// if(true){
// // let score = 50;
// console.log(score);//nearest value
// }

// local / lexical scope 
// var a = 20;
// if(true){
// var a = 30;
// console.log(a);
// }
// console.log(a);
// o\p -> 30 because var can accessible local and global scope
// var a = 20 is overrite a = 30

// let a = 20;
// if(true){
// let a = 30;
// console.log(a);
// }
// console.log(a);

// o\p -> 30 and 20 let declare in two different scope global and block scope

// const a = 20;
// if(true){
//     const a = 30;
//     console.log(a);
// }
// console.log(a);
// o\p -> 30 and 20 const declare in two different scope global and block scope

// // --------functional scope --------------0
// o\p -> 70 var is in function scope 30+40=70