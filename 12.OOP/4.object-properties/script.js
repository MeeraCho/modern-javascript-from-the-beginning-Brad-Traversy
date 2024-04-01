function Rectangle(name, width, height){
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle('Rectangle 1', 20, 20);
const rect2 = new Rectangle('Rectangle 2', 20, 30);

console.log(rect1.name, rect2.width); //Rectangle 1 20

//--------bracket notation--------
console.log(rect1['width']); //20

//--------add new property------- 
// add property 
rect1.color = 'red'; 
console.log(rect1); //Rectangle {name: 'Rectangle 1', width: 20, height: 20, color: 'red', area: ƒ} 

// add function 
// if this keyword is used here, it become window object. so don't use 'this' here
rect2.perimeter = () => 2 * (rect2.width + rect2.height);
console.log(rect2.perimeter()); //100


//----------delete property ---------
delete rect2.perimeter;


//----------check for property -------
console.log(rect2.hasOwnProperty('color')); //false
console.log(rect1.hasOwnProperty('color')); //true


//----------- get Keys --------------
console.log(Object.keys(rect1)); // ['name', 'width', 'height', 'area', 'color']


//----------- get Values --------------
console.log(Object.values(rect2)); //(4) ['Rectangle 2', 20, 30, ƒ]


//----------- get entries --------------
console.log(Object.entries(rect1));
// (5) [Array(2), Array(2), Array(2), Array(2), Array(2)]
// 0:(2) ['name', 'Rectangle 1']
// 1:(2) ['width', 20]
// 2:(2) ['height', 20]
// 3:(2) ['area', ƒ]
// 4:(2) ['color', 'red']

for (let [key, value] of Object.entries(rect1)) {
  console.log(`${key} - ${value}`)
}
// name - Rectangle 1
// width - 20
// height - 20
// area - function () {
//     return this.width * this.height;
//   }
// color - red


for (let [key, value] of Object.entries(rect1)) {
  if (typeof value !== 'function') {
    console.log(`${key} - ${value}`)
  }
}
// (5) [Array(2), Array(2), Array(2), Array(2), Array(2)]
// name - Rectangle 1
// width - 20
// height - 20
// color - red

