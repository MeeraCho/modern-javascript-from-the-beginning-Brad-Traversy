//----------- high order array methods
//functions that operate on other functions, either by receiving them as arguments or by returning them. 
//map, filter, forEach, reduce, some, every, flat, flatMap, find, sort, 

const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// see any methods and property related to the array
console.log(socials.__proto__);


//----------- forEach() syntax -----------
//socials.forEach(//callback function)
//socials.forEach(function(){})
socials.forEach(function(social){
    console.log(social);
})

socials.forEach((social) => console.log(social))


//----------- forEach() parameters -----------
socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr))


//----------- passing named function -----------
function logSocials(social){
    console.log(social);
}

socials.forEach(logSocials);


//----------- an array of objects -----------
const socialObjs = [
    {name: 'Twitter', url: 'https://twitter.com'},
    {name: 'Facebook', url: 'https://facebook.com'},
    {name: 'LinkedIn', url: 'https://linkedin.com'},
    {name: 'Instagram', url: 'https://instagram.com'},
]

socialObjs.forEach((item) => console.log(item.url));










