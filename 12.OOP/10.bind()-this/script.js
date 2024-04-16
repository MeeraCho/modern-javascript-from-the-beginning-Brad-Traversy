// //----------------example 1------------(reference: ChatGPT3.5)
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
// }

// function fullName() {
//   console.log(this.firstName + ' ' + this.lastName);
// }

// const boundFunction = fullName.bind(person);
// boundFunction(); // John Doe


// //----------------example 2--------------------(reference: bingChat)
// const person2 = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// };

// const member = {
//   firstName: "Hege",
//   lastName: "Nilsen"
// };

// // Bind the `fullname` method to the `member` object
// let fullName2 = person2.fullName.bind(member);

// // Now `fullName` refers to the method with `this` set to `member`
// console.log(fullName2()); // Output: "Hege Nilsen"


// //----------------as a callback----------------(reference: bingChat)
// const person4 = {
//   firstName: "Jack",
//   lastName: "Black",
//   display: function () {
//     console.log(this.firstName + " " + this.lastName);
//   }
// };

// // This will display undefined after 3 seconds
// setTimeout(person4.display, 3000);

// // Bind `person.display` to `person`
// let display = person4.display.bind(person4);

// // Now it will correctly display the person's name after 3 seconds
// setTimeout(display, 3000);


// //----------------as a callback in the same Class---------------(ref: lesson)
// class App {
//   constructor() {
//     this.serverName = 'localhost'; 
    
//     document.querySelector('button').addEventListener('click', this.getServerName.bind(this));
//   }

//   getServerName() {
//     console.log(this.serverName); //localhost - after click button 
//   }
// }

// const app = new App(); 


//------------------Parameters-----------------------
// bind(thisArg)
// bind(thisArg, arg1)
// bind(thisArg, arg1, arg2)
// bind(thisArg, arg1, arg2, /* …, */ argN)

function log(...args) {
  console.log(this, ...args)
}

const boundLog = log.bind("this value", 1, 2);
boundLog(); // String {'this value'} 1 2 

const boundLog2 = boundLog.bind("new value", 3, 4);
boundLog2(); // String {'this value'} 1 2 3 4 
boundLog2(5, 6); // String {'this value'} 1 2 3 4 5 6


//------------------use strict mode-----------------------
"use strict"; // prevent `this` from being boxed into the wrapper object

function log(...args) {
  console.log(this, ...args)
}

const boundLog3 = log.bind("this value", 1, 2);
boundLog3(); // String {'this value'} 1 2 

const boundLog4 = boundLog.bind("new value", 3, 4);
boundLog4(); // String {'this value'} 1 2 3 4 
boundLog4(5, 6); // String {'this value'} 1 2 3 4 5 6