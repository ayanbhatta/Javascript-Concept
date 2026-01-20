let person = {
    name: "Ayan",
    age:20,
    gender:"male",
    1:"a",
    name1:"def",
    "fruit@":"apple"
}
console.log(person.name);
console.log(person["fruit@"]);
//add
person.phno=789879898
//update
person.age=23

//delete
delete person.gender

//?ways to create obj
//1.literals {}
let person1={
    name:"Ayan"
}

//2.using new keyword
let person2 = new Object()
person2.name="abc"
person2.age=23

//? 3. using function constructor
function Person(name,age){
    this.name = name
    this.age = age
}
let o1 = new Person("ABC",30)
console.log(o1);

// 4 using class
class Person{
    constructor(name, age){
    this.name= name,
    this.age=age
    }
    greet(){
        console.log(`Hello: ${this.name}`);
    }
}

//5. Using object.create()
let gp={
    gpname:"Arup"
}
let parent = Object.create(gp)
parent.pname="Anindya"

let child= Object.create(parent)
child.cname="Ayan"

console.log(child.cname);
console.log(child.__proto__.pname);
console.log(child.gpname);

//Methods
//?keys:
console.log(Object.keys(person));

//?values
console.log(Object.values(person));

//?keys:values
console.log(Object.entries(person));

//?assign
let obj1 = {
    name: "ayan",
    friend:"aman"
}
let obj2 = {
    name1: "ayaaan",
    bestfriend:"aaaman"
}
let res = Object.assign({},obj1,obj2)
console.log(res);
console.log(obj1.hasOwnProperty("name1"));

//?seal
let fruit={
    name: "grapes",
    price:120
}
Object.seal(fruit)

//?freeze()
let