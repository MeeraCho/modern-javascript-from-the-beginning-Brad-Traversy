
//----------- basic promise -----------
// sync function promise 
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({name: 'John', age: 20}), 1000
  })
})

promise.then(data => console.log(data));


// async function promise 
async function getPromise() {
  const response = await promise;
  console.log(response);
}

getPromise();

//----------- sync fetch -----------
function getUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data));
}

//------async, await fetch -----------
async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
}

getUsers();

//------ arrow async function -----------
const getPosts = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
}



