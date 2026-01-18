
console.log("object");
let str1 = "abc";
let str2 = "bcd";
console.log(str1+str2);
console.log(`I am ${str1} and ${str2}`);
console.log(str1.length);
let str3 = "  js  ";
console.log(str3.trim());
console.log(str3.toUpperCase());
let str4 = "HI THERE";
console.log(str4.toLowerCase());

let str6 = 123;
console.log(typeof str6.toString());


let str5 = "hello world";
console.log(str5.slice(0,5));
console.log(str5.replace("world", "JS"));
console.log(str5.replaceAll("o", "e"));

let str7= "I am a programmer"
console.log(str7.substring(0,5));
//toString()
//toUpperCase()
//toLowerCase()
//.trim()   .trimStart()    .trimEnd()
//replace()     .replaceAll()
//.substring(a,b)  pass indexes, treates any -ve index as 0         if start index greater swaps the args
// .slice(a,b)  pass indexes,   operates with -ve indexing also     if start ingex greater return empty string
//.split(a)     expression -> converts and stored in the form of array.

let a ="T"
let b = "d"
let c = "f"
console.log(a.concat(" ",b,c));
let str8="javascript"
console.log(str8.indexOf("a"));
console.log(str8.lastIndexOf("a"));

let str9 = "js is a lang"
console.log(str9.includes("is"));
console.log(str9.charAt(6));

console.log(str9.charCodeAt(3));

let value = String.fromCharCode(65)
console.log(value);