// ----------------object inside the array-----------------
let blockList = [{userName : "john",reason : "abusive content"},
                 {userName : "paul", reason: "copyright claim"}                
                ]
                // this array have two objects
                // access the aaray
                console.log(blockList);
                // ittrate object of aaray
                for(let  i=0 ;i<blockList.length;i++){
                    console.log(blockList[i]);
                    console.log(blockList[i].userName);
                    console.log(blockList[i].reason);
                }
            
// --------------------------------------------------------------
// object / array "how reference are passes to variable"
// ---------------------pass by value and pass by reference---------------

// note -> pass by value work with primitive datatype
// note -> pass by reference work with non primitive datatype
// Dataypes are two types primitive and non primitives
// primitive datatype ->number, string, boolean, null,undefine
// non primitive datatype -> array, object

// ---------pass by vlaue------------------
let a = 5;
let b = a;
// variable a value is assign to varible b
console.log(a) //o\p->5
console.log(b) //o\p->5 
// update the value of b
b = a+5 ;
console.log(a) //o\p->5
console.log(b) //o\p->10 
// variable b=10 beacuse pass by value working indepedently variable b dont dependent on variable a.

// -----pass by reference-------------------
// note -> pass by reference work with array and object


// object
let obj1 ={
        name : "ashok",
        password : 123
}

let obj2 = obj1;
console.log(obj1); //o\p-> { name: 'ashok', password: 123 }
console.log(obj2); //o\p-> { name: 'ashok', password: 123 }
// both objects are output is same

// update password in obj2
obj2.password = 456;
console.log(obj1);//o\p-> { name: 'ashok', password: 456 }
console.log(obj2);//o\p-> { name: 'ashok', password: 456 }
// only update the password in obj2 but change the password in obj1 and obj2 why it happen
// note -> beacause only obj1 refrence assign obj2 not gives values only refernce is aasign
// obj1 and obj2 both are dependent on each other

// array

let arr1 = [1,2,3,4,5];
let arr2 = arr1;
console.log(arr1); //o\p->[ 1, 2, 3, 4, 5 ]
console.log(arr2);// o\p->[ 1, 2, 3, 4, 5 ]
// update aar2
arr2.push(5);

console.log(arr1); //o\p->[ 1, 2, 3, 4, 5, 5 ]
console.log(arr2);//o\p->[ 1, 2, 3, 4, 5, 5 ]