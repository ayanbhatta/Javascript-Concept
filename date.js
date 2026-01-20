let date = new Date()
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

let date2 = new Date("2026-02-20")
console.log(date2);

let date3 = new Date(2026,1,22,12)    //12 is hours specified so that doesnot do to next date
console.log(date3);

let date4 = Date.now();
console.log(date4/(1000*60*60*24*365));

let setDate = new Date()
setDate.setFullYear(2030)
setDate.setMonth(1)
setDate.setDate(1)
setDate.setHours(12)
setDate.setMinutes(1)
console.log(setDate);