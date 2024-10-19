/*
question of flat
-----------------
let array = [[10,4,[6,8,[3,5,8,[8,4,2],8,5],7,4],1],7,5];
 array=array.flat(4)
 let sum=0
 let sum1=0;
 array.forEach((val,i)=>{
   sum += val;
 })
 console.log(`Sum:${sum}`);

 for(let i=0;i<array.length;i++){
   sum1 += array[i];
 }
 console.log(`Sum:${sum1}`);
*/

/*symbol eg:preventing ittreation
----------------------------------

 let syml = Symbol('address');
 let details = {
   name: 'Akhil',
   age: 21,
   gender: 'Male',
   [syml]:'Mlp'
 }
 for(let key in details){
   console.log(key , details[key]);
 }
  */


/* Rest parameters
-------------------
let rst = (...numbers) =>{
  return numbers.reduce((acc,num)=>acc + num ,0);
}
console.log(`Sum: ${rst(1,2,3,4,5,6,7,8,9,10)}`);

*/
//array methods
//-------------
/*

/*
push()
------
Purpose: Adds one or more elements to the end of an array and returns the new length of the array.
------------------------------------------------------------------------------------------------
let fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits); // Output: ['apple', 'banana', 'orange']

*/

/*
shift()
-------
Purpose: Removes the first element from an array and returns that element.
--------------------------------------------------------------------------

let fruits = ['apple', 'banana', 'orange'];
let firstFruit = fruits.shift();
console.log(fruits);      // Output: ['banana', 'orange']
console.log(firstFruit);  // Output: 'apple'
*/

/*
unshift()
---------
Purpose: Adds one or more elements to the beginning of an array and returns the new length.
-------------------------------------------------------------------------------------------
let fruits = ['banana', 'orange'];
fruits.unshift('apple');
console.log(fruits); // Output: ['apple', 'banana', 'orange']
*/

/*concat()
--------
Purpose: Merges two or more arrays and returns a new array.
----------------------------------------------------------------

let arr1 = [3,4];
let arr2 = [1,2,];
let result = arr1.concat(arr2);
console.log(result);
*/

/*
pop
---
Purpose: Removes the last element from an array and returns that element.
----------------------------------------------------------------
let  arr =['Apples', 'Bananas', ];
let arr2=arr.pop();
console.log(arr);
*/

/*
slice
--------
Purpose: Returns a shallow copy of a portion of an array into a new array, selected from start to end (not included).
--------------------------------------------------------------------------------------------------------------------------------

let arr =['Apples', 'Bananas','grapes'];

let arr2 = arr.slice(0,1);

console.log(arr2);
*/

/* splice
-------
Purpose: Returns a shallow copy of a portion 
of an array into a new array, selected from start to end (not included).

let arr =['Apples', 'Bananas'];
arr.splice(2,0,'grapes');//here 1 represents the index,0 incates that how many want to be deleted from the index to the given number,last value is for what should wee add acpprdin to the specified index
                        // if any doubt try to change each values.
console.log(arr);
*/

/*foreach
-------
Purpose: Executes a provided function once for each array element.
----------------------------------------------------------------
let arr =[1,2 ,3];
arr.forEach((nums)=> {
  console.log(nums*2)
});
*/

/*
map
----
Purpose: Creates a new array by applying a function to every element of the original array.
------------------------------------------------------------------------------------------------

let arr = [1,2,3,4,5];
let arrr2=arr.map((num)=>{
  return num*2;
});
console.log(arrr2);
*/


/*filter
-----
Purpose: Creates a new array with elements that pass a test provided by a function.
-----------------------------------------------------------------------------------
let numbers = [1,2,3,4,5];
let even = numbers.filter((num)=>{
  return num % 2 === 0;
});
console.log(even);
*/

/* reduce()
-----------
Purpose: Reduces an array to a single value by executing a reducer function on each element.
---------------------------------------------------------------------------------------------

 let numbers = [1,2,3,4,5] 
 let sum = numbers.reduce((acc,val)=>{
   return acc + val;
 });
 console.log(sum);

let numbers2 = [1,2,3,4,5] 

let avg = numbers2.reduce((acc,val,index)=>{
  if (index === 4){
    acc += val;
    return acc/(index+1);
  }else {
    return acc + val;
  }
},0);
console.log(avg);

*/

/*find()
---------
Purpose: Returns the first element in the array that satisfies the provided test function. If no values satisfy the test, it returns undefined.
----------------------------------------------------------------
let arr = [1,2,3,4,5];
let found = arr.find((val)=>{
  return val < 2
})
console.log(found);
*/


