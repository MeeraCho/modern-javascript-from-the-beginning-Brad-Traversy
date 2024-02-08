//global scope and function scope
//var is global except function scope 


const x = 100;
const foo = 1;
var bar = 2; //window object에 저장이 됨 

if (true) {
    const y = 200;
    console.log(x + y);
}
// console.log(x + y); y is not defined

for (let i = 0; i <= 10; i++){
    console.log(i);
}
//console.log(i)  i is not defined

if (true) {
    const a = 500;
    let b = 600;
    var c = 700;
}
console.log(c); //700

function run() {
    var d = 100;
}
// console.log(d); // d is not defined



// ************** Nested Scopes ***************
function first(){
    const x = 100;
    
    function second(){
        const y = 2;
        console.log(x + y);
    }
    second();

}
first();


if (true){
    const x = 100;

    if (x === 100){
        const y = 200;
        console.log(x + y);
    }

    //console.log(y); y is not defined
}
