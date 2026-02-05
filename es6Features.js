// ! spread(right side) and rest(left side) operator
//...identifier
//.args

// let arr=[10,20,30,40,50]
// console.log(...arr);

// let arr1 = [200,300,400,500]
// console.log(arr1);

// let arr3 = arr.concat(arr)
// console.log(arr3);

// let arr4 = [60,...arr,100,...arr1,600]
// console.log(arr4);

let arr=[10,20,30,40,5,90]
let [a,b,...args] = [...arr]
console.log(a);
console.log(b);
console.log(args);

function add(a,b,...args){
    let mul = a*b;
    console.log(mul);
    console.log(args);
    let sum = 0;
    for(let el of args){
        sum += el
    }
    console.log(sum);
}
let res = add(...arr);
console.log(res);

// let student ={
//     name:"Ayan",
//     age:22
// }
// let trainer = {...student}
// trainer.name = "Aman"

// let trainer2 ={
//     tname:"Aman",skill:"js"
// }
// let combinedObject = Object.assign({},student,trainer)
// let combinedObject1 = {...student,...trainer}//not change student

// console.log(student);
// console.log(trainer2);
// console.log(combinedObject);
// console.log(combinedObject1);

let student ={
    name:"Ayan",
    age:22,
    skills:{
        frontend:"web",
        backend:"java"
    }
}
let trainer3 = {...student}
trainer3.skills.backend = "NodeJS"
//? It will modify original obj to overcome this we have to go for deepcopy
trainer3.name="Sreenavas"
console.log(student);
console.log(trainer3);

//?JSON:
// JSON.stringify():Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
let JsonObj = JSON.stringify(student)
console.log((JsonObj));

// ?JSON.parse():Converts a JavaScript Object Notation (JSON) string into an object.
console.log(JSON.parse(JsonObj));

//?Deep Copy:
let student1 ={
name:"Ayan",
    age:22,
    skills:{
        frontend:"web",
        backend:"java"
    }
};
let trainer4 = JSON.parse(JSON.stringify(student));
trainer4.skills.backend="NodeJS";
trainer4.name="Sree";
console.log(student1);
console.log(trainer4);