
let str = "bananananana";
let index = 4;
let count = 0;

for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] == "a") {
        count++;
    }
    
    if (count == index) {
        console.log("The 4th 'a' is at index:", i);
        break; 
    }
}