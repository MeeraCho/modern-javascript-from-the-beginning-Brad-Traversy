//for(initialExpression; conditionExpression; incrementExpression)
//statement; 

for(let i = 0; i <= 10; i=i+2){ //i is block scopes
    console.log('Number ' + i);
}

for(let i = 0; i <= 10; i++){ 
    if (i === 7){
        console.log('7 is my lucky nunber');
    } else {
        console.log('Number ' + i);
    }
}


// ---------- Nest loops 
for (let i = 1; i <= 10; i++){
    console.log('Number ' + i);

    for (let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i * j}`)
    }
}

// ---------- Loop through an array
const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];
for (let i = 0; i < names.length; i++){

    if (i === 2){
        console.log(`${i + 1}. ${names[i]} is the best`);
    }else {
        console.log(`${i + 1}. ${names[i]}`);
    }
}





