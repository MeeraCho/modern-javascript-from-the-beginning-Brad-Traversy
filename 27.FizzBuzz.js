// FizzBuzz Challenge 

for (let i = 1; i <= 30; i++){
    if (i % 3 === 0 ){
        if (i % 5 === 0 ) {
            console.log('FizzBuzz');
        } else {
            console.log('Fizz');
        }
    } else if (i % 5 === 0 ){
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

for (let i = 1; i <= 30; i++){
    if (i % 3 === 0 && i % 5 === 0 ){
        console.log('FizzBuzz');
    }else if (i % 3 === 0){
        console.log('Fizz');
    }else if (i % 5 === 0 ){
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

i = 1;
while( i <= 30){
    if (i % 3 === 0 && i % 5 === 0 ){
        console.log('FizzBuzz');
    }else if (i % 3 === 0){
        console.log('Fizz');
    }else if (i % 5 === 0 ){
        console.log('Buzz');
    } else {
        console.log(i);
    }
    i++;
}


