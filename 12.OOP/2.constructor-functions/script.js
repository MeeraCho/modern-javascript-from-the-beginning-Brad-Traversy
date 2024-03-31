//-------------Constructor function----------
// Convention: first letter uppercase 


const now = new Date(); 
// new: initializing a constructor function
  // 1. A new empty object is created
  // 2. The constructor function is called with the arguments that we passed in.
  // 3. The 'this' keyword is set to the new empty object.
  // 4. The new object is returned from the constructor functions.
// Date(): constructor function
// now: hold Date() object


function Box(){
  return this; 
}

//instantiate a new Rectangle object
const box = Box() //undefined
const box1 = new Box() //Rectangle {}


//-----------Constructor function Instances--------
function Rectangle(name, width, height){
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function(){
    return this.height * this.width;
  }
}
const rect1 = new Rectangle('Rectangle 1', 10, 10); 
const rect2 = new Rectangle('Rectangle 2', 30, 20); 
const rect3 = new Rectangle('Rectangle 3', 10, 20); 

console.log(rect1.name, rect1.area()); //Rectangle 1 100
console.log(rect2.name, rect2.area()); //Rectangle 2 600
console.log(rect3.name, rect3.area()); //Rectangle 3 200


//-------------- properties and operators---------------
console.log(rect1.constructor);
// ƒ Rectangle(name, width, height){
//   this.name = name;
//   this.width = width;
//   this.height = height;
//   this.area = function(){
//     return this.height * this.width;
//   }
// }


// operator 
console.log(rect2 instanceof Rectangle); //true 
