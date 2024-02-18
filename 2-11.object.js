let x;
const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main st',
        city: 'Boston',
        state: 'MA',
    },
    hobbies: ['music', 'sports'],
}; 


x = person.name; // John Doe
x = person['age']; //30
x = person.address.state; // MA
x = person.hobbies[0]; //music

// change values
person.name = 'Poe Doe';
person['isAdmin'] = false;

// delete properties
delete person.age; //No more age - {name: 'Poe Doe', isAdmin: false, address: {…}, hobbies: Array(2)}

// add properties 
person.hasChildren = true;

// this keyword, value = function 정의
person.greet = function(){ 
    console.log(`Hello, my name is ${this.name}`); 
} // greet: ƒ()

// call function in the object
person.greet(); // Hello, my name is Poe Doe



// --------Object Literals ---------
let todo = {}; 
todo = new Object(); // 위의 코드와 같음 

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = Object.keys(todo); // object에 있는 key들 보여줌.  ['id', 'name', 'completed']
x = todo.length; //undefined
x = Object.keys(todo).length; //3
x = Object.values(todo); // (3) [1, 'Buy Milk', false]
x = Object.entries(todo); //(3) [Array(2), Array(2), Array(2)] - make key value pair as an array 
                                // 0:(2) ['id', 1]
                                // 1:(2) ['name', 'Buy Milk']
                                // 2:(2) ['completed', false]

x = todo.hasOwnProperty('name'); //true

x = todo; 

// create own contructor for certain object
// const todo1 = new todo();

// nesting objects
const person1 = {
    address: {
        coords: {
            lat: 42.9384,
            lng: -71.3232,
        },
    },
};

x = person1.address.coords.lat; // 42.9384

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const obj3 = {obj1, obj2} //{obj1: {…}, obj2: {…}}
const obj4 = {...obj1, ...obj2} //{a: 1, b: 2, c: 3, d: 4} 
const obj5 = Object.assign({}, obj1, obj2) // before spread operator. {a: 1, b: 2, c: 3, d: 4}

const todo1 = [
    {id: 1, name: 'Buy Milk'},
    {id: 2, name: 'Pickup kids from school'},
    {id: 3, name: 'Take out trash'},
] //  [{…}, {…}, {…}]

x = todo1[0].name; //Buy Milk


//------------ Object Method ------------
todo = new Object({
    id : 1,
    name : 'Buy Milk',
    completed: false,
}); // 위의 코드와 같음 


x = Object.keys(todo); // object에 있는 key들 보여줌.  ['id', 'name', 'completed']
x = todo.length; //undefined
x = Object.keys(todo).length; //3
x = Object.values(todo); // (3) [1, 'Buy Milk', false]
x = Object.entries(todo); //(3) [Array(2), Array(2), Array(2)] - make key value pair as an array 
// 0:(2) ['id', 1]
// 1:(2) ['name', 'Buy Milk']
// 2:(2) ['completed', false]

x = todo.hasOwnProperty('name'); //true


//----------Destructuring and Naming ----------
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

// const person2 = { //same below
//     firstName: firstName,
//     lastName: lastName,
//     age: age,
// };

const person2 = {
    firstName,
    lastName,
    age,
};

const todo2 = {
    id: 1, 
    title: 'Take out trash',
    user: {
        name: 'John'
    }
}

//destructuring
// const { id } = todo2;
// const { id, title, user: {name} } = todo2;
// console.log(name);  //John

//rename
// const { id: todoId, title, user: {name} } = todo2; // id -> todoId
// console.log(todoId); // 1

// ---------- Destructure arrays & Rest operator -----
const numbers = [23, 67, 33, 49]
const [first, second, ...rest] = numbers; //numbers는 array name 
console.log(first, second); // 23, 67

// Rest Operator
console.log(first, second, rest); // 23 67 (2) [33, 49]



// ------------- Challenge ----------
const library = [
    {   id: 1, 
        title: "Live now",
        author: "Mira",
        status: {
            own : true,
            reading : false,
            read : false,
        }
    },
    {   id: 2, 
        title: "Live yesterday",
        author: "Ohen",
        status: {
            own : true,
            reading : false,
            read : false,
        }
    },
    {   id: 3, 
        title: "Live tomorrow",
        author: "Kio",
        status: {
            own : true,
            reading : false,
            read : false,
        }
    },

] 

// change all read property to true
for (let i = 0; i < library.length; i++){
    library[i].status.read = true;
}

// destructuring first book title 
const { title: firstBook } = library[0]; // Live now
console.log(firstBook)

//turn into library object into a JSON string
const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);








