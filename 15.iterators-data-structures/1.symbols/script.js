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

// getOwnPropertySymbols
console.log(Object.getOwnPropertySymbols(user));

// Symbol.for()
const sym3 = Symbol.for('foo');
const sym4 = Symbol.for('foo');

console.log(sym3 === sym4); //trues
console.log(Symbol.keyFor(sym3)); // foo
console.log(Symbol.keyFor(sym1)); // undefined

console.log(sym1.toString()); //Symbol(foo)
console.log(sym3.toString()); //Symbol(foo)
console.log(sym.toString()); //Symbol()

console.log(sym1.valueOf()); // Symbol(foo)
console.log(sym3.valueOf()); // Symbol(foo)
console.log(sym.valueOf()); // Symbol()

console.log(Object.getOwnPropertyNames(Symbol)); //(18) ['length', 'name', 'prototype', 'for', 'keyFor', 'asyncIterator', 'hasInstance', 'isConcatSpreadable', 'iterator', 'match', 'matchAll', 'replace', 'search', 'species', 'split', 'toPrimitive', 'toStringTag', 'unscopables']