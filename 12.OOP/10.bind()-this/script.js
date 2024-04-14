//----------------example 1--------------------
const person = {
  firstName: 'John',
  lastName: 'Doe',
}

function fullName() {
  console.log(this.firstName + ' ' + this.lastName);
}

const boundFunction = fullName.bind(person);
boundFunction(); // John Doe


//----------------example 2--------------------
const person2 = {
  firstName: 'Jane',
  lastName: 'Doe',
  getFullName: function(){
    return this.firstName + " " + this.lastName
  }
}

const unboundGetFullName = person2.getFullName;
console.log(unboundGetFullName()); // undefined undefined 

const boundGetFullName = person2.getFullName.bind(person2);
console.log(boundGetFullName()); // Jane Doe 


//----------------example 3--------------------
class App {
  constructor() {
    this.serverName = 'localhost'; 
    
    document.querySelector('button').addEventListener('click', this.getServerName.bind(this));
  }

  getServerName() {
    console.log(this.serverName);
  }
}

const app = new App();

