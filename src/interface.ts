// This is our interface.
export interface myInterface{
    name: string;
    hobby: string;
    nationality: string;
    age: number;
}

//Our first function.
export function function1(person:myInterface){
    console.log(`My name is ${person.name} and my hobby is ${person.hobby}.`)
}

//Our second function.
export function function2(person:myInterface){
    console.log(`My nationality is ${person.nationality} and my age is ${person.age}.`)
}
