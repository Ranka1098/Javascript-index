// ------------higher order function------------
// passing funtion as an argument
// two types of higher order function
// 1.one function takes another function as argument

// ex. create uppercase function
// let upperCase = function(str){
    // return str.toUpperCase();
// }
// console.log(upperCase("heloo"));
// ex.create function lowercase

// let lowerCase = function(str){
// return str.toLowerCase();
// }

// // ex. create transform function
// let transForm = function(fun,str){
//     return fun(str);
// }

// note -> transForm function takes upperCase \ lowercase function as a argument
// console.log(transForm(lowerCase,"HELLO")); 
// console.log(transForm(upperCase,"hello"));

// 2.function returning anoteher function

// let abc =  function(x){

//     return function xyz(y){
//         console.log(`${x}${y}`)
//     }
// }
// let result = abc("hello","good coder");
// console.log(result);

// o\p -> its return function xyz
// -----------------------------
function makefunc(){
const name = "mozilia";
function displayName(){
    console.log((name));
}
return displayName;
}

const myfunc = makefunc();
myfunc();