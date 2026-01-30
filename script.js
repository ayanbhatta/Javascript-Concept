// let ele = document.getElementById("heading1")
// console.log(ele);
// console.dir(ele);
// ele.style.background = "yellow";

let elements = document.getElementsByClassName("heading2")
console.log(elements);
// console.dir(elements);
elements[0].style.fontSize = "60px"
elements[1].style.color = "blue"

for(item of elements){
    item.style.color="blue"
    item.style.backgroundColor="yellow"
    item.style.fontSize="10px"
}

//tagname
// let parahs = document.getElementsByTagName('p')
// console.log(parahs);

//?querySelector('.class/#id/tag')
// let parahs2 = document.querySelector('.heading2')
// console.log(parahs2);

//?querySelectorAll('.class/#id/tag')
// let parahs3 = document.querySelectorAll('.heading2')
// console.log(parahs3);

// let heading = document.querySelector("h1")
// console.log(heading.innerText);
// console.log(heading.innerHTML);
// heading.innerText="JS"
// heading.innerHTML="<h6>javascript</h6>";
// console.log(heading.innerText);
// console.log(heading.textContent);

//? DOM Attributes
let ele = document.querySelector('h1')
console.log(ele.getAttribute("name"));
ele.setAttribute("name","js")
// ele.removeAttribute("name")

// let button = document.createElement("button")
// button.append("Click Me")

// let myul = document.querySelector("div")
// myul.append(button)
// myul.append("button")

// myul.appendChild(button)
// myul.prepend(button)
// myul.after(button)
// myul.before(button)
// myul.removeChild(button)



//before

//--------------------------
    //prepend               |
    //append                |
//--------------------------
//after
// for (let i = 1; i <= 3; i++) {
//     const newDiv = document.createElement('div');
//     newDiv.className = 'js';
//     document.body.appendChild(newDiv);
// }
// const divs = document.querySelectorAll('.myclass');
// divs.forEach((div, index) => {
//     div.textContent = `I am unique div number ${index + 1}`;
// });