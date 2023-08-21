// ----------------controll flow----------------

// 1.-------------------for loop---------------------
// syntax for(intiaization; condition; increment / decrement)
// {
    // perform the task 
// }

// example. run the task 5 times
// for(let i=1;i<=5;i++){
// console.log("run",i);
// }
// o\p->run 1
// run 2
// run 3
// run 4
// run 5

// usecase array print using for loop acess element print value
// let dishes = ['biryani','chai','jalebi'];
// error in for loop because array lentgh not use
// for(let i=0; i<=dishes; i++)
// {
//     console.log(dishes[i]);
// }

// console.log(dishes[0]);//acess element print value 
// // always length method is use to access array element to print value
// for(let i=0;i<dishes.length;i++)
// {
//     console.log(dishes[i]);
// }

// ---------------while loop--------------
// syntax         intialization;
// while(codition;)
// {     //task
// increment / decrement
// }
// print 5 number

// let i=1;
// while(i<=5)
// {   
//     console.log(i);
//     i++;
// }
// array element acess by using while loop
// let dishes = ['biryani','chai','jalebi'];
// let i=0;
// while(i<dishes.length)
// {
    // console.log("dishes",dishes[i]);
    // i++;
// }

// 3.-----------------do while loop-----------------
// syntax  intialization
            // do{
                    //task
                    // incerement \ decrement
                // }
                // while(condition){  }
// note at least one time do loop is execute

// 4.-----------if, if-else-if statment--------------------
// let budget = 7000;
// if(budget >5000)
// {
//     console.log("low budget");
// }
// else if(budget >4000){
// console.log("medium budget")
// }else
// {
//     console.log("high budget");
// }

// 5.--------------nested if-----------------------------------
// let num = 22;
// if(num > 20){
//     console.log("run 1st condition true");
//     if(num > 21)
//     {
//         console.log("run 2nd condition true");
//     }

// }
// o\p-> run 1st condition true
        //run 2nd condition true

//6.-------------break and continue statment-----------
// also caled jump statment
// continue meance one iteration leave and jump and continue loop itration
// used to skip values of loop

// ---------continue---------------
//  for(let i=1; i<=10; i++)
// {
//         if(i == 2)//condition check
//         {
//             continue;//move toward next itration
//         }
//         console.log("value of ",i);
// }

// -------------break ------------
// // it used to terminate the loop and controll transfer from outside
// for(let i=0;i<=5; i++)
// {
//     if(i == 2)//condition check
//     {
//     break;//terminate the loop
//     }
//     console.log("value of",i);
// }
// console.log("now i am the out side of loop");


// ------------------logical operator-----------
// and && , or || , not !
// priorities
// not ,and ,or

// --------------ternary operator--------
// note ->ternary operator like as if-else

// let age = 20;
// if(age > 20){
// console.log("qualify");
// }else{
// console.log("fail");
// }

// by using ternary operator
// single line spolution
// // syntax variable = conditon ? output 1 : output 2; 

// let result = age > 18 ? "qualify" : "pass"; 
// console.log(result);

// // -----------switch ------------------

// let age = 15;
// let result;
// switch(age)
// {
    
//     case 11:
//     case 12:
//     case 13:
//         result = age <= 13 ? qulify : fail ;
//         console.log(result);
//         break;
    // // no one case is match go to  default statment
    // default: result = "not allowed";
// }
// console.log(result);

// eror code