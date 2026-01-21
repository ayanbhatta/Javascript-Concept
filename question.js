
let joinDate=new Date("2026-04-12")
let leaveDate = new Date("2029-11-1")

let years = leaveDate.getFullYear() - joinDate.getFullYear();
let months = leaveDate.getMonth() - joinDate.getMonth();
let days = leaveDate.getDate() - joinDate.getDate();

if(days<0){
    months--;
    days += 30
}
if(months<0){
    year--;
    months += 12
}
console.log(years);
console.log(months);
console.log(days);
