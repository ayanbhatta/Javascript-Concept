// let body=document.body;
// let heading=document.querySelector(".h1")
// fetch("https://fakestoreapi.com/products");
// console.log(data)
// .then( (response)=>{
//     console.log(response);
//     return response.json();
// })
// .then( (data) =>{
//     console.log(data)
//     data.forEach(ele => {
//         console.log(ele.title)
//         let heading=document.createElement("h6");
//         heading.innerHTML=ele.title;
//         body.append(heading)
        
//     });
// })



// using async and await:------------
 let body=document.body;
 async function getProducts(){
    try{
        let response = await  fetch("https://fakestoreapi.com/products");
        console.log(response)
        let data= await response.json();
        console.log(data)
        data.forEach(ele => {
             let heading=document.createElement("h6");
                heading.innerHTML=ele.title;
                body.append(heading)
            
        });
    }
    catch(error){
        console.log("error")
    }
 }
 getProducts()