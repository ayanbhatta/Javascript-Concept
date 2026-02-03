let data=[
    {name:"Ayan",Job:"SDE",sal:"20000"},
    {name:"Antara",Job:"Producer",sal:"30000"},
    {name:"Sunil",Job:"Asistent Directer",sal:"15000"}
    
];
let table = document.createElement("table");
table.border = "1";
let thead = document.createElement("thead");
let headerRow = document.createElement("tr");
let th1 = document.createElement("th");
th1.innerText = "Name";
let th2 = document.createElement("th");
th2.innerText = "Job";
let th3 = document.createElement("th");
th3.innerText = "Sal";
headerRow.append(th1, th2, th3);
thead.append(headerRow);
table.append(thead);
let tbody = document.createElement("tbody");
data.forEach((el) => {
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = el.name;
    let td2 = document.createElement("td");
    td2.innerText = el.Job;
    let td3 = document.createElement("td");
    td3.innerText = el.sal;
    row.append(td1, td2, td3);
    tbody.append(row);
});
table.append(tbody);
document.body.append(table);