//------------Break-----------
for (let i = 0; i < 10; i++){
    if(i === 7){
        console.log('Breaking...');
        break;
    }

    console.log(i);
}
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// Breaking...


//------------Continue-----------
// Skip the rest of the code in a current iteration 
// then continue to the next iteration. 
for (let i = 0; i<=5; i++){
    if (i === 3){
        console.log('Skipping 3')  
        continue  
    }

    console.log(i)
}
// 0
// 1
// 2
// Skipping 3 - i가 3인 경우 넘어감 
// 4
// 5