/*findIndex()
-------------
Purpose: Returns the index of the first element that satisfies the provided test function. If no elements satisfy the test, it returns -1.
------------------------------------------------------------------------------------------------------------------------------------------
let arr = [1,2,3,4,5];
let index = arr.findIndex((val)=>{
  return val < 2;
});
console.log(index);
*/


/*some()
--------
Purpose: Checks if at least one element in the array passes the test implemented by the provided function.
----------------------------------------------------------------------------------------------------------
  let arr = [1,2,3,4,5];
  let hasEven = arr.some((val)=>{
    return val % 2 === 0;
  });
  console.log(hasEven);
  */

/*every()
---------
Purpose: Checks if all elements in the array pass the test implemented by the provided function
----------------------------------------------------------------
let arr = [2,4,6,4,8];
let allEven = arr.every((val)=>{
  return val % 2 === 0;
});
console.log(allEven);
*/

/*
includes()
----------
Purpose: Determines whether an array includes a certain value, returning true or false.
------------------------------------------------------------------------------------------------

console.log(arr.includes(0));
console.log(arr.includes(4));
*/

/*
join()
------
Purpose: Joins all elements of an array into a string, with an optional separator.
------------------------------------------------------------------------------------------------

let words = ["hello", "Akhil", "How are you"];
let sentences = words.join(" ");
console.log(sentences);
*/

/*
sort()
------
Purpose: Sorts the elements of an array in place and returns the sorted array. By default, it sorts as strings, but you can provide a compare function for numerical sorting.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  
let arr = [1,4,3,5,6,0,1,2,];
arr.sort((a,b)=>{
  return a-b;//if we need to sort in descending order you can give b-a
});
console.log(arr);
*/
/*

  reverse()
Purpose: Reverses the order of the elements of an array in place.


let numbers =[1,2,3,4,5];
numbers.reverse();
console.log(numbers);
*/

/*
fill()
Purpose: Fills all the elements of an array from a start index to an end index with a static value.

let arr = [1,2,3,4,5];
arr.fill(0,1,4);// Fill with 0 from index 1 to 3 (not including 3)
console.log(arr);
*/

/*
flat()
Purpose: Flattens a nested array by a specified depth. By default, it flattens one level deep.

let arr = [1,[2,[3,4],5],6];
let flatarr = arr.flat(3);

console.log(flatarr);
*/
/*
flatMap()
----------
Purpose: First maps each element using a mapping function, then flattens the result into a new array.
----------------------------------------------------------------------------------------------------

let arr = [1,2,3,4];
let arr2 = arr.flatMap((x)=>[x*2]);
console.log(arr2);
*/
/*
reduceRight()
-------------
Purpose: Similar to reduce(), but it processes the array from right to left.
----------------------------------------------------------------------------

let arr = [1,2,3,4,5,6];
let sum = arr.reduceRight((total,val)=>{
  return total + val;
})
console.log(`Sum:${sum}`);
*/

/*Hoisting
----------
Hoisting with function Declarations
-----------------------------------

sayHello();// this works beacuse the function is hoisted..
function sayHello(){
  console.log("Hello, world!");
  
}
  */
/*
Hoisting with Variable Declaration
-----------------------------------

console.log(x);
var x = 29;
console.log(x);  
 */
/*
Hoisting with let and const
----------------------------

console.log(a);
let a = 10;

console.log(b);
const b = 20;
*/

/*
  Hoisting with Function Expressions
  ----------------------------------

console.log(manu); // Outputs: undefined
manu();// Throws TypeError: sayHi is not a function

var manu = ()=>{
  console.log("hi");
}
manu()
 */

/*
 
Closures in JavaScript
----------------------

function outer () {
 let count = 0;
 return function inner() {
 count ++;
 console.log(count);
};
 }
const increment = outer()
increment();
increment();
increment();

*/

/*
call back
---------

Synchronous callback
--------------------


function greet(name) {
  return "Hello, " +name + "!";
}
function welcome(callback,uName){
  const greeting = callback(uName);
  console.log(greeting);
}

welcome(greet,"Akhil");

Asynchronous callback
---------------------


console.log("start");
setTimeout(() => {
  console.log("Helloo asychronous callback");  
},2000);

console.log('end')
*/

