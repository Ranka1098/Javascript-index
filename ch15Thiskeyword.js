// ---------------this keyword--------------------
// this keyword represent the object . calling the method in which this is peresent.
// yu want to access properties in same object use this.

// example..
let person = {
firstName : "ashok",
lastNmae : "vaishnav",
fullNmae : function(){
    FullName = this.firstName +" "+ this.lastNmae;
    return FullName;
}
}

console.log(`the fullname is : ${person.fullNmae()}`);