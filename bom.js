//?console object:
// var a=10
// console.log(a);
// console.log(window.a);

// window.console.log("hello")
// console.error('I am error');
// console.warn("Warning")

// let obj = {
//     name:"Ayan",
//     age:22
    
// }

// console.table(obj)

// console.time("forLoop")
// for (let i = 0; i < 100; i++) {
   
    
// }
// console.timeEnd("forLoop")
// console.time("whileLoop")
// let i=0
// while(i<1000){
//     i++;
// }
// console.timeEnd("whileLoop")

//?location
// console.log(location);
// console.log(location.hostname);
// console.log(location.port)
// console.log(location.protocol)
// location.reload()

// window.location="amazon"    //history stored
// location.href="google"//history stored
// location.assign("https://www.redbus.in/")//history stored
// location.replace("https://www.google.com")  //history not stored

//? navigator:
// console.log(navigator);
// console.log(navigator.appName);
// console.log(navigator.appCodeName);

//?screen
// console.log(screen);
// console.log(innerHeight);
// console.log(outerHeight);
// console.log(innerWidth);
// console.log(outerWidth);


//?window methods:
//!prompt() alsop called dialogue
// let a = Number(prompt("value of a","234"))//2nd argument is default val.
// console.log(a);
// console.log(typeof a);

//?alert()
// alert("this is warning")

//?confirm()
// let value = confirm("are you sure you want to exit")
// console.log(value);

//?setTimeout(callback, delay)
// let timeId = setTimeout(() =>{
//     console.log("I am set timeout");
// },1000)

//? clearInterval(id)
// clearInterval(interval)

//? history
// console.log(history);
// console.log(history.back());
// console.log(history.forward());
// console.log(history.go());

//? Navigator
// console.log(navigator);
// console.log(navigator.appName);
// console.log(navigator.appCodeName);
// console.log(navigator.onLine);
// console.log(navigator.userAgent);

//?screen
// console.log(screen);
// console.log(screen.width);
// console.log(screen.height);

// console.log(innerHeight);
// console.log(outerHeight);
// console.log(innerWidth);


//? open() & close()
// var newPage = open("https://www.google.com","_blank","height=500px,width=500px")
// var anotherPage=open("https://www.google.com")
// setTimeout(()=>{
//     newPage.close()
// },5000)

//?using html page
var newpge;
function newPage1(){
    newpge= open("https://www.google.com","_blank","height=500,width=500")
}

function closePage(){
    if (newpge) {
        newpge.close();
    } else {
        console.log("No window has been opened yet!");
    }
}