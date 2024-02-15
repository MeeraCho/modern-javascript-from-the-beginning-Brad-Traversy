const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//long version - start from 0
const sum1 = numbers.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}, 0); //55

//long version - start from 100
const sum2 = numbers.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}, 100); //155

//short version
const sum3 = numbers.reduce((acc, curr)=> acc + curr, 0); // 55


//using for loop 
const sum4 = () => {
    let acc = 0;
    for (const cur of numbers){
        acc += cur
    }
    return acc;
}
console.log(sum4()); //55


//object - shopping cart
const cart = [
    { id: 1, name: 'Product 1', price: 130 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 175 },
]

const totalCart = cart.reduce((acc, cur)=> acc + cur.price, 0); //455
console.log(totalCart)



