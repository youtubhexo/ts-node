//interface


//1、interface 的基本用法

interface publicThings{
    one:string,
    two:string,
    [key:string]:any
}

let myMsg: publicThings = {
    one: "1",
    two: "2",

  
  }

//2、interface 中使用extends


 interface ai extends publicThings{
     three:string
 }

//3、绕开interface ts的类型检查 (类型断言、索引签名)


let myMsg2: publicThings = {
    one: "1",
    two: "2",
    fourt:"4"

  } 

//4、接口中的高阶用法（函数定义和索引定义）

interface func{
    (a:string,b:string):string
}

let add10:func=(a,b)=>a+b



interface indexDemo{
    [index:number]:string
}

const indexDemo2:indexDemo={0:"1",1:"2",2:"3"}
const indexDemo3:indexDemo=["hello","world"]



