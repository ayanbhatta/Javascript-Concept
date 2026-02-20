//DOM (Document Object Model):
// When a browser loads an HTML file:
// It reads the HTML.
// It parses it.
// It converts it into a tree structure of objects.
// That tree is called the DOM.
// So DOM is:
// A structured object representation of your HTML document that JavaScript can manipulate.
// Note:
// DOM is NOT JavaScript.
// DOM is provided by the browser.
// JavaScript interacts with DOM.

// DOM Tree Structure:
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Page</title>
//   </head>
//   <body>
//     <h1>Hello</h1>
//     <p id="para">Welcome</p>
//   </body>
// </html>

// Browser converts it into:

// Document
//  └── html
//       ├── head
//       │    └── title
//       │         └── "Page"
//       └── body
//            ├── h1
//            │    └── "Hello"
//            └── p (id="para")
//                 └── "Welcome"


// Everything becomes a Node.

// Types of DOM Nodes:
// 1. Document Node
// Root of everything.
// document

// 2. Element Node
// Tags like:
// <div>, <p>, <h1>

// 3. Text Node
// Text inside element.
// Ex:
// <p>Hello</p>
// "Hello" is a text node.

// 4. Comment Node
// <!-- comment -->

// 5. Attribute Node
// id="para"

// DOM Selection Methods:

// 1. document.getElementById('idName'):

// Selects a single element by its id.
// Returns: The element object or null.

// const heading = document.getElementById('h1');

// 2. document.getElementsByClassName('className')

// Selects all elements with a specific class.
// Returns: An HTMLCollection (array-like, but not a real array).

// const items = document.getElementsByClassName('className');
// // usage: items[0]

// we can even iterate as well
// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

// 3. document.getElementsByTagName('tagName')

// Selects all elements with a specific tag name (e.g., 'p', 'div').
// Returns: An HTMLCollection.
// const paragraphs = document.getElementsByTagName('p');

// 4. document.querySelector('cssSelector')

// Selects the first element that matches the CSS selector.
// Returns: The element object or null

// const button = document.querySelector('#id');
// const firstItem = document.querySelector('.className');
// const firstItem = document.querySelector('div');

// 5. document.querySelectorAll('cssSelector')

// Selects all elements that match the CSS selector.
// Returns: A NodeList (can be looped with .forEach()).

// const allButtons = document.querySelectorAll('.btn');
// allButtons.forEach(btn => console.log(btn));

// Manipulating Content:
// Once selected, you can change what an element displays.

// 1. innerHTML:

// Gets or sets the HTML content (including tags).
// Can be a security risk (XSS attacks) if used with user input.
// element.innerHTML = "<strong>Bold Text</strong>";

// 2. textContent:

// Gets or sets the text content of the node and its descendants.
// Ignores HTML tags (treats them as text) and CSS styling (returns hidden text too).
// element.textContent = "Just plain text";

// 3. innerText:

// Similar to textContent but aware of CSS styling (won't return hidden text).
// Slower than textContent.
// element.innerText = "Visible text only";

// 4. value:
// Used specifically for form elements (input, textarea, select).
// const inputValue = document.getElementById('username').value;

// Manipulating Styles:

// You can change the CSS of an element directly.

// style property:
// Properties are camelCased (e.g., background-color becomes backgroundColor).

// const box = document.querySelector('.box');
// box.style.backgroundColor = 'blue';
// box.style.fontSize = '20px';
// box.style.display = 'none'; // Hides element

// Using classList: Instead of inline styles, it's often better to toggle CSS classes.

// element.classList.add('active');    // Adds class
// element.classList.remove('active'); // Removes class
// element.classList.toggle('dark');   // Adds if missing, removes if present

// Manipulating Attributes:
// Control HTML attributes like src, href, alt, type.

// const img = document.querySelector('img');
// // Get
// console.log(img.getAttribute('src')); 

// // Set
// img.setAttribute('src', 'new-image.jpg');
// img.setAttribute('alt', 'Description of new image');

// // Remove
// img.removeAttribute('hidden');

// Creating and Removing Elements:
// 1. Create:

// const newDiv = document.createElement('div');
// newDiv.textContent = "I am a new element!";
// newDiv.classList.add('alert');

// 2. Append:

