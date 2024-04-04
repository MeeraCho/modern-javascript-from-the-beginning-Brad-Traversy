class Rectangle {
  constructor(name, width, height){
    this.name = name;
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height)
  }

  isSquare() {
    return this.width === this.height;
  }

  logArea(){
    console.log('Rectangle Area: ' + this.area());
  }
}

//instantiate the object 
const square = new Rectangle('Square', 20, 20); 

console.log(square.area()); //400
console.log(square.perimeter()); //80
console.log(square.isSquare()); //true
console.log(square.logArea()); //Rectangle Area: 400
console.log(square); // area, perimeter, isSquare, logArea 함수들 Prototype 안에 추가됨 
console.log(Object.getPrototypeOf(square)); //{area: ƒ, perimeter: ƒ, isSquare: ƒ, logArea: ƒ}


