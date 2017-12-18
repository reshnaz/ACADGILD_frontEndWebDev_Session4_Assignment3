// Importing interface and functions
import { myInterface, function1, function2 } from "./interface";

// Creating object of interface
let somePerson:myInterface = {name:"Sam", hobby:"dancing", nationality:"Indian", age:16};

// Displaying messages in console.log using the defined functions.
function1(somePerson);
function2(somePerson);