//类的定义（修饰符）与继承extends
  //public---公共的
  //protected----允许类内及继承的子类中使用
  //private----只允许类内使用


class Person{
    private name='AI赋能开发'  //默认public

    getName(){
        return this.name
    }
}

const person =new Person()
person.getName();

//苹果--》一类水果，这个苹果-》实例 香蕉苹果-》苹果

class man extends  Person{
   constructor(){
     super()
    }
    getName(): string {
        return super.getName()
    }
}



new man().getName()








//构造函数使用new时会自动执行

//类类型接口、接口继承类


interface FoodInterface{
    id:string;
}
class FoodClass implements FoodInterface{
    
  constructor(public id:string){
  }
}