// document.body.appendChild(newDiv); 
// // Or add to a specific container
// const list = document.getElementById('myList');
// list.appendChild(newItem); // appendChild only accepts one node.

// parent.append(child1,);
// parent.prepend(child1, child2);
// parent.before(child1);
// parent.after(child1);

// Remove:
// element.remove()

// const target = document.querySelector('.remove-me');
// target.remove()
// parent.removeChild(childName);

// Replacing Elements
// parent.replaceChild(newElement, oldElement);

// DOM Traversing:
// Parents:
// element.parentElement (The direct parent element)

// Children:
// element.children (HTMLCollection of child elements - tags only)
// element.childNodes (NodeList of all children including text nodes/whitespace)
// element.firstElementChild / element.lastElementChild

// Siblings:
// element.nextElementSibling (Next tag sibling)
// element.previousElementSibling (Previous tag sibling)

// DOM Events:
// Events are things that happen to HTML elements (clicks, typing, loading, etc.).
// or
// Events are actions triggered by the browser or user (e.g., clicking a button, 
// pressing a key, etc.).

// Common Events:
// Mouse: click, dblclick, mouseenter, mouseleave, mousemove
// Keyboard: keydown, keyup, keypress
// Form: submit, change, input, focus, blur
// Window: load, resize, scroll

// Ways to Attach Events in JavaScript 
// We can attach events to an HTML element in three ways: 
// 1. HTMLAttributes 
// 2. DOMProperties 
// 3. addEventListiners 

// 1. Using HTML Attributes 
// Here, the event is assigned directly as an attribute in the HTML tag. 
// <tagname onEventName="JavaScript Code">Content</tagname>; 
// <div onclick="alert('Click Event is triggered')">Click Me</div>; 

// 2. Using DOM Properties 
// Here, we attach events using JavaScript properties. 
// element.onEventName = function; 
// let div = document.getElementById("myDiv"); 
// div.onclick = function () { 
// div.style.cssText = "color: white; background-color: teal; border: 1px solid; text-align: 
// center;";
// }; 

// 3. Using addEventListener("event", function) - The standard way

// This is the best and most flexible way to attach events. 
// We can attach multiple functions to the same event. 
// We can remove the event later using removeEventListener(). 
// It supports event propagation. 

// element.addEventListener("eventName", function, useCapture); 
// let button = document.getElementById("myButton"); 
// button.addEventListener("click", () => { 
// console.log("Click Event is Triggered"); 
// });

// Understanding the Third Parameter in addEventListener() 
// The third parameter (useCapture) is optional and controls event propagation: 
// true → Capturing phase (event runs from parent to child) 
// false → Bubbling phase (event runs from child to parent, default 
// behavior) 

// Event Propagation 
// Event propagation refers to how events flow through the DOM hierarchy 
// when an event occurs. It consists of three phases:

// 1. Event Capturing
// 2. Event Target
// 3. Event Bubbling

// Capturing Phase (Event Capturing/Trickling) :
// ○ The event starts from the window and travels down to the target 
// element. 

// Target Phase (Event Execution) 
// ○ The event reaches the target element and executes its handler. 

// Bubbling Phase (Event Bubbling) 
// ○ The event bubbles up from the target element to the window. 

// Example :
// parent.addEventListener( "click", () => { 
// console.log("Parent Clicked"); 
// },  true ); // Capturing mode 

// child.addEventListener("click",() => { 
// console.log("Child Clicked"); 
// },true ); // Capturing mode 

// parent.addEventListener( "click", () => { 
// console.log("Parent Clicked"); 
// },  false); // bubbling mode 

// child.addEventListener("click",() => { 
// console.log("Child Clicked"); 
// },false ); // bubbling mode 

// Event Object 
// The event object (event or e) is an automatically passed argument to the 
// event handler function, when an event occurs in JavaScript. It contains 
// details about the event, such as the type of event, the target element, mouse 
// coordinates, key presses, and more. 

// document.getElementById("btn").addEventListener("click", function (e) { 
// console.log(e); // Logs the event object to the console 
// });

// e.preventDefault() :
// You use preventDefault() when you want to stop a default browser behavior, 
// such as: 
// Stopping form submission 
// Preventing link navigation 
// Disabling right-click menu 

