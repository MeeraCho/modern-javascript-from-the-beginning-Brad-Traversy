// Sealing - Prevents properties from being added or removed. Can still be changed.

// Freezing - Prevents properties from being added, removed or changed

//-----------------seal()----------------------------
const rectObj = {
  name: 'Rectangle 1',
  width: 10,
  height: 10
}

Object.seal(rectObj);

let descriptors = Object.getOwnPropertyDescriptors(rectObj);
// console.log(descriptors);


// add new property - doesn't work
rectObj.color = 'red';
// delete property - doesn't work
delete rectObj.name;
// change property - work
rectObj.width = '20';

//-----------------object isSealed()-----------------------
console.log('rectObj is sealed?', Object.isSealed(rectObj)); //true



//-----------------freeze()----------------------------
const circleObj = {
  name: 'Circle 1',
  radius: 10,
}

Object.freeze(circleObj)
descriptors = Object.getOwnPropertyDescriptors(circleObj);

circleObj.color = 'blue';
delete circleObj.name; 
circleObj.name = 'New Circle';

// console.log(descriptors);
console.log(circleObj);

//-----------------object isFrozon()?-----------------------
console.log('circleObj is frozen?', Object.isSealed(circleObj)); //true
