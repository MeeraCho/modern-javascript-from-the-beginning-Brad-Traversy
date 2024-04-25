const set = new Set([1, 2, 2, 3, 3, 4, 4, 4]);
console.log(set); // {1, 2, 3, 4}

set.add(5); // {1, 2, 3, 4, 5}

console.log(set.has(3)); // true
console.log(set.has(6)); // false

set.delete(5); //{1, 2, 3, 4}

const setArray = Array.from(set); 

for (let item of set){
  console.log(item);
}
// 1
// 2
// 3
// 4

//create iterator from a set 
const iterator = set.values();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

set.clear();

console.log(set);

