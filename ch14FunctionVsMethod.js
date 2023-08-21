// ----------------------function vs method---------------------
// method -> function define inside the object called method

// simple function
let ageCalculate = function(byear,cyear = "2023"){
  let age=cyear-byear;
  console.log(age);
}
ageCalculate(1997);

// method

let person = {
    ageCalculate : function(birthyear)
                    { 
                        let age = 2023-birthyear;
                        return age; 
                    }
}

console.log(`current age is ${person.ageCalculate(1996)}`)