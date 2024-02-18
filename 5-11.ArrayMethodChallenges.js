//-----------challenge 1 ------------
const people = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@email.com',
        phone: '111-111-1111',
        age: 30,
    },
    {
        firstName: 'Jane',
        lastName: 'Poe',
        email: 'jane@email.com',
        phone: '222-111-1111',
        age: 25,
    },
    {
        firstName: 'Bob',
        lastName: 'Foe',
        email: 'bob@email.com',
        phone: '333-111-1111',
        age: 45,
    },
    {
        firstName: 'Sara',
        lastName: 'Soe',
        email: 'sara@email.com',
        phone: '444-111-1111',
        age: 19,
    },
    {
        firstName: 'Jose',
        lastName: 'Koe',
        email: 'jose@email.com',
        phone: '555-111-1111',
        age: 23,
    }
];

const youngPeople = people
    .filter((person)=>person.age <= 25)
    .map((person)=>({
        name: `${person.firstName} ${person.lastName}`,
        email: person.email
    })) //return objects ()=>({})
console.log(youngPeople);


//-----------challenge 2 ------------
const numbers = [2, -30, 50, 20, -12, -9, 7];
const positiveSum = numbers
    .filter(num => num > 0)
    .reduce((acc, cur) => acc + cur, 0);
console.log(positiveSum); //79


//-----------challenge 3 ------------
const words = ['coder', 'programmer', 'developer'];
const capitalizedWords = words.map((word)=>{
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase())
}) //['Coder', 'Programmer', 'Developer']

const capitalizedWords2 = words.map((word)=>{
    return word[0].toUpperCase() + word.slice(1, word.length)
}) //['Coder', 'Programmer', 'Developer']

console.log(capitalizedWords2);
