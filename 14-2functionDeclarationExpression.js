//------------function Declaration------------
console.log(addDollarSign(100)) //$100 - applied hoisting

function addDollarSign(value){
    return '$' + value;
}


//------------function Expression------------
const addPlusSign = function(value){
    return '+' + value;
}
console.log(addPlusSign(200))//+200 - doesn't work hoisting


//------------ arrow function ---------------
const addMinusSign = (value) => '-' + value 
console.log(addMinusSign(300)) //-300


