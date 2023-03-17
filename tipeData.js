let yourName;
/*

yourName = "Zainal Arifin"; kalo dikomentari akan muncul 
undefined karena nilai tidak diinisialisasi

*/
console.log(typeof (yourName));
//Function typeof() => Untuk menampilkan undefinednya

/*

Fungsi typeof() digunakan untuk memastikan tipe data pada variabel dengan mengembalikan
tipe data tersebut dalam bentuk teks.

*/

// ========================================================
let number1 = 12;
let number2 = 9;

console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);
console.log(number1 % number2);

//=========================================================

let postfix = 5;
console.log(postfix++);
/* output: 5 */
console.log(postfix);
/* output: 6 */

let prefix = 5;
console.log(++prefix);
/* output: 6 */

//=========================================================

const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

/* output
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/
//=========================================================

console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);

/* output
7n
3n
10n
2n; Bukan 2.5n
1n
*/

//==========================================================

const answer = '"I think it\'s awesome!" he answered confidently';
console.log("answer");

//==========================================================

// const myName = "Luke";
// console.log(`Hello, my name is ${myName}.`);//Interpolation
var mynama;
mynama = "Zainal";
console.log(`Halooooo, ${mynama}`);


/* output: Hello, my name is Luke. */

//==========================================================

let x = true;
let y = false;

console.log(typeof (x))
console.log(typeof (y))

/* output:
boolean
boolean
*/
//==========================================================

let someLaterData = null;
console.log(someLaterData);

/* output:
null
*/

//==========================================================

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);

/* output
false
*/