/*
HOF
---

Function Taking a Callback as an Argument
-----------------------------------------
In this example, the map function is a higher-order function because it takes a function (callback) as an argument.

function map(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i])); // The callback is called on each element
  }
  return result;
}

function square(x) {
  return x * x;
}

// Using the higher-order function
const numbers = [1, 2, 3, 4];
const squaredNumbers = map(numbers, square); // square is the callback function

console.log(squaredNumbers); // Output: [1, 4, 9, 16]

Function Returning a Function
-------------------------------

function createMultiplier(multiplier) {
  return function(num) {
    return num * multiplier; // Inner function uses the multiplier
  };
}

// Using the higher-order function
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
*/
/*
Generator function
------------------

function* countUpTo(max){
  let count = 1;
  while (count <= max) {
    yield count;
    count++;
  }
}

const counter = countUpTo(7);

console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());

*/

/*
Factory function
----------------

function createUser(name,age){
  return  {
    name: name,
    age: age,
    greet() {
      console.log(`hello, my name is ${this.name} and iam ${this.age} years old.`)

    }
  };
}

  // Using the factory function to create user objects

const User1 = createUser("Akhil",21);
const User2 = createUser("shamil",20);

User1.greet();

User2.greet();
*/

/*
Constructor functions
---------------------
A constructor function in JavaScript is a 
special type of function used to create and 
initialize objects. It serves as a blueprint 
for creating multiple instances of similar objects
with shared properties and methods. Constructor  
functions follow specific conventions and utilize
the new keyword to create instances.
-------------------------------------------------

function Person(name,age) {
  this.name = name;
  this.age = age;

  this.greet = function(){
      console.log(`Hello, my name ${this.name} and I am ${this.age} years old.`); 
  };
}

const person1 = new Person("Akhil",21);
const person2 = new Person('shamil',20);

person1.greet();
person2.greet();

*/
/*
IIFE
----

An Immediately Invoked Function Expression (IIFE)
is a JavaScript function that is defined and 
executed immediately after its creation. IIFEs 
are useful for creating a new scope and avoiding
variable hoisting issues, thereby preventing 
pollution of the global scope.


(function() {
  var message = "Hello, World!"; // Output: Hello, World!
  console.log(message);
}) ();

// Trying to access the variable outside the IIFE will result in an error

console.log(message);// ReferenceError: message is not defined
*/


/*
call back hell
---------------

function getUser(userId, callback) {
  setTimeout(() => {
      console.log("Fetched user:", userId);
      callback(userId);
  }, 1000);
}

function getPosts(userId, callback) {
  setTimeout(() => {
      console.log("Fetched posts for user:", userId);
      callback(["Post 1", "Post 2", "Post 3"]);
  }, 1000);
}

function getComments(post, callback) {
  setTimeout(() => {
      console.log("Fetched comments for post:", post);
      callback(["Comment 1", "Comment 2"]);
  }, 1000);
}

// Callback Hell
getUser(1, (userId) => {
  getPosts(userId, (posts) => {
      getComments(posts[0], (comments) => {
          console.log("Comments for the first post:", comments);
      });
  });
});
*/

/*
Spread operator
--------------

let arr = [1,2,3,4];
let arr1 = [1,2,3,4];
let arr2 = [...arr1,...arr1];
console.log(arr2);

let arr = [1,2,3,4];
----------------------
let [num1,num2,...rest]=arr;
console.log(num1);
console.log(num2);
console.log(rest);

*/
/*
pass by value
-------------
In pass by value, a copy of the actual value is 
passed to the function. Any changes made to the 
parameter inside the function do not affect the 
original variable.

JavaScript passes primitive data types 
(such as numbers, strings, booleans, 
null, undefined, symbol, and BigInt) 
by value.

let x= 10;
function modfy(num) {
console.log(num = 30);
}
modfy(x);

console.log(x);

*/

/*
pass by reference
-----------------
In pass by reference, a reference (or pointer) 
to the actual memory location of the object is 
passed to the function. Any changes made to the 
parameter inside the function will affect the 
original object since both the function parameter 
and the original variable point to the same memory 
location.

JavaScript passes non-primitive data types 
(such as objects and arrays) by reference.

--------------------------------------------

let obj = {
  name :"Alice"
};
function modfy(ob) {
  ob.name = "Akhil"; //Modifies the original objects
}

modfy(obj);
console.log(obj.name); //Output:Akhil (original object is modified)

 Special Note: Arrays and Objects
Arrays and objects are passed by reference, but there is an important distinction:
-----------------------------------------------------------------------------------
If you modify the properties/elements of an object or array, the original object or array will be affected because you're modifying the data inside the reference.

If you reassign the object or array inside the function, it won't affect the original reference.


Example (Modifying properties of an object):

let arr = [1, 2, 3];

function modifyArray(a) {
  a.push(4); // Modifies the original array
}

modifyArray(arr);
console.log(arr); // Output: [1, 2, 3, 4] (original array is modified)

Example (Reassigning an object or array):
---------------------------------------
let obj = { name: "Alice" };

function reassignObject(o) {
  o = { name: "Charlie" }; // This only changes the local copy
}

reassignObject(obj);
console.log(obj.name); // Output: Alice (original object is not modified)

*/