// Stopping form submission 
// document.getElementById("myForm").addEventListener("submit", function (e) { 
// e.preventDefault(); // Stops the form from reloading the page 
// alert("Form submission prevented!"); 
// }); 

// Without preventDefault(): The form will submit and reload the page. 
// With preventDefault(): The form won't submit, allowing JavaScript validation. 





// !Promise:
// A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.

// In simple terms:
// A promise is a placeholder for a value that will be available later
// It avoids callback hell
// It makes async code readable and manageable

//? A promise has three states:
//?1. Pending
// Initial state
// Neither fulfilled nor rejected

//? 2️. Fulfilled
// Operation completed successfully
// Promise has a resolved value

//? 3. Rejected
//Operation failed
//Promise has a reason (error)

//!Note: Once a promise is settled (fulfilled/rejected), it cannot change its state again.

// Creating a Promise:
//? Syntax
// const promise = new Promise((resolve, reject) => {
// async operation
// });

// resolve(value) → when operation succeeds
// reject(error) → when operation fails

//? Example:
// let promiseOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise resolved")
//   }, 2000);
// })
//? Consuming a Promise (then, catch, finally):
// promiseOne
//   .then((data) => {   //?   .then()---> To Handling Success
//     console.log(data);
//   })
//   .catch((error) => { //?   .catch()---> To Handling error
//     console.log(error);
//   })
//   .finally(() => {   //?   .finally()---> Executes Either way
//     console.log("finally has been executed");
//   });

// ? Example-2:
// let promiseTwo = new Promise((resolve, reject) => {
//   let login = true;
//   if (login) {
//     setTimeout(() => {
//       resolve("Login Successful");
//     }, 2000);
//   } else {
//     reject("Failed to login");
//   }
// });
// promiseTwo
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally has been executed");
//   });

//? Promises are used to overcome Callback Hell Problem:
//? Callback Hell problems:
// Deep nesting
// Hard to read
// Hard to debug
//? Ex:
// function demo(id, callback) {
//   setTimeout(() => {
//     console.log("data", id);
//     if (callback) {
//       callback();
//     }
//   }, 1000);
// }

// !callback hell:
// demo(1, () => {
//   demo(2, () => {
//     demo(3, () => {
//       demo(4, () => {
//         demo(5, () => {
//           console.log("All data fetched");
//         });
//       });
//     });
//   });
// });

// ? Using promises to overcome callback hell:
//? solution:
// Flat structure
// Readable
// Maintainable

// function demo(id, callback) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("data", id);
//       if (callback) {
//         callback();
//       }
//       resolve();
//     }, 1000);
//   });
// }

// demo(1)
//   .then(() => demo(2))
//   .then(() => demo(3))
//   .then(() => demo(4))
//   .then(() => demo(5))
//   .then(() => console.log("All done"));

// This is called Promise Chaining.
// It’s a way to perform asynchronous operations sequentially.
// Each step depends on the previous step.
// The flow is linear and readable, unlike callback hell.

//? To overcome promise chaining we use async/await
// async is a keyword used before a function to make it asynchronous.
// An async function always returns a promise, even if you don’t explicitly return one.
// Inside an async function, you can use the await keyword.
// await can only be used inside an async function.
// It pauses the execution of the function until the promise resolves.

// function demo(id,callback) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("data", id);
//       if (callback) {
//       callback();
//     }
//       resolve();
//     }, 1000);
//   });
// }

// !using async and await
// async function getAllData() {
//   await demo(1);
//   await demo(2);
//   await demo(3);
// }
// getAllData();

//! fetch()
// What is fetch?
// fetch is a built-in browser API used to make network requests (HTTP requests) like GET, POST, PUT, DELETE, etc.
// It replaces older AJAX methods like XMLHttpRequest.
// It returns a Promise, so it works naturally with .then() chaining or async/await

//? Syntax:
// Basic Syntax
// fetch(url, options)
// url → the address of the resource you want to fetch
// options → an optional object to configure the request (method, headers, body, etc.)

//? Ex:1 Using Promises which leads to Promise Chaining
// fetch("https://fakestoreapi.com/users")
//   .then(response => response.json()) // Convert response to JSON
//   .then(data => console.log(data))
//   .catch(error => console.log("Error:", error));

//? Explanation:
// fetch() sends a GET request to the URL.
// response.json() converts the response into a JavaScript object (also a promise).
// The second .then() gets the actual data.
// .catch() handles any errors (like network failure).

