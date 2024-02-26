const person = {name: "Mira", friends: ["Joey"]}
console.log({...person}); //shallow copy 
console.log(JSON.parse(JSON.stringify(person)));

person.name = "Alex";
person.friends.push("John")
console.log(person);

console.log("Foo %d", 100)

console.log(
    "This is %cMy stylish message",
    "color: yellow; font-style: italic; background-color: gray;padding: 2px",
);

console.log(
    "Multiple styles: %cred %corange",
    "color: red",
    "color: orange",
    "Additional unformatted message",
);

const people = [
    { name: "Mira", age: 40, programmer: true },
    { name: "Alex", age: 40, programmer: false },
    { name: "Sohdaam", age: 7, programmer: false },
    { name: "Jimin", age: 4, programmer: false },
]

console.table(people)

console.log("Outside Group")
console.group("My Family Group")
console.log("Mira")
console.log("Alex")
console.group("My Kids")
console.log("Sohdaam")
console.log("Jimin")
console.groupEnd()
console.groupEnd()

console.time("Time1")
for (let i = 0; i< 10; i++)
console.timeLog("Time1")
for (let i = 0; i< 10; i++)
console.timeEnd("Time1")

console.clear()

console.profile("Time1")
for (let i = 0; i< 10; i++)
console.timeStamp("Time1")
for (let i = 0; i< 10; i++)
console.profileEnd("Time1")

// console.time("answer time");
// alert("Click to continue");
// console.timeLog("answer time");
// alert("Do a bunch of other stuff…");
// console.timeEnd("answer time");

console.assert(false, "only false can be in the console")

console.count("Name1")
console.count("Name1")
console.count("Name1")
console.countReset("Name1")
console.count("Name1")

console.dir(document.body)
console.dirxml(document.body)


function main(){
    console.trace()
}

main()