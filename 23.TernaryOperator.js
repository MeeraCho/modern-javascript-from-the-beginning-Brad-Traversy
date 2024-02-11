const age = 19;

// if 
if (age >= 18){
    console.log('You can vote!');
} else {
    console.log('You can not vote!');
}

// Ternary Operator 
age > 18 ? console.log('You can vote!') : console.log('You can not vote!');

// Assigning a conditional value to a variable 
const canVote = age >= 18? true: false;
const canVote2 = age >= 18? 'You can vote!': 'You can not vote';

console.log(canVote2);
// if - Multiple statement
const auth = false;
let redirect;

if (auth){
    alert('Welcome to the dashboard')
    redirect = '/dashboard';
} else {
    alert('Access Denied');
    redirect = '/login';
}

console.log(redirect);


// ternary - Multiple statement - using comma
redirect = auth ? (alert('Welcome to the dashboard'), '/dashboard') : (alert('Access Denied'), '/login');
console.log(redirect);


// empty false 
auth ? console.log('Welcome to the dashboard'): null;

auth && console.log('Welcome to the dashboard');