/*
Currying
---------

Currying is a technique of transforming a function that takes multiple arguments into a sequence of functions, each of which takes a single argument.
function add(a) {
  return function(b)  {
    return a+b;
  }; 
}

let addTow = add(2);//partially  applying 2
console.log(addTow(3));
console.log(add(2)(2));

*/

/*
The nullish coalescing operator (??) is a logical operator in JavaScript that returns the right-hand side operand when the left-hand side operand is null or undefined. If the left-hand side operand is any other value (including falsy values like 0, false, "", etc.), 
it returns the left-hand side operand.
The nullish coalescing operator is used to 
provide default values in cases where null or
undefined may be encountered, without mistakenly 
treating other falsy values as nullish.


let score = 0;

let result = score ?? 10;

console.log(result);

//also
//-----

let user = {
  name : "akhil",
  age: null,
  country: undefined,
};

let userAge = user.age ?? 21;
let userCountry = user.country ?? "no where";

console.log(userAge);
console.log(userCountry);

*/ 

/*
muti 5
------
function* multy(){
  let j=100;
   for (let i=j;i>0;i--){
       if(i % 5 === 0){
        yield i;
   }
} 
}
const ans = multy();
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);
*/

/*
//delete the last key-value pair from the object
//------------------------------------------------
let details = {
  name:"Akhil",
  age:21,
  place:"tirur"
}

const keys = Object.keys(details);
const end = keys[keys.length-1];

delete details[end];

console.log(details);

*/

/*
let arr = [1,2,3,4,6,7,8,1,2,3,4,5,6,7]
const setw = [...new Set(arr)];
console.log(setw);
*/

// let n = 1 + + "1"
// console.log (n)

/*
Promise
-------
let fetchData = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    let dataReceived = false;
    if(dataReceived){
      resolve("success");
    }else {
      reject("Failed");
    }
  },2000);
});

fetchData.then((result)=>{
   console.log(result);
   
}).catch((error)=>{
  console.log(error);
  
})
  */

/*
Promise.all
------------

let promise1 = new Promise ((resolve,reject)=>{
  let a = 1;
  let b = 2;
  let sum = a + b;

  if(sum == 4){
    resolve("win");
  }else{
    reject("fail-1");
  }
});
let promise2 = new Promise ((resolve,reject)=>{
  let a = 1;
  let b = 2;
  let sum = a + b;

  if(sum == 3){
    resolve("win");
  }else{
    reject("fail-2");
  }
});
let promise3 = new Promise ((resolve,reject)=>{
  let a = 1;
  let b = 2;
  let sum = a + b;

  if(sum == 3){
    resolve("win");
  }else{
    reject("fail-3");
  }
});

Promise.all([promise1,promise2,promise3])
.then((result)=>{
  console.log(result)
}).catch((err)=>{
  console.log(err);
});

*/

/*
Promise.AllSettled
------------------

let promise1 = new Promise ((resolve,reject)=>{
  let a = 1;
  let b = 2;
  let sum = a + b;

  if(sum == 4){
    resolve("win");
  }else{
    reject("fail-1");
  }
});
let promise2 = new Promise ((resolve,reject)=>{
  let a = 1;
  let b = 2;
  let sum = a + b;

  if(sum == 3){
    resolve("win");
  }else{
    reject("fail-2");
  }
});
let promise3 = new Promise ((resolve,reject)=>{
  let a = 1;
  let b = 2;
  let sum = a + b;

  if(sum == 3){
    resolve("win");
  }else{
    reject("fail-3");
  }
});

Promise.allSettled([promise1,promise2,promise3])
.then((result)=>{
  console.log(result)
})
*/

/*
rest operators
--------------
function sum (...numbers){
  return(numbers.reduce((acc,val)=>acc+val))
}
console.log(sum(1,2,3,4,5))

using map
---------
function multiply (factor,...numbers){
  return numbers.map((num)=> {
    return num * factor;
  })

  
}
console.log(multiply(5,2,3,4,5,6));
console.log(multiply(5,10,10))
*/

/*Optional chaining
--------------------



let user = {
  name:"Akhil",
  address:{
    city:"New York",
  },
};

//With out using optional chaining
console.log(user.address.city);// "New york"
console.log(user.address.location); // undefined
console.log(user.phone.number); //refernce error

//With using optional chaining
console.log(user?.address?.city);// "New york"
console.log(user?.address?.location); // undefined
console.log(user?.phone?.number); //undefiend (no error thrown)

*/


