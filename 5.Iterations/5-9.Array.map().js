//  return a new modified array 
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers); //(5) [2, 4, 6, 8, 10]

// Same with forEach
let newNumbers = []
numbers.forEach(number => {
    newNumbers.push(number * 2)
})
console.log(newNumbers); //(5) [2, 4, 6, 8, 10]


//-------------------Challenge------------------------
const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end:2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end:2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end:2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end:2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end:2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end:2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end:1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end:2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end:1989 },
];

// Crate an array of company name only
const companyNames = companies.map(company => company.name);
console.log(companyNames) //(9) ['Company One', 'Company Two', 'Company Three', 'Company Four', 'Company Five', 'Company Six', 'Company Seven', 'Company Eight', 'Company Nine']

// Create an array with just company and category
const companyInfo = companies.map(company => {
    return {
        name: company.name,
        category: company.category
    }
});
console.log(companyInfo)
//(9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0:{name: 'Company One', category: 'Finance'}
// 1:{name: 'Company Two', category: 'Retail'}
// 2:{name: 'Company Three', category: 'Auto'}
// 3:{name: 'Company Four', category: 'Retail'}
// 4:{name: 'Company Five', category: 'Technology'}
// 5:{name: 'Company Six', category: 'Finance'}
// 6:{name: 'Company Seven', category: 'Auto'}
// 7:{name: 'Company Eight', category: 'Technology'}
// 8:{name: 'Company Nine', category: 'Retail'}



// Create an array of the length of each company in years

const companyYears = companies.map(company => {
    return {
        name: company.name,
        years: company.end - company.start + ' years'
    }
});
console.log(companyYears);
// (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0:{name: 'Company One', years: '23 years'}
// 1:{name: 'Company Two', years: '16 years'}
// 2:{name: 'Company Three', years: '8 years'}
// 3:{name: 'Company Four', years: '21 years'}
// 4:{name: 'Company Five', years: '5 years'}
// 5:{name: 'Company Six', years: '23 years'}
// 6:{name: 'Company Seven', years: '10 years'}
// 7:{name: 'Company Eight', years: '5 years'}
// 8:{name: 'Company Nine', years: '8 years'}



//-------------------Chain map method------------------------
//short version
const squareAndDouble = numbers
    .map((number) => Math.sqrt(number))
    .map((sqrt) => sqrt * 2)
console.log(squareAndDouble);

//long version 
const squareAndDouble2 = numbers
    .map(function(number){
        return Math.sqrt(number);
    })
    .map(function(sqrt){
        return sqrt * 2;
    })
console.log(squareAndDouble2);


//-------------------Chaining different method------------------------
const evenDouble = numbers
    .filter((number) => number % 2 === 0)
    .map((number) => number * 2)
console.log(evenDouble); //(2) [4, 8]

