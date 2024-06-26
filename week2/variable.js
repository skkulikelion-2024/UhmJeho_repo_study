//JavaScript is very flexible
//flexible === dangerous
//added ECMAScript 5

'use strict';

//2. Variable rw(read/write)
// let (added in ES6)
// var(don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
    let name = 'ellie';
    console.log(name);
    name='hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);
{
    age=4;
    var age;
}
console.log(age);

//3. Constant, r(read only)
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

const daysInWeek=7;
const maxNumber=5;

//Note!
//Immutable data types: premitive types, frozen objects(i.e. object.freeze())
//Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

//4. Variable types
// primitive, single item: number, string, boolean, null, undefiedn, symbol
// object, box container
// function, first - class function

const count= 17;
const size=17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity=1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);


const bigInt=111111111111234564444n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

const char = 'C';
const brendan='brendan';
const greeting = 'hello'+brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);

//boolean
//false: 0, null, undefined, NaN,''
//true: any other value
const canRead=true;
const test=3<1; //false

//null
let nothing =null;
console.log(`value: ${nothing},type: ${typeof x}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

const symbol1=Symbol('id');
const symbol2=Symbol('id');
console.log(symbol1 ===symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 ===gSymbol2);
console.log(`value: ${symbol1.description},type: ${typeof symbol1}`);

 //object, real-life object, data structure
 const ellie={ name: 'ellie', age: 20};
 ellie.age=21;

//5. Dynamic typing: dynamically typed language
let text='hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type:${typeof text}`);
text=1;
console.log(`value: ${text}, type: ${typeof text}`);
text='7'+5;
consol.log(`value: ${text}, type: ${typeof text}`);