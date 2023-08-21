
// --------------string method --------------------
// Note -> javascript strings are immutable

// // 1. getting string character
// let firstName = "wow";
// console.log(firstName[0]);
// o/p -> w

// 1.toLowercase() -> convert string in lowercase 
// 2.toUppercase() -> convert string in uppercase 

// 3.indexOf() -> return charecter index 
    // let name = "ashok"
    // console.log(name.indexOf("s"));
    // o\p -> 1 
    // note -> string is array and always index start from zero 

// 4.trim() -> remove unwanted space from String from left and right side
    // ex. let hobbies = "  coading reading runing   ";
    // console.log(hobbies);
    // o\p ->    coading reading running 
    // console.log(hobbies.trim());
    // o\p -> coading reading running

// 5.lastIndexOf() -> it return position of charecter form last side 
                    // and if character does not exist then return -1

// 6.include() ->indclude method return true or false if string exsit or not
         // ex. let hobbies = "  coading reading runing   ";
        // console.log(hobbies.include("running"));
        // o\p -> true because runing string exist
        // inculude() is case sensitive

// 7.slice() -> slice() method return string from position to given position
            // ex. let fullName = "wowprogramer";
            // console.log(fullNmae.slice(0,5));
            // o\p -> wowpr   return from zero fourth position string exluding the last one

// 8.split() -> string is break in different string form space in string
            // let favurateColour = "red  green blue";
            // console.log(favurateColour.split(" "));
            // o\p -> 1.red  2.green 3.blue

