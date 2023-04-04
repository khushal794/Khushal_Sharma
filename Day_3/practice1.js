console.log("Khushal Sharama")

// var and let
var b= "Khushal"

{
    var b="Apoorva"
    console.log(b)
}
console.log(b)

let c="Khushal"

{
    let c="Apoorva"
    console.log(c)
}
console.log(c)

const author= "Khushal Sharma"
// author=5 //this throws an error 

// diffrent datatypes

let a=null;
let h=345;
let g=true;
let e=BigInt("567")
let s="Khushal";
let f=undefined;
console.log(a,h,g,e,s,f)

// Objects in JS
const item={
    "name":"Khushal",
    "a":true,
    "b":undefined,
    "c":67

}
item["j"]="Apoorva Khandelwal"
console.log(item)
console.log(item.j)

// Operators in JAvaScript
let k=10;
let i=34;
console.log("k+i=",k+i)
console.log("k-i=",k-i)
console.log("k*i=",k*i)
console.log("k**i=",k**i)
console.log("k/i=",k/i)
console.log("k%i=",k%i)
console.log("k++",k++)
console.log("k=",k)
console.log("++k",++k)


let comp1=6
let comp2="6"
console.log(comp1==comp2)
console.log(comp1!=comp2)

console.log(comp1===comp2)
console.log(comp1!==comp2)

// comments in javaScript
/* multi line 
comment in JAvaScript */


// Typecasting in Javascript

let inp="36"
inp=Number.parseInt(inp) //converting the string to a number


// conditions

if(inp>0 && inp<18){
    console.log("You are in your childhood");
}
else if(inp>18 && inp<35){
    console.log("This is valid age and You are in a youth group");

}
else{
    console.log("You are old ");
}


// Ternary Operator

console.log("You can",(inp<18)?"Not drive":"drive")


// Loops in JavaScript
/*
for loop: loop a block of code no of times
for in loop: loop through the keys of an object
for of `loop: loop through the values of an object
while loop: loop a block based on a specific condition
do while loop : while loop variant
*/


for(let i=0;i<5;i++){
    console.log(i)
}

let obj={
    harry:90,
    shubh:90,
    shivika:77,
    ritika:56,
    shiv:89
}

for (let a in obj){
    console.log(a,obj[a]);
}

// for (let b of obj){
//     console.log(b,obj[b]);
// }   This is not working because objects in javascript is not iterable

// functions i  JavaScript

function onePlusOne(x,y){
    return x+y;
}
console.log(onePlusOne(4,5));

let sum=(p,q)=>{
    return p+q;
}
console.log(sum(7,8));

let marks={
    harry:90,
    shubham:9,
    lovish:89,
    monika:34
}

for(let i=0;i<Object.keys(marks).length;i++){
    console.log("The marks of "+Object.keys(marks)[i]+" are " + marks[Object.keys(marks)[i]])
}

for(let key in  marks){
    console.log("The marks of "+key +" are " + marks[key])
}


//mean of 5 numbers function

const mean=(a,b,c,d,e)=>{
    return (a+b+c+d+e)/5;
}
console.log(mean(5,6,7,8,9));


// String methods
let str="Khushal\""
console.log(str.length)
console.log(str.toLocaleUpperCase())
console.log(str.slice(2,4)) 
console.log(str.slice(2))
console.log(str.replace("Khu","Vi"))
console.log(str.concat("is a good boy"))

const sentence='The Quick brown fox jump over the lazy dog'
const word  ='fox'
console.log(`The word "${word}" ${sentence.includes(word)?"is":"isnot"} in the sentence`)


// Arrays in Javascript

let marks_class_12=[91,82,87,67,"Not present"]
console.log(marks_class_12) 
let ma=marks_class_12.toString()
console.log(ma)

let ma1=marks_class_12.join("@") //join function also return string
console.log(ma1)

// some more functions like push(),pop()
let r=marks_class_12.shift() // it removes the element from the starting of an array 
console.log(r, marks_class_12)

let ru=marks_class_12.unshift(89) // it adds the new element in starting of an array
console.log(marks_class_12)  

// delete marks_class_12[1] 
// let new_array=existing_array.concat(new_add_array)
// sort method
let n_array=[1,2,34,56,33,56,78,22,23,67]
n_array.sort()
console.log(n_array)

// if we want to sort in asscending and descending order

let compare=(a,b)=>{
    return b-a
}
n_array.sort(compare)
console.log(n_array)

// foreach
n_array.forEach((element)=>{
    console.log(element*element)
})

// Array.from(object) this is used to create an array from any other object

for (let i of n_array){
    console.log(i)
}

console.log("\n")
let arr=[43,21,12]
let ar1=arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value+index
})
console.log(ar1)

let arr1=[45,34,67,0,3,5]
let ar2=arr1.filter((a)=>{
    return a<10
})
console.log(arr1)
console.log(ar2)