//this in arrow
/*
let obj = {
  name:"akhil",
  age:21,
  fun:function(){
    console.log(this);
    
  },
  fun1:()=>{
    console.log(this);
    
  },
  fun2:function(){
    let arr = ()=>{
      console.log(this);
      
    }
    arr()
  }
} 
obj.fun()
obj.fun1()
obj.fun2()
*/

/*
call apply bind
---------------


let person ={
  name:"Akhil",
  age:21,
  greet: function(greeting){
    console.log(`${this.name},${greeting}`)
  }
}
let person2 = {
  name:"jinan"
}
person.greet.call(person2,"goodmorning");
*/

/*
let person ={
  name:"Akhil",
  age:21,
  greet: function(greeting,hhh){
    console.log(`${this.name},${greeting},${hhh}`)
  }
}
let person2 = {
  name:"jinan"
}
person.greet.apply(person2,["goodmorning","bye"]);
*/

/*
let person ={
  name:"Akhil",
  age:21,
  greet:function(greeting){
    console.log(`${this.name},${greeting}`)
  }
}
let person2 = {
  name:"jinan"
}
const bbb = person.greet.bind(person2,"goodmorning");

person.greet("goodmorning")
bbb();
*/

/*
pallindrome
-----------
let pal = "malayalao"
let pallim = pal.split('').reverse().join('')

if (pallim === pal){
  console.log("its palindrome");
}
else{
  console.log("its not palindrome");
  
}
  */
 /*
 revesing a word
 ---------------
 let pal = "hi hello"
 let pal2 = pal.split('').reverse().join('')
 console.log(pal2);
 */

 /*
 let arr = [1,2,3,4];
 let arr2 = arr.reverse()
 console.log(arr2);
 */

 /*
 let a = "hello world";
 let b = a.split(' ').map(word=> word.split('').reverse().join('')).join(' ')
 console.log(b);//out put:olleh dlrow
 */
 
/*
sum of Prime numbers
--------------------
const  isPrime =(num)=> {
  if (num<=1) return false;

  for(let i = 2; i<num; i++) {
    if (num % i === 0) return false
  }return true;
};

let arr = [1,2,3,7,5];
let arr2 = arr.filter(isPrime).reduce((acc,num)=>acc+num ,0);

console.log(arr2);
 */
/*
secondsmallest and secondhighest
--------------------------------

function slss(arr) {
  let uniqarr =[...new Set(arr)];

  uniqarr.sort((a,b)=> a-b);

  if(uniqarr.length < 2) {
    return "doesn't have enough uniq elements"
  }
  
  let secSmallest = uniqarr[1];


  let secHighest = uniqarr[uniqarr.length - 2];

return {

    secSmallest:secSmallest,
    secHighest:secHighest
};


 }


 let arr = [1,2,3,0,9,8,7,6];
 let result = slss(arr);

 console.log("Second Smallest:",result.secSmallest);
 console.log("Second Highest:",result.secHighest);
 console.log(result) // if the array have only one unique value 


 */


 /*
   String Methods
   --------------
   
   length :  Returns the length of the string.
   -------

 
   let str = "Hi, Hello Goodmorning:)";
   console.log(str.length); // out put: 23  it also include the space.
    */

/*
    charAt(index):Returns the character at the specified index.
  ------------------------------------------------------------

  let str = "Hi, Hello Goodmorning:)";
  console.log(str.charAt(7));//ouy put:l
  
 */
/*
concat():Combines two or more strings and returns a new string.
---------------------------------------------------------------

let str = "Hi, Hello Goodmorning:),";
let str1 = " Akhil"
console.log(str.concat(str1));
*/

/*
includes(substring): Checks if a string contains the specified substring.
-------------------------------------------------------------------------

let str = "Hi, Hello Goodmorning:)";
console.log(str.includes("Goodmorning"));
*/

/*
indexOf(substring): Returns the index of the first occurrence of the specified substring.
-----------------------------------------------------------------------------------------

let str = "Hi, Hello Goodmorning:)";
console.log(str.indexOf("Goodmorning"));//output:10
*/

/*toUpperCase(): Converts the string to uppercase.
--------------------------------------------------

let str = "Hi, Hello Goodmorning:)";
console.log(str.toUpperCase());//output :HI, HELLO GOODMORNING:)

toLowerCase(): Converts the string to lowercase.
-----------------------------------------------
let str = "Hi, Hello Goodmorning:)";
console.log(str.toLowerCase());
*/


