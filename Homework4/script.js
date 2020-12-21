/*===1===*/

console.log(2 + "2" == "2" + 2);  // true
/* 
2 + "2" -> 22
"2" + 2 -> 22
22 == 22 
*/

console.log(2 + "3" == "3" + 2);  // false
/* 
2 + "3" -> 23
"3" + 2 -> 32
23 !== 32 
*/

console.log("3" + "2" == 3 + 2); // false
/* 
"3" + "2" -> 32
3 + 2 -> 5
32 !== 5 
*/

console.log("3" + "2" == "3" + 2); // true
/* 
"3" + "2" -> 32
"3" + 2 -> 32
32 == 32 
*/

console.log("3" + "2" == 2 + "3"); // false
/* 
"3" + "2" -> 32
2 + "3" -> 23
32 !== 23 
*/

console.log(2 + Number("3")==  Number("3") + 2); // true
/* 
2 + Number("3") -> 5
Number("3") + 2 -> 5
5 == 5
 */

console.log(12 / "6"); // 2
/* 
Унарные операторы конвертируют строку в число(неявное преобразование)
*/

console.log("number" + 15 + 3); // number153
/* 
string "number153" | string + number => string
*/

console.log(15 + 3 + "number"); // 18number
/* 
string "18number" | 15 + 3 => 18 | number 18 + string "number" => string "18number" 
*/

console.log([1] > null); 
/*
true, [1] as an array
*/

console.log("foo" + + "bar"); 
/*
string "fooNaN", +"bar" => NaN | "foo" + NaN => "fooNaN"
*/
console.log('true' == true); 
/*
false, when comparing values of different types, JS converts each to a number 
*/

console.log('false' == false); 
/*
false
*/

console.log(null == ''); 
/*
false, only null == undefined => true
*/

console.log(!!"false" == !!"true");
/* 
true, !!"false" => true | !!"true" => true
*/

console.log(['x'] == 'x');
/*
true
*/


const enemy = {
    name : "Bob"
}

const friend = {
    name: "Alex"
}

/*===2===*/

const me = friend;

me.name = "Bob";


console.log(friend.name); // Bob
console.log(me === friend); //true, two objects are equal only if they are the same object
console.log(me === enemy); //false

/*===3===*/
const month = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December'];

let userInput = prompt('Input month');

if (isNaN(userInput)) {
    alert(month.indexOf(userInput)+1);
}
else {
    alert(month[Number(userInput)-1]);
}