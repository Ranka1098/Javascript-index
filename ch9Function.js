// -----------------------function-----------------------
// syntax -> function nameOffuncton(parameter)
            // {
                // task
            // }
            // nameOffunction(argument)
// // ex.add function
// function add(a,b)
// {
//     console.log(a+b);
// }
// add(10,20);
// ----------------------------------------------
// function expression / anonymous sfunction
// Note -> function expression meance function declare a variable

// let add = function(a,b){ 
// console.log(a+b); 
// }
// add(20,23)


// ---------default value----------------------------
// let invitation = function(name = 'default')
// {
//     console.log(`are you invited ${name} in game`)

// }
// invitation(); 
// o\p->are you invited default in game 

//  let invitation = function(name = 'default') 
// { 
    // console.log(`are you invited ${name} in game`)  

// }
// invitation("ashok"); 
// o\p -> are you invited ashok in game
// if you give argument dfault value change

// --------------return value in function-------------------
// (how return value from the function)
// let ageCal = function(birthyear){ 
// let age = 2023 - birthyear; 
// return age; 
// }
// note -> return stament always print in console log
// console.log(ageCal(1997));  


// -------------------immediatly invoked funcyion----------------------
// execute olny once this function hava no name
// ex.  
(function(){
console.log("immidiatly invoked function");
})();
// o\p -> immidiatly invoked function
// note -> function start with no name whole function put in round braces ()

