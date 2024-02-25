//while Loop - unknown the number of times running the loop
let i = 0;
while( i <= 4 ){
    console.log('Number ' + i);
    i++;
}


// While Loop over arrays
let k = 0
const arr = [10, 20, 30, 40]
while (k < arr.length){
    console.log(arr[k])
    k++;
}

//Nesting while loops
let t = 1;
while(t <= 5){
    console.log('Number ' + t)

    let j = 1;
    while (j <= 5){
        console.log(`${t} * ${j} = ${t * j}`)
        j++;
    }
    t++;
}

// do-while 
// block of code run at least once 
let o = 1;
do {
    console.log('Number ' + o);
    o++;
} while (o <= 5)