/*
slice(start, end): Extracts a section of a string and returns it as a new string.
---------------------------------------------------------------------------------
let str = "Hi, Hello Goodmorning:)";
console.log(str.slice(0,9));//output:Hi, Hello
*/

/*
replace(oldValue, newValue): Replaces the first occurrence of a substring with a new one.
-----------------------------------------------------------------------------------------
let str = "Hello, world!";
console.log(str.replace("world","everyone"));
*/
/*
split(delimitter):Splits the string into an array of substrings based on the specified delimiter.
-------------------------------------------------------------------------------------------------
let str = "apple,banana,cherry";
console.log(str.split(","));//output:[ 'apple', 'banana', 'cherry' ]
*/

/*
trim(): Removes whitespace from both ends of a string.
------------------------------------------------------

let str ="   Hello, world!  " ;
console.log(str.trim());//outPut:"Hello, world!"
*/

/*
substring(start,end): Returns the part of the string between the start and end indexes.
--------------------------------------------------------------------------------------
let str = "Hello, World!";
console.log(str.substring(7,13));//out put: world!
*/

/*

lastIndexOf():Returns the index of the last occurrence of a specified text.
---------------------------------------------------------------------------
let str = "Hello, World, Hello!";
console.log(str.lastIndexOf("Hello")); //14

*/

/*
startsWith():Checks if a string starts with specified characters.
-----------------------------------------------------------------
let str = "Hello, World";
console.log(str.startsWith("Hello"));
*/

/*
endsWith():Checks if a string ends with specified characters.
-------------------------------------------------------------

let str = "Hello, World!";
console.log(str.endsWith("!")); //true
*/

/*
repeat():Repeats a string a specified number of items
------------------------------------------------------
let str = "Hello ";
console.log(str.repeat(5));//Hello Hello Hello Hello Hello 
*/

/*
padStart():Pads the current string from the start with another string until the 
resulting string reaches the given length.
-------------------------------------------
let str = "1";
console.log(str.padStart(3,9));//out put:991
*/

/*
padEnd():Pads the current string from the end with another string until 
the resulting string reaches the given length.
------------------------------------------------------------------------

let str = "5";
console.log(str.padEnd(3,'0')); // "500"
*/

/*
match():Searches a string 
for a match against a regular expression.
-----------------------------------------
let str = "The rain is train and plain is main";
console.log(str.match(/ain/g));
*/

/*
Spread operator in objects
--------------------------
let obj1 = {
  name:"Akhil",
  age:21,
  place:"Tirur"
}
let obj2 = {
  Name:"Achima",
  Age:17,
  Place:"Tanur"
}
let combined = {...obj1,...obj2};
console.log(combined);

*/

/*
String to Array
---------------
When used with strings, the spread operator breaks 
the string into individual characters.
const str = "HELLO";
const charArray = [...str];
console.log(charArray);//[ 'H', 'E', 'L', 'L', 'O' ]
*/


/*
SHORTEST WORD IN A STRING
-------------------------
function shortest(senta) {
  return senta.split(' ').reduce((shortW, currentW)=>{
   return currentW.length < shortW.length ? currentW : shortW
  })
  
}

let sentence = "love Programming With Javascript";
console.log(shortest(sentence));

//-------OR--------------------------

function short(senta){
  
let words = senta.split(' ');

let shortest = words[0];

for (let i = 1; i < words.length; i++){
  
if(words[i].length < shortest.length){
  shortest = words[i];
}
}
return shortest;
}

let sentence = "Hi my name is Akhil"
console.log(short(sentence));

*/

/*
set object 
----------

//Create a set

const mySet = new Set();

//Add values to the Set
mySet.add(1);
mySet.add(5);
mySet.add(1); // Duplicates are ignored
mySet.add("Hi hello")
mySet.add({name:"Akhil",age:21});

// Check the size of the Set
console.log(mySet.size);// output:4

// Check if a value exists in the Set
console.log(mySet.has(5));//true

// Delete a value from the Set
mySet.delete(5);

// Iterating through a Set
mySet.forEach((value)=>{
  console.log(value);
})

// Convert Set to an Array
const myArray = Array.from(mySet);
console.log(myArray);

// Clear the Set
mySet.clear();
console.log(mySet.size);//output : 0

*/
/*
reverse
-------
let arr = [1,2,3,4,5,6];
let reversearr= arr.reverse().join(' ');
console.log(reversearr);
*/

//includes
//----------
/* 
let  arr = [1,2,3,4,5];
console.log(arr.includes(1));

let str = ['Akhil','sudeesh']

console.log(str.includes("Akhil"));
*/

