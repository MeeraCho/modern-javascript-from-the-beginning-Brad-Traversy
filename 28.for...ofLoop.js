// cleaner way to loop through an array than for or while loop
// loop through iterable objects like arrays, strings, maps, sets
// Not object literals - 'for..in' cover object literals


// Loop through arrays
const items = ['book', 'table', 'chair', 'kite'];
const users = [
    {name: 'Brad'},
    {name: 'Kate'},
    {name: 'Steve'},
]

// ------- for vs for...of--------
// for loop
for(let i = 0; i < items.length; i++){
    console.log(items[i]);
} 

// for..of loop 
for (const item of items){
    console.log(item)
}

// ------- loop over object--------
for (const user of users){
    console.log(user.name)
}

// -------Loop over strings--------
const str = 'Hello world';
for(const letter of str){
    console.log(letter)
}

// -------Loop over Maps-------
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (const [key, value] of map){
    console.log(key, value);
}
//name John
//age 30
