// Global and Local Scope (Functional scope)

var myName = "Linda"; // Global scope, can be used inside and outside the function

function login(arg) {
    return myName = arg;
}

login();

function myFunction() {
    var carName = "Volvo"; //Local scope, code can only be used inside the function
    console.log(carName);
}

// Callback functions

var enterSite = function () {
    console.log("Hello you entered the website");
};

function loginToSite(arg) {
    arg();
}

loginToSite(enterSite);

// Assigning a function to a variable

var login = function (name) {
    console.log("You may login: ", name);
};

login("Lisa");

// A function inside an object

var user = {
    name: "Linda",
    occupation: "student",
    login: function (name) {
        console.log("Welcome back", name);
    }
};
console.log("My user object ", user);
console.log("Name: ", user.name);

user.login("Linda");

// Window object, you see all the code for browser window

// console.dir(window);


// Let and Const

// Const is a constant, you can only declare one variable with const
// const count = 1;
// count = 99;
// count = count + 99;

// Let

let count = 1;
count = 2;
count = count + 1;
count += + 1;

console.log("My count is equal to: ", count);

// Block scope
// {
//     let pet = "dog";
//     pet = "new doggy";

//     const someName = "Hesham";
//     someName = "Linda";
//     function bark() {
//         console.log(pet);
//     }
//     bark();
// }

const profile = {
    name: "Mats",
    age: "28",
    job: "Doctor",
};

console.log("The log: ", profile);
console.dir(profile);

// String using backticks ` `

const sentence = `One
Two
Three`;
console.log(sentence);

const sentenceTwo = "one \n two \n three";
console.log(sentenceTwo);

// Data types and truthy and falsy value === primitive data types

var dataTypes = [];
console.log(typeof dataTypes); // object

// every value/variable/data type = a boolean

const pet = {
    type: "dog",
    breed: "labrador",
    age: 3,
};

console.log(pet['type']);
console.log(pet.type);

// DOM = Document Object Model

// in browser console:
// var header = document.querySelector(".header")
// header = Will show the div with class header in HTML file
// header = Will show the div with class header in HTML file