/*
let str = "Hello, Akhil"
console.log(str.length);
*/

/*
let str = "Hello, Akhil"
console.log(str.charAt(4));
*/
/*
let str = "Hello, Akhil"
console.log(str.toUpperCase());
*/

/*
let str = "Hello, Akhil"
console.log(str.toLowerCase());
*/

/*
let str = "hello, Akhil"
console.log(str.charAt(0).toUpperCase()+str.slice(1).toLowerCase());//Hello, akhil
*/
/*
let str = 'Akhil'
let str2 = 'Krishna'
console.log(str.concat(' '+str2));
*/

/*
let str = "  Akhil, Hi"  ;
console.log(str.trim());
*/

/*
let str = "Akhil"
console.log(str.padEnd(12,"Krishna"));
*/

/*
let str = " Akhil"
console.log(str.repeat(3));
*/
/*
let str = "Hi, Akhil"
console.log(str.replace("Hi","hey"));
*/

/*
let str = "Akhil krishna"
console.log(str.split(' '));
*/

/*

let arr = [1,2,3,4,5,6]
let arr2 =[7,8,9,10]
console.log([...arr,...arr2]);

*/

/*
function short (sent){
  
  let word = sent.split(' ');

  let shortest = word[0];

  for (let i=0; i<word.length; i++){
    if( word[i].length < shortest.length){
      shortest = word[i];
    }
  }return shortest;
}

let str = "Hi Akhil"
console.log(short(str));

*/

/*

function short (sent){
  return sent.split(' ').reduce((shortW,currW)=>{
    return currW.length < shortW.length ? currW:shortW
  })
}
let str = "hi Akhil"
console.log(short(str));

*/

//shallow copy

/*
let details = {
  name: "Akhil",
  age:21,
  place:{
    location:"Tirur",
    pin:123456
  }
}
let shallow = {...details};
shallow.place.location="Tanur";

console.log(details);

console.log(details);
*/

/*
deepcopy

let obj ={a:1,b:2,c:{d:3,e:4}};
let deep =JSON.parse(JSON.stringify(obj))
deep.c.d=5;

console.log(deep.c.d);
console.log(obj.c.d);
*/

/*
deleting the last element from an object
----------------------------------------
function dltLast(det){
  let keys = Object.keys(details);
  let end = keys[keys.length-1];
  delete details[end]
  return details
}
let details = {
  name: "Sudeesh",
  age:21,
  place:"palakkad"
}
    
console.log(dltLast(details));
*/


//REVERSE AN ARRAY WITHOUT USING A NEW ARRAY
/*
let arr = [1,2,3,4,5]
for (let i=0 ; i<4/2; i++){
  let temp = arr[i];
  arr[i] = arr[arr.length-i-1];
  arr[arr.length-i-1] = temp;
  
} console.log(arr)
*/
//.REMOVE NTH ELEMENT FROM AN ARRAY
//-----------------------------------
/*
let arr = [1,2,3,4,5];
arr.pop();
console.log(arr)
*/

// let arr = [1,2,3,4,5]
// for(let i = 0; i<arr.length; i++){
//   if(arr[i]=== arr[arr.length-1]){
//      arr.length = arr.length-1
//   }
// }
// console.log(arr);

//REMOVE DUPLICATE ELEMENTS FROM THE ARRAY
//------------------------------------------
/*
let arr = [1,2,3,4,5,6,6];
for(let i=0;i<arr.length;i++){
  for(let j=i+1; j<arr.length;j++){
    if(arr[i]===arr[j]){
      for(let k = j; k<arr.length-1; k++){
        arr[k]=arr[k+1];
      }
       arr.length--;
       j--;
    }
  }
}
console.log(arr)
*/
//---------------OR-------------
/*
let arr = [1,2,3,4,5,6,7,6]
let arr2 = arr.filter((dup,ind)=> arr.indexOf(dup)=== ind)
console.log(arr2);

let arr = [1,2,3,4,5,6,7,6];
let arr2 = arr.reduce((acc,curr)=>{
  if(!acc.includes(curr)){
    acc.push(curr);
  }return acc;
},[]);

console.log(arr2);

*/

/*
let arr =[1,2,3,4,5,6,7,8,9,10];
let even = [];
for(let i=0;i<arr.length;i++){
  if(arr[i]%2===0){
    even.push(arr[i]);
  }
}
console.log(even);
*/

/*
let map = new Map();
map.set('name',"Akhil")
map.set('age',"Akhil")
map.set('place',"Akhil")
map.set('loc',"Akhil")
map.forEach((val,key) => {
console.log(val,key);

});
*/
//copywith in
//-----------
/*
let arr = [1,2,3,4,5];
arr.copyWithin(0,2,3);
console.log(arr);
*/

