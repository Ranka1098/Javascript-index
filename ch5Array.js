// --------------array----------------

// note -> array is type of object
// array index start from zero
// let disesh = [] //empty array
//     disesh = ['biryani','chat','khakra'];
// acess the array
// console.log(disesh); //o]p-> ['biryani','chat','khakra']
// console.log(disesh[0]); //o]p-> biryani

// // modify the array
// disesh[0] = "chai";
// console.log(disesh); //o]p-> ['chai','chat','khakra']
// override biryani by chai modify the aaray

// ---------------array method-------------------
// 1.join()
// console.log(disesh.join( '-')); //o\p-> chai-chat-khakra
// console.log(disesh.join( ',')); //o\p-> chai,chat,khakra

// // 2.indexOf()
// console.log(disesh.indexOf("chai"));
//o\p->it return zero because chai index is zero

// 3.concat two aaray
// let disesh = ['biryani','chat','khakra'];
// let newDishes = ['sweet-dish','pani-puri'];
// console.log(disesh.concat(newDishes));
//o\p->[ 'biryani', 'chat', 'khakra', 'sweet-dish', 'pani-puri' ]

//4.length
// let disesh = ['biryani','chat','khakra'];
// console.log(disesh.length);
//o\p->3 its return length of array

//5.push()
// let disesh = ['biryani','chat','khakra'];
// console.log(disesh.push("jalebi"));
//o\p-> 4 it return new length of aaray
// console.log(disesh);
// \\o\p-> [ 'biryani', 'chat', 'khakra', 'jalebi' ]

//6.pop()
// let disesh = ['biryani','chat','khakra'];
// console.log(disesh.pop());
//o\p->khakra
// it remove last element of aaray

