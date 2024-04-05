// getter & setter with a class 

class Person {
  constructor(firstName, lastName){
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName(){
    return this.capitalize(this._firstName);
  }

  set firstName(value){
    this._firstName = this.capitalize(value);
  }

  get lastName(){
    return this.capitalize(this._lastName);
  }

  set lastName(value){
    this._lastName = this.capitalize(value);
  }

  get fullName(){
    return `${this.firstName} ${this.lastName}`
  }

  capitalize(value){
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}

const person1 = new Person('mira', 'cho');

// get value
console.log(person1._firstName); //mira - directly access to constructor - not recommended
console.log(person1.firstName);  //Mira - using getter 
console.log(person1.lastName);  //Cho - using getter 

// set value 
person1.firstName = 'alex'; 
person1.lastName = 'kim'; 
console.log(person1.firstName + ' ' + person1.lastName); //Alex Kim
console.log(person1); 

//get fullName
console.log(person1.fullName); // Alex Kim