//sortest odd number in an array
//------------------------------
/*
let arr = [7,2,3,4,5];
let odds = arr.reduce((odd,value)=>{
  if(value%2 === 1){
    return odd > value ?  value:odd
  }else{
    return odd
}
    
},arr[0])
console.log(odds);

*/

//sum using promise
//-----------------
/*
function sum (num1,num2){
  return new Promise((resolve,reject)=>{
    if (typeof num1 === 'number' && typeof num2 === 'number'){
      resolve(num1+num2)
  }else{
    reject('nupe')
  }
})
}
sum(1,2).then((data)=>{
  console.log(data);
  
}).catch((err)=>{
  console.log(err);
  
})

*/

//factorial
//---------
/*
let mult = 1;
function fact(num){
  for(let i = 1;i<=num ; i++){
    mult = mult*i
  }
  return mult
}
console.log(fact(5));
*/

//second largest
//--------------
/*
let arr = [1,2,3,4,5,10];
let max = arr[0];
let secmax = arr[1];
for (let i = 0; i<arr.length; i++){
  if (arr[i] > max){
    secmax=max;
    max = arr[i];
  }else if(arr[i]> secmax || arr[i] !== max){
    secmax = arr[i];
}
}
console.log(secmax);

*/
//find the miising elements in an array
//-----------------------------------
/*
let arr = [1,4,6,10];
let max = Math.max(...arr);
let min = Math.min(...arr);
let arr2 = []
for(let i=min; i<max;i++){
 if(!arr.includes(i)){
  arr2.push(i);
  
};
}
console.log(arr2);
*/
//change the first letter to upper case
//---------------------------------------
/*
let str = ["hello", "akhil"]
let arr = str.map((val)=>{
  let jj = val.slice(0,1).toUpperCase()
  let yy =val.slice(1,val.length)
  return jj+yy;
})
console.log(arr);
*/

//changre the each first letter of this string to capital
//--------------------------------------------------------

/*
let str = "hi my name is akhil"
let arr = str.split(' ');
console.log(arr);

let str2 = arr.map((val)=>{
  let jj=val.slice(0,1).toUpperCase()
  let bb = val.slice(1,val.length)
  return jj+bb
})
console.log(str2);
*/

//remove the null and undefined
//-----------------------------
/*
let arr= [1, '', 'hello', null, 'world', undefined, 42, NaN, 0]

for (let i = 0 ; i<arr.length ; i++){
  if( arr[i]=== null ||  arr[i]=== undefined){
    arr.splice(i,1)
    i--;
  }
  
}
console.log(arr);
*/

/*
function csum (num1,num2,cb){
  let result = num1+num2;
  cb(result)
}
function need(sum){
  console.log(sum);
  
} 
csum(1,2,need)
*/

/*
function promi(num1,num2){
return new Promise((resolve,reject)=>{
  if(typeof num1 === 'number' && typeof num2 === "number"){
    resolve(num1+num2);
}else {
    reject("kkk")
}
})

}
promi(1,2).then((data)=>{
  console.log(data);
  
}).catch((err)=>{
  console.log(err);
  
})
*/
// function hello(callback){
//   console.log("hello");
//   callback()
// }

// function hai(){
//   console.log("hai");
  
// }

// hello(hai)


// function mam (num,cb){
//   setTimeout(()=>{
//     console.log(num);
//     if(cb){
//       cb()
//     }
    
//   },2000)

// }

// mam(20,()=>{
//   mam(2,()=>{
//     mam(90)
//   })
// })

// 

// let str = "malayalam"
// let d = ""
// for(let x in str){
//   d = str[x] + d 
// }
// console.log(d == str);

// let a = "cat"
// let b = "bct"
// let count = 0

// for(let x of a){
//   console.log(x);
//   for(let y of  b){
//     if(x === y){
//       count++
      
      
//     }
//   }
// }
// console.log(count === a.length);

// let obj = {
//   name:"Akhil",
//   age:21,
//   place:"tirur"
// }
// let keys = Object.keys(obj)
// let end = keys[keys.length-1];
// delete obj[end]
// console.log(obj)




function sum (num1,num2){
  return new Promise((resolve,reject)=>{
    if(typeof num1 === "number" && typeof num2 === "number"){
      resolve(num1+num2);
    }else{
      reject("error");
    }
    })
  }

  sum(1,"2").then((result)=>{
    console.log(result);
  }).catch((err)=>{
    console.log(err);
    
  })

  








