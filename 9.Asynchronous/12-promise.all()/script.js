function getData(endpoint){
  return new Promise((resolve, reject) => {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function(){
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Something went wrong');
        }
      }
    };

    setTimeout(()=>{
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000); //1000 ~ 4000
  });
}

const moviesPromise = getData('./movies.json');
const actorsPromise = getData('./actors.json');
const directorPromise = getData('./directors.json');
//moviesPromise.then((m) => console.log(m)); //(4) [{…}, {…}, {…}, {…}]

//어느 promise나 promise.all에 추가 가능 
const dummyPromise = new Promise((resolve, reject) => {
  resolve('Hello World');
})

Promise.all([moviesPromise, actorsPromise, directorPromise, dummyPromise])
  .then((data) => {
    console.log(data);
  })
  .catch((error)=>console.log(error));


