//Truthy
// true, 1, any string, '0', ' ', 'false', 
// []empty array, {}empty object, function(){}(empty function) 

const email = 'test@test.com';

if (email) {
    console.log('You passed in an email')
}
console.log(Boolean(email)); // true


//Falsy Values
// false, 0, "" or ''(Empty String), null, undefined, NaN(Not a number)
const x = 0;

if (x) {
    console.assertlog('This is truthy');
} else {
    console.log('This is falsy')
}

console.log(Boolean(x)); 


// Truthy and falsy caveats
let children = 0; //Please enter number of children
if (children) {
    console.log(`you have ${children} children`);
} else {
    console.log(`Please enter number of children`);
}


children = 0; //you have 0 children
if (children !== undefined) {
    console.log(`you have ${children} children`);
} else {
    console.log(`Please enter number of children`);
}


children = 0; //you have 0 children
if (!isNaN(children)) {
    console.log(`you have ${children} children`);
} else {
    console.log(`Please enter number of children`);
}


//Checking for empty arrays 
let posts = ['Post One', 'Post Two']; //List Posts

if (posts) {
    console.log('List Posts');
} else {
    console.log('No Posts to List');
}


posts = []; //List Posts - 빈 어레이인데 No posts to list로 나오지 않음

if (posts) {
    console.log('List Posts');
} else {
    console.log('No Posts to List');
}


posts = []; //No Posts to List

if (posts.length > 0) {
    console.log('List Posts');
} else {
    console.log('No Posts to List');
}


// Checking for empty objects
let user = {}; // List User - 아무 것도 없는뎅 

if (user) {
    console.log('List User');
} else {
    console.log('No User');
}


user = {}; // No User - array of object key를 체크 
if (Object.keys(user).length > 0) {
    console.log('List User');
} else {
    console.log('No User');
}


// Loose Equality == 
console.log(false == 0); //true
console.log('' == 0); //true
console.log(null == undefined); //true

console.log(false === 0); //false
console.log('' === 0); //false
console.log(null === undefined); //false