//? Example 2: Using Async/Await
// let body = document.body;
// async function getProducts() {
//   try {
//     let response = await fetch("https://fakestoreapi.com/products");
// console.log(response);
//     let data = await response.json();
//     console.log(data);
//     data.forEach((el) => {
//     let heading = document.createElement("h6");
//     heading.innerHTML = http://el.id;
//     body.append(heading);
//     })
//   } catch (error) {
//     console.log("error");
//   }
// }
// getProducts();

// !Note:
// fetch only rejects the promise for network errors:
// Server unreachable
// DNS failure
// No internet

// fetch does NOT reject for HTTP errors like:
// 404 Not Found
// 500 Internal Server Error
// 403 Forbidden

// replace in fetch example 2: 
// heading.innerHTML = http://el.id -------->  heading.innerHTML = http://el.id; 




//? Destructuring:
// Destructuring is a feature introduced in ES6 that allows you to unpack values from Arrays, Objects and assign them into variables in a clean and readable way.

// let arr=[10,20,30]

// let a = arr[0];
// let b = arr[1];

// by destructuring:
// let [a,b]=arr;

// let arr = [10, 20, 30, 40, 50];
// let [, a, b, c, d, e] = arr;

// How It Works:
// Destructuring matches position by position
// , skips a value
// First element (10) is skipped
// Then values assigned sequentially
// a = 20
// b = 30
// c = 40
// d = 50
// e = undefined
// Why e is undefined?
// Because array has only 5 elements, but you are trying to destructure 6 positions.

//? Nested Array Destructuring
// let arr1 = [10, [20, [30, [40]]], 50];
// let [a, [b, [c, [d]]], e] = arr1;

//!Note: Pattern must match structure exactly.

//? Object Destructuring:
// let student = {
//   name: "shivam",
//   age: 46,
//   desc: "start preparing for mock",
// };
// let { name, age } = student;

// !Note: property name must be same

//? Nested Object Destructuring
// let student2 = {
//   name: "shivam",
//   age: 46,
//   address: {
//     name: "panna",
//     state: "mp",
//     pin: 488001,
//   },
// };

// let {
//   name: studentName, // we can rename key names
//   age,
//   address: { name, state },
// } = student2;

//? Spread Operator (...)
// Spread operator expands elements of Array,Objects.

//? Spread with Array
// let arr = [10, 20, 30];
// console.log(...arr);  //10 20 30

//? Merging Arrays
// Traditional way:
// let arr=[10,20,30]
// let arr1=[400,500,600]
// let arr3 = arr.concat(arr1);

//? Modern way: (using spread)
// let arr4 = [60, ...arr, 100, ...arr1, 600];
// Spread allows to Insert values anywhere and maintains Cleaner syntax

//? Rest Operator (...)
// Spread and Rest look same but work differently.

//? Rest in Array Destructuring
// let [a, b, ...args] = arr;
// a = first element
// b = second element
// args = remaining elements as array

//!Note: Rest must be Always at last position

// let arr = [10, 20, 30, 40, 50, 60];
// function add(a,b,...args) { // rest operator
// let mul = a * b;
// console.log(mul);
// console.log(args);
//   let sum = 0;
//   for (let el of args) {
//     sum += el;
//   }
//   console.log(sum);
// }
// let res = add(...arr); // spread operator

//? Shallow Copy:
// A shallow copy creates a new object or array,
// but only copies the first level of values.
// If a property contains another object (nested object),
// the reference to that object is copied — not the actual object.

//? Ex:
// let student = {
//   name: "prabhat",
//   age: 22,
// };
// let trainer = { ...student }; // shallow copy
// trainer.name = "sreenivas";
// console.log(student)

//? Ways to Create a Shallow Copy
//1. Spread Operator
// const copy = { ...original };  //for object
// const arrCopy = [...array];    // for array

// 2️. Object.assign()
// const copy = Object.assign({}, original);

// 3️. Array.slice()
// const arrCopy = array.slice(startIndex, endIndex);

// let student = {
//   name: "prabhat",
//   age: 22,
//   skills: {
//     frontend: "web",
//     backend: "java",
//   },
// };

