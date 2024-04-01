//-----------------Prototype---------------------
// a special object where additional methods and properties can be attached and shared across all instance of its contructor function. 


//----------Add Methods to Prototype: use Constructor--------------
function Rectangle(name, width, height){
  this.name = name;
  this.width = width;
  this.height = height;
}

Rectangle.prototype.area = function () {
    return this.width * this.height;
}

Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
}

Rectangle.prototype.isSquare = function () {
  return this.width === this.height;
}

Rectangle.prototype.changeName = function (newName) {
  return this.name = newName;
}

const rect = new Rectangle('Rect', 10, 10);
const rect2 = new Rectangle('Rect2', 20, 10);


console.log(rect.toString()) //[object Object]
console.log(Object.getPrototypeOf(rect)); //{area: ƒ, perimeter: ƒ, isSquare: ƒ, changeName: ƒ}


console.log(rect); //Rectangle {name: 'Rect', width: 10, height: 10}
console.log(rect.area()); // 100
console.log(rect.perimeter()); // 40
console.log(rect.isSquare()); // true
console.log(rect.changeName('newRect')); // newRect
console.log(rect.name); // newRect

console.log(rect2.area()); //200
console.log(rect2.perimeter()); // 60
console.log(rect2.isSquare()); // false
console.log(rect2.changeName('newRect2')); // newRect2
console.log(rect2.name); // newRect2



//---------Add Methods to Prototype: No constructor------------
// use object literal with Prototype and Object.create()
const rectanglePrototypes = {
  area: function () {
    return this.width * this.height;
  },
  perimeter: function () {
    return 2 * (this.width * this.height);
  }, 
  isSquare: function () {
    return this.width === this.height;
  },
}

function createRectangle(width, height) {
  return Object.create(rectanglePrototypes, {
    width: {
      value: width
    },
    height: {
      value: height,
    },
  })
}

const rect3 = createRectangle(30, 30) // new 쓰지 않음 
const rect4 = createRectangle(40, 40)

console.log(rect3); //{width: 30, height: 30} No Constructor
console.log(rect3.area()); //900
console.log(rect4); //{width: 30, height: 30} No Constructor
console.log(rect4.area()); //900





