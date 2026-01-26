// ! 1. From a sentence, find the first word longer than 5 letters.
// const str = "We are enjoying Learning JavaScript";
// let res = str.split(' ').find((el)=>el.length>5)
// console.log(res);

// !2. Find the first string that contains the letter “z”.
// const arr = ["fast", "zebra", "lazy", "zoom"];
// let op = arr.find((el) => el.includes("z"));
// console.log(op);

// !3. Get all words from a string that start with capital letters.
// const str = "JavaScript is Fun and Powerful";
// let op = str.split(" ").filter((el) => {
//   return el.charAt(0) == el.charAt(0).toLowerCase();
// });
// console.log(op);

// !4. Convert all words in an array to their first 3 letters.
// const arr = ["JavaScript", "React", "Python", "Node"];
// let a = arr.map((el) => {
//   return el.slice(0, 3);
// });
// console.log(a);

// Expected output: ['Jav', 'Rea', 'Pyt', 'Nod']

// !5. Convert all numbers into strings with a $ sign before them.
// const arr = [10, 20, 30];
// let op = arr.map((el) => {
//   return `$${el}`;
// });
// console.log(op);

// Expected output: ['$10', '$20', '$30']

// !6. Take a sentence and return an array of each word’s length.
// const str = "Coding is super fun";
// let op = str.split(" ").map((el) => {
//   return el.length;
// });
// console.log(op);

//  Expected output: [6, 2, 5, 3]

// !7. Make every word in a string uppercase.
// const str = "js is awesome";
// str.toUpperCase().split(' ')
// Expected output: ['JS', 'IS', 'AWESOME']

// !8. Replace all vowels in words with “*”.
// const arr = ["apple", "banana", "grape"];
// let op = arr.map((el) => {
//   return el
//     .split("")
//     .map((el) => {
//       return "aeiou".includes(el) ? "*" : el;
//     })
//     .join("");
// });
// console.log(op);

// Expected output: ['*ppl*', 'b*n*n*', 'gr*p*']

// !9. From a sentence, filter out words shorter than 4 letters, then make the remaining words uppercase.
// const str = "I love to code in JavaScript";
// let op = str
//   .toUpperCase()
//   .split(" ")
//   .filter((el) => {
//     return el.length >= 4;
//   });
// console.log(op);

// Expected output: ['LOVE', 'CODE', 'JAVASCRIPT']

// !10. From a string, get all words that include vowels and return their lengths.
// const str = "Fly by night sky bright";
// let op = str
//   .split(" ")
//   .filter((el) => {
//     // ['F' , 'l' , 'y']
//     return el.split("").some((el) => {
//       return "aeiou".includes(el);
//     });
//   })
//   .map((el) => {
//     return el.length;
//   });
// console.log(op);

// Expected output: [5, 6]

// ! 11. remove all the duplicates from an Array
// const arr = [1, 2, 3, 2, 4, 1, 5];
// let op = arr.filter((el, i) => {
//   return arr.indexOf(el) == i;
// });
// console.log(op);

// ! Ques 12-> filter the names starting with vowel
let names = ["Atul", "pranavii", "anurag", "vishala", "riteshi", "abhinav"];
let op = names.filter((el) => {
  return "aeiou".includes(el.at(-1).toLowerCase());
});
console.log(op);

let username = "Atul";

"aeiou".includes(username.charAt(0).toLowerCase());