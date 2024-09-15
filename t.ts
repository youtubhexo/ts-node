//泛型是指：在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定，这个在需要时才能确定类型的一种特定类型。

const pushArr=<T>(arr:T[],item:T):T[]=>{
    arr.push(item)
    return arr
}