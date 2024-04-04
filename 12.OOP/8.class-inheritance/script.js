// Parent class
class Shape {
  constructor(name) {
    this.name = name;
  }

  logName(){
    console.log(`Shape Name: ${this.name}`);
  }
}

// Sub class
class Rectangle extends Shape {
  constructor(name, width, height){
    super(name);
    this.height = height;
    this.width = width;
  }
}

class Circle extends Shape {
  constructor(name, radius){
    super(name);
    this.radius = radius;
  }

  logName() {
    console.log('Circle Name: ' + this.name);
  }
}

// Instantiate object
const rect = new Rectangle('Rect 1', 20, 20);
const cir = new Circle('Cir 1', 10);

console.log(rect);
console.log(cir);

console.log(rect instanceof Rectangle); //true
console.log(rect instanceof Shape); //true


rect.logName();
cir.logName();