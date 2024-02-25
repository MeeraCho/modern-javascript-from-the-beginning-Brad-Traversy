// IIFE- define, declare and invoke a Function at the same time
// use it to avoid global scope pollution. - 이미 variable define 했으면 다른 파일에서 같은 variable 이름으로 정의 할 수 없다


// 다른 파일에도 user가 정의되어 있으면 에러가 남. 이런 경우 IIFE 쓰면 편함 
const user = 'Brad'; 

// Syntax 
// (function(){})

// define + invoke function 
// 방법 1: (function(){})();
// 방번 2: (()=>{})();

// function in IIFE
(function(){
    const user = 'John';
    console.log(user);

    //function
    const hello = () => console.log('Hello from the IIFE')
    hello();
})();

// with param
(function(name){
    console.log('Hello ' + name + ' from IIFE with param')
})('Alex');

// named function 
(function hello(name){
    console.log('Hello ' + name + ' with a named function');
})();

// hello('Jojo'); -Error: debugging을 위해 이름을 붙이지만 밖에서 부를 수 없음 


//----------------- Challenge ------------
(function(length, width){
    console.log( length * width);
})(10, 5); // 50

((length, width) => {
    console.log( length * width);
})(100, 50);


