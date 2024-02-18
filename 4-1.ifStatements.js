// if statements
if (true) {
    console.log ('This is true')
}

if (false) {
    console.log ('This is false')
}

// 
const x = 10;
const y = 5;

if (x > y ){
    console.log(`${x} is greater than ${y}`);
}

if (x === y ){
    console.log(`${x} is equal to ${y}`);
} else {
    console.log(`${x} is Not equal to ${y}`);
}

// Scopes 
if (x !== y){
    const z = 20;
    console.log(`${z} is 20`);
}
// console.log(z) //z is not defined


// Shorthand If
if (x >= y) console.log(`${x} is greater than or equal to ${y}`);
else console.log('This is false');


if (x >= y) 
    console.log(`${x} is greater than or equal to ${y}`),
        console.log('This is true');
else console.log('This is false');


// Time Variables
const d = new Date(10, 30, 2022, 9, 0, 0);
const hour = d.getHours();

// else if 
if( hour < 12){
    console.log('Good Morning');
} else if (hour < 18) {
    console.log('Good Afternoon');
} else {
    console.log('Good Night');
}


// Nested if 
if( hour < 12){
    console.log('Good Morning');

    if (hour === 6) {
        console.log('Wake Up! ');
    }

} else if (hour < 18) {
    console.log('Good Afternoon');
} else {
    console.log('Good Night');

    if (hour >= 20){
        console.log('zzzzz');
    }
}


// Multiple conditions
if ( hour >= 7 && hour < 15 ){
    console.log('It is work time');
}

if (hour === 6 || hour === 20){
    console.log('Brush your teeth');
}

