let arr0 = [1,true,"Ayan",{},()=>{},null,undefined];
console.log(arr0);

let arr1 = new Array(1,3,5,7)
console.log(arr1);

let arr2 = new Array(5)
console.log(arr2);

let arr3 = [];
console.log(arr3);
arr3[0]=1
arr3[1]=2
arr3[2]=3
console.log(arr3);

let arr = [10,30,20,40]
arr.push(20,40)
console.log(arr);

arr.pop()
arr.pop()

arr.shift()
console.log(arr);

arr.unshift("Ayan")
console.log(arr);
console.log("----------------------------");


//?splice(start,deleteCount,addElements...)
let arr4=[10,20,30,40,50]
console.log(arr4.splice(1,2,"100","200"));
//console.log(arr4.splice(1,2));
//console.log(arr4.splice(1,0,"100","200"));
//console.log(arr4.splice(1,"100","200"));
//console.log(arr4.splice(1,"abc","200"));//it will ignore abc and add 200
//console.log(arr4);

let arr5=["A","b","B","z",{},()=>{},1,2,3]
console.log(arr5.sort());

let arr6=[100,10,3,420,5]
console.log(arr6.sort()); // only sort first 2 val
console.log(arr6.sort((a,b)=>a-b));//asc
console.log(arr6.sort((a,b)=>b-a));//desc

let arr7 = [10,20,30,60]
console.log(arr7.reverse());
console.log("------------------fill--------------");
//?fill(val,startIndex,EndIndex)
let arr8=[1,2,3,4,5]
//console.log(arr8.fill(9));
//console.log(arr8.fill(10,2));//it fills value 10 from 2nd index to end
console.log(arr8.fill(1,1,4));
//console.log(arr8.fill(5,-2,-1));
//console.log(arr8.fill(5,-2,1));
console.log("--------------------------------");
//?copywithin(target,start,end)
let arr9 = [1,2,3,4,5]

//console.log(arr9.copyWithin(2));
console.log(arr9.copyWithin(0,3));
//console.log(arr9.copyWithin(1,3,4));
//console.log(arr9.copyWithin(2,0,3));
//console.log(arr9.copyWithin());
console.log("--------------------------------");
let arr10 = [1,2,3,4]
//console.log(arr10.copyWithin(-2,0));
//console.log(arr10.copyWithin(1,2));
//console.log(arr10.copyWithin(1,-4,-1));

let num = [2,4,5,0,8,0,9,0]
//console.log(num.sort((a,b)=>b-a));
let resNonZero = num.filter(ele=> ele !==0)
let zeros = num.filter(ele => ele ===0)
//console.log(resNonZero.concat(zeros));


let num1 = [2,3,4,5,4,6,5,3,3,0]




//?Map()
let marks = [20,30,40,50]
//let res = marks.map(ele => ele + 10)
//console.log(res);

let res = marks.filter((ele) => ele > 30).map(ele=>ele+20)
console.log(res);

let nums=[2,3,4,5];
let binary = nums.map(ele=>ele.toString(2))
console.log(binary);
let val = binary.map(ele=>parseInt(ele,2))
console.log(val);

//?reduce()
let result = nums.reduce((acc,curr)=>{
    return acc + curr* curr
},0)
console.log(result);

//max element in arr
console.log(nums.reduce((max,curr)=>{
    if(max< curr){
        max=curr
    }return max
},0));
    
let num2=[2,3,4,5,4,6,5,3,3,0]
let freq = num2.reduce((acc,curr)=>{
    acc[curr] = (acc[curr] || 0)+1;
    return acc;
},{})
console.log(freq);