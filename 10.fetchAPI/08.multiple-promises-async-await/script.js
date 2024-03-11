
//------doesn't use this xhr code often in real life
function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Error: Something went wrong');
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

// getData('./movies.json')
//   .then((movies) => {
//     console.log(movies);
//     return getData('./actors.json');
//   })
//   .then((actors) => {
//     console.log(actors);
//     return getData('./directors.json');
//   })
//   .then((directors) => {
//     console.log(directors);
//   })
//   .catch((error) => console.log(error));

async function getAllData(){
  const movies = await getData('./movies.json');
  const actors = await getData('./movies.json');
  const directors = await getData('./movies.json');
  console.log(movies, actors, directors);
  console.log('This is in the async function');
}



//--------------async fetch() function-----------------------
async function getAllDataWithFetch(){
  const moviesResponse = await fetch('./movies.json');
  const movies = await moviesResponse.json();

  const actoresResponse = await fetch('./actors.json');
  const actors = await actoresResponse.json();

  const directorsResponse = await fetch('./directors.json');
  const directors = await directorsResponse.json();

  console.log(movies, actors, directors);
}


//-----------PromiseAll + async, await------------------
async function getAllDataPromiseAll() {
  const [moviesRes, actorsRes, directorsRes] = await Promise.all([
    fetch('./movies.json'),
    fetch('./actors.json'),
    fetch('./directors.json'),
  ]);

  const movies = await moviesRes.json();
  const actors = await actorsRes.json();
  const directors = await directorsRes.json();

  console.log(movies, actors, directors);
}


//-----------PromiseAll + .then------------------

async function getAllDataPromiseAll2() {
  const [movies, actors, directors] = await Promise.all([
    fetch('./movies.json').then(res => res.json()),
    fetch('./actors.json').then(res => res.json()),
    fetch('./directors.json').then(res => res.json()),
  ]);

  console.log(movies, actors, directors);
}


// getAllData();
// getAllDataWithFetch();
// getAllDataPromiseAll();
getAllDataPromiseAll2();

// console.log('This is global scope');


