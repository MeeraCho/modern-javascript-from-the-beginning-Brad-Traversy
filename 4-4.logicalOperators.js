console.log( 10 > 20 && 30 > 15); //false

//Logical Operators

console.log( 10 > 20 && 30 > 15 ); //false
console.log( 10 < 20 && 30 > 15 && 40 > 30 ); //true
console.log( 10 > 20 || 30 > 15 ); //true

// && - will return first falsy value or the last value
let a;
a = 10 && 20; //20
a = 10 && 20 && 30; //30 
a = 10 && 0 && 30; //0 - 처음 나오는 falsy value가 프린트 됨 
a = 10 && NaN && 0 && 30; // NaN - 처음 나오는 falsy value가 프린트 됨 

console.log(a);

const posts = [];
console.log(posts[0]); //undefine
posts.length > 0 && console.log(posts[0]); // 이제야 아무 것도 안뜸 


// || - will return the first truthy value or the last value
let b;
b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;
console.log(b);

// ?? - Returns the right side operand when the left is null or undefined 
let c; 
c = 10 ?? 20; //10 - 기본은 왼쪽에 있는 값 리턴 
c = null ?? 20; //20 -null이 있으니 오른쪽에 있는 값 리턴 
c = undefined ?? 30; //30 

console.log(c);

