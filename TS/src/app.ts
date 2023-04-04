export {}
let hr="Hello TS";
console.warn(hr)
console.log("Khushal Sharma")
let a=12
let b: number=6
let c:number=2
console.log(a/b)
console.log(c*b)
console.log(typeof(a))
let any_datatype:any;
any_datatype='Khushal Sharma';
let album:string | number; // union datatype
album='4'

const sum=(a:number ,b:string)=>{
   return a+b
}

interface userTyped{
   name:string,
   age:number,
   address:string,

}
let users:userTyped={
   name:'bruce',
   age:30,
   address:'USA'


}
console.warn(users)

function calc(a:number,b?:number){
   return b?a+b:a;
}
console.warn(calc(100))
console.warn(calc(100,120))


// classes in typescript

class App{
   constructor(){
       console.log("constructor called")
   }
   name="Khushal Sharma"
   get_name(){
      return this.name;
   }
}
let a1=new App();
console.log(a1.get_name())


// inheritance in typescript

class Parent{
   nm:string;
   setname(nm):void{
      this.nm=nm;

   }
}
class Child extends Parent{
   getName():string{
      return this.nm;
   }

}

let b1=new Child();
b1.setname("Apoorva Khandelwal");
console.log(b1.getName());
// namespace in typescript
/// <reference path="./utils.ts"/>
namespace Userutils{
   export class Users extends Parent{
      getName(){
         return this.name;
      }
   }
 
}
let u1=new Userutils.Users();
u1.setname("Apoorva Khandelwal")
console.warn(u1.getName())


// tsc --init : this command is used to create tsconfig.json file
//tsc name.ts -w this command is used to run typescript file