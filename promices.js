let promiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("promise created");
        resolve("promise resolved")
    },2000)
})
console.log(promiseOne);
promiseOne.then(data=>{
    console.log(data);
})

let promiseTwo = new Promise((resolve, reject)=>{
    let login = true;
    if(login){
        setTimeout(()=>{
            resolve("Login Successfully")
        },2000)
    }else{
        reject("Failed to login")
    }
})
console.log(promiseTwo);
promiseTwo.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("finally has been executed");
})

function demo(id, getData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data", id);
            resolve("promise resolved")
            if(getData){
                getData();
            }
        },2000)
    });
}

//! Callback hell
demo(1,()=>{
    console.log("fetching data 1");
    demo(2,()=>{
        console.log("fetching data 2");
        demo(3,()=>{
            console.log("fetching data 3");
        })
    })
});

//! overcoming callback hell using promise
demo(1)
.then(()=>{
    return demo(2);
})
.then(()=>{
    return demo(3);
})
.then((res)=>{
    console.log(res);
});

function demo1(){
    console.log("demo executed");
}

async function fun(){
    console.log("fun is executed");
    await demo1();
}
fun();

//! using async and await
async function getAllData(){
    await demo(1);
    await demo(2);
    await demo(3);
}
getAllData();