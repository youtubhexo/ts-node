//1、普通函数

function add(a:number,b:number):number{
    return a+b
}



//2、函数重载

function add2(a:number,b:number):number;
function add2(a:string):string;

function  add2(a:any,b?:any){
   if(typeof a==='number' && typeof b==='number'){
       return a+b

   }
   if(typeof a==='string'){
       return a

   }
}



//3、箭头函数

let add3=(a:string,b:string):string=>{
    return  a+b;
}

//4、高阶用法


let add4:(a:number,b:number)=>number
=(a:number,b:number)=>{ return a+b}