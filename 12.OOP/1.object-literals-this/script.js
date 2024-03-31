//object literals
const rectangle1 = {
  name: 'Rectangle 1',
  width: 10,
  height: 10,
  area: function(){
    return this.width * this.height; //100
  },
}

const rectangle2 = {
  name: 'Rectangle 2',
  width: 10,
  height: 10,
  area: function(){
    return this.width * this.height; //100
  },
}

console.log(rectangle1.name);
console.log(rectangle1.area());


// this - global scope
function run(){
  console.log(this)
}

run();

console.log(this)