// let trainer3 = { ...student };
// trainer3.skills.backend = "Nodejs";  //? it will modify skills because shallow copy won't work for nested objects. to overcome it we use deep copy

//? Deep Copy
//  A deep copy creates a completely independent copy of an object, including:
// All nested objects, All nested arrays, All levels of data, Nothing is shared by reference.
// So if you change the copied object, the original stays completely unchanged.

//? Using JSON Method:
// Convert object to JSON string
// Parse back to object
// Now modifying copied object does NOT affect original nested object also.

// let student = {
//   name: "prabhat",
//   age: 22,
//   skills: {
//     frontend: "web",
//     backend: "java",
//   },
// };

// let trainer = JSON.parse(JSON.stringify(student));
// trainer.skills.backend = "Nodejs";
// http://trainer.name = "Sreenivas";

// console.log(student);
// console.log(trainer);

// Limitations of JSON Deep Copy:
// Removes functions
// Removes undefined
// Converts Date to string
// Doesn’t support Map/Set

//? Modern Deep Copy:
// by using structuredClone(original obj);

// Built-in modern JS method
// Better than JSON
// Handles Objects, Arrays, Nested data, Dates, Maps, Sets
//? Ex:
// const user1 = {
//   name: "Zack",
//   address: {
//     city: "New York"
//   }
// };

// const user2 = structuredClone(user1); // deep copy
// user2.address.city = "Los Angeles";
// console.log(user1.address.city); // "New York" ✅

//? JSON:
// JSON stands for: JavaScript Object Notation
// It is a text format used to store and exchange data.
// JSON looks like a JavaScript object — but it is just plain text.
// JSON is a lightweight data format used to send data between a server and a client.
//? Note: Keys and values are in double quotes.

//? JSON.stringify()
// Converts JS object → JSON string
// let jsonObj = JSON.stringify(jsObject);

//? JSON.parse()
// Converts JSON string → JS object
// JSON.parse(jsonObj); 


// DEBOUNCE:
// Debouncing is a technique that ensures a function is executed only after a specified period of time has passed without the event being triggered again.

// How debounce works:

// When debouncing is applied to a function:
// 1. An event occurs
// 2. A timer is started
// 3. If another event occurs before the timer finishes:
// 4. the timer is cancelled
// 5. a new timer is started
// 5. The function executes only if no new event occurs before the timer expires, and Execution depends entirely on inactivity, not activity.

// Example: 
// <!-- <h1>Debounce Example:</h1> -->
//     <!--  -->
//     <!-- <input type="text" /> -->
//     <!-- <p>Result: <span class="res"></span></p> -->

// <script>
      //   let input = document.querySelector("input");
      //   let result = document.querySelector(".res");

      //   input.addEventListener("input", () => {
      // console.log(input.value);
      // result.innerHTML = input.value;
      //   });

      //   let timeoutId;
      //   function debounce() {
      // clearTimeout(timeoutId);
      //
      // timeoutId = setTimeout(() => {
      //   console.log(input.value);
      //   result.innerHTML = input.value;
      // }, 3000);
      //   }
      //
      //   input.addEventListener("input", debounce);
//     </script>

// THROTTLE:
// Throttling is a technique that ensures a function is executed at most once within a specified time interval, regardless of how many times the event is triggered during that interval.


// How throttle works:

// When throttling is applied:

// 1. First event triggers immediate execution
// 2. A cooldown period starts
// 3. All events during cooldown are ignored or queued
// 4. After cooldown ends: execution may happen again (depending on configuration)

// Example: 
// <h1>Throttling Example:</h1>
//     <button class="btn">Click Here</button>
//     <p>You Clicked button <span class="result">0</span> Times</p>
//     <p>Throttling result <span class="throttle">0</span> Times</p>

//   Throttling:

      let btn = document.querySelector(".btn");
      let normalRes = document.querySelector(".result");
      let throttleRes = document.querySelector(".throttle");

      let count = 0;
      btn.addEventListener("click", () => {
        count++;
        normalRes.innerHTML = count;
      });
      let count2 = 0;
      let msgSent = false;
      function throttle() {
        if (msgSent) return;
        count2++;
        throttleRes.innerHTML = count2;
        msgSent = true;

        setTimeout(() => {
          msgSent = false;
        }, 3000);
      }
      btn.addEventListener("click", throttle); 


