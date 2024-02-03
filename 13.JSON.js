//JSON - JavaScript Object Notation - storing data with simple readable format 
//APIs - send and receive data from and to server
//XML - Extensible Markup Language

const posts = [
    {
        id :1,
        title: 'Post One',
        body: 'This is the body',
    },
    {
        id :2,
        title: 'Post Two',
        body: 'This is the head',
    }
];

//object -> JSON string
const str = JSON.stringify(posts); //{"id":1,"title":"Post One","body":"This is the body"}
console.log(str.id); //undefined - you need to parse it first

//Parse JSON. JSON string -> Object 
const obj = JSON.parse(str); //{id: 1, title: 'Post One', body: 'This is the body'}

//access a specific property, first you need to parse it
console.log(obj[0].id); // 1











