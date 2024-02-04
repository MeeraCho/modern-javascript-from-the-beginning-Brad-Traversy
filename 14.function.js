let result;

//defining or declaring function
function sayHello(){
    console.log('Hello World');
}

// invoking or calling function
sayHello();


function add( num1, num2) {
    return num1 + num2;
}

function subtract( num1, num2 ){
    return num1 - num2;
}

result = add( 1, 2 ); // 3
result = subtract(10, 2); // 8 
console.log(result, subtract(10, 2)); 


// ------------ Parameters & arguments -------------
function registerUser(user) {
    if (!user) {
        user = 'Bot';
    }
    return user + ' is registered';
}

function registerUser2(user = 'Bot') {
    return user + ' is registered';
}

console.log(registerUser()); // Bot 
console.log(registerUser('John')); // John is registered


// ****Rest Params ****
function sum(...numbers){
    let total = 0;

    for (const num of numbers){
        total += num;
    }

    return total;
}

console.log(sum(1, 2, 3, 4)) // 10


// ***** Objects as params *****
function loginUser(user){
    return `The user ${user.name} with the id of ${user.id} is logged in.`
}

const user = {
    id: 1,
    name: 'John',
}

console.log(loginUser(user)); //object 통째로 통과 시키면 함수안에서 property 접근  
// The user John with the id of 1 is logged in.
console.log(
    loginUser({
        id: 2, 
        name: 'Sara',
    })
) //The user Sara with the id of 2 is logged in.


//******* Arrays as Params *****
function getRandom(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];
    console.log(item)
} 
getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 1~10까지 여러 숫자 나옴

//get the same result above 
//argument에 []를 없애고, param에 spread operator를 넣는다 
function getRandom2(...arr){
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];
    console.log(item)
}
getRandom2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 1~10까지 여러 숫자 나옴




