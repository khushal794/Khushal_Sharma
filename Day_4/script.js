// alert("Hello your script works")
// let a=prompt("enter a number")
// a=Number.parseInt(a)
// alert("Ypu entered a of type " + typeof(a))
// document.write(a)

//BOM Browser object model-> represents additional objects provides by browser(host env) for working with everything except the document
// DOM Document object model-> represents the page content as HTML

// DOM Tree -> HTML doicument converts into javascript object

console.log(document.body.firstChild)
console.log(document.body.lastChild)
let arr =Array.from(document.body.childNodes)
console.log(arr)
console.log(document.documentElement.parentNode)
console.log(document.documentElement.parentElement)