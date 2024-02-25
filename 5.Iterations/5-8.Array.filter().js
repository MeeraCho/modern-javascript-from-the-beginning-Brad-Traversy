//high order array method
//similar to forEach, but return a new array based on the function that returns true

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// make a variable to get the result
const evennumbers = numbers.filter(number => number % 2 === 0);
console.log(evennumbers); // [2, 4, 6, 8, 10]


//Same with forEach
let evennumbers1 = []; 
numbers.forEach((number) => 
    {if (number % 2 === 0) {
        evennumbers1.push(number)
    }
});
console.log(evennumbers1) // [2, 4, 6, 8, 10]


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

//Get only retail companies 
const retailCompanies = companies.filter((company) => company.category === "Retail");
console.log(retailCompanies); //(3) [{…}, {…}, {…}]

//Get companies open 1980 ~ 2005
const earlyCompanies = companies.filter((company) => company.start >= 1980 && company.end <= 2005);
console.log(earlyCompanies); //(3) [{…}, {…}, {…}]

//Get companies that lasted 10 years or more 
const longCompanies = companies.filter((company) => company.end - company.start >= 10 )
console.log(longCompanies); //(5) [{…}, {…}, {…}, {…}, {…}]