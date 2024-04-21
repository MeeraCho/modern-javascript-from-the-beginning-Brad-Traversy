const sym = Symbol();
const sym1 = Symbol('foo');
const sym2 = Symbol('bar');

console.log(sym, sym1, sym2); //Symbol() Symbol(foo) Symbol(bar)
console.log(typeof sym); // symbol
console.log(sym.description); // undefined
console.log(sym1.description); // foo

// Symbols are unique 
console.log(Symbol('sym') === Symbol('sym')); //false

const user = {
  [Symbol('id')]: 1, 
  name: 'John',
  email: 'john@gmail.com'
};

console.log(user[Symbol('id')]);

//Symbols are NOT enumerable 
console.log(Object.keys(user));
console.log(Object.values(user));

for (let key in user) {
  console.log(key); 
}
