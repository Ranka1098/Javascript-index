// --------------call bind and apply method---------------------
// note -> this keyword reference pass the one object method to another object

// why need this call blind and apply methods
// you have n no of objects same code repeat multiple times is not good approach

let person1 = {
                firstName : "ashok",
                lastName : "vaishnav",
                fullName : function(city ,country)
                {
                    return this.firstName+ " " + this.lastName +" "+city+" "+country;
                }
            }
// console.log(person1);
// console.log(person1.fullName());

//  create similar properties and methods person2 object

let person2 = {
    firstName : "vikas",
    lastName : "gupta",
}
// -----------------call method--------------------
// call() -> basically one objects methods use in another objects
// syntax call(object this reference,args1,....)
// console.log(person1.fullName.call(person2,"pune","india"));
// person2 is object refernce and pune and india is the argument pass indiviually by using comma

// --------------apply method--------------------------
// apply() -> it is very similar to call() 
// call() and apply() is major differnce is argument pass in call method by using comma operator
// //  and apply() argument pass in array
// console.log(person1.fullName.call(person2,"pune","india"));//args pass by comma
// console.log(person1.fullName.apply(person2,["pune","india"]));// args pass in array

// --------------bind method--------------------------
// blind()->its exactly same call(). call() method calls its immidiatly invoked but bind() its bind 
// with function and return new result
let result = person1.fullName.bind(person2,"pune","india");
console.log(result);
console.log(result());