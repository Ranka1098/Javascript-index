// --------------------objects------------------
// syntax let car = {} empty object
// syntax let car = {key : value} key-value pair

// let car = {
//     color : "black",
//     model : 2022,
//     company : "honda"
// }
// console.log(car);

// // accessing car object properties
// // 1.aaray methods
// console.log(car["color"]);
// console.log(car["model"]);
// console.log(car["company"]);
// // 2.dot methods
// console.log(car.color);
// console.log(car.model);
// console.log(car.company);

// note -> always use dot methods for acessing object properties

// --------modify the object properties---------
// car.color = "brown";
// console.log(car.color);
// car color change black to brown

// ------delete the properties of object---------
let obj = {
        prop1 : "value1",
        prop2 : "value2",
        prop3 : "value3",
}
delete obj.prop1;
console.log(obj);
// prop1 property deleted

// -----------for-in-loop-----------------
// each itration return a key  of object
let car = {
            name : "toyota",
            color : "black",
            model : 2002
          }
// console.log(car);
//o\p->{ name: 'toyota', color: 'black', model: 2002 }
// itrate object
for(key in car){
console.log(key);
}
// o\p-> name color model
for(key in car){
    console.log(key);
    }
// note for in loop for ittrating object
// note forEach loop for ittrating Array