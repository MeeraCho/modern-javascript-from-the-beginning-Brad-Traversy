// key, value pairs but key could be anything like string, even array, or object  

const myMap = new Map();
myMap.set('name', 'John');
myMap.set(1, 'blue');
myMap.set(2, 'red');

console.log(myMap.get('name')); //John
console.log(myMap.get(1)); // blue
console.log(myMap.get(2)); // red

console.log(myMap.size); // 3 

console.log(myMap.has(1)); // true
console.log(myMap.has(2)); // true 

myMap.delete(2);

console.log(myMap); // Map(2) {'name' => 'John', 1 => 'blue'}

// forEach 
const peopleMap = new Map();
peopleMap.set('brad', {phone: '555-555-5555', email: 'brad@gmail.com'});
peopleMap.set('jack', {phone: '555-555-5555', email: 'jack@gmail.com'});
peopleMap.set('jill', {phone: '555-555-5555', email: 'jill@gmail.com'});

peopleMap.forEach((person) => console.log(person.email))
console.log(peopleMap.keys()); // MapIterator {'brad', 'jack', 'jill'}
console.log(peopleMap.values()); //
console.log(peopleMap.entries());

const iterator = peopleMap.values();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const peopleArray = Array.from(peopleMap);
console.log(peopleArray);

