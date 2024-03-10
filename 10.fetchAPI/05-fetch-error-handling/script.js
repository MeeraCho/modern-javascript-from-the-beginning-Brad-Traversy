// ------ Fetch 200 ----------
// fetch('http://httpstat.us/200')
//   .then((res) => res)
//   .then(() => console.log('success') )


// ------ Fetch 404 ----------
// fetch('http://httpstat.us/404')
// .then((res) => res)
// .then(() => console.log('success')) //also success printed

// ------ Catch runs on a network error ----------
// fetch('http://hello123.net')
// .then((res) => res)
// .then(() => console.log('success'))
// .catch(error => console.log(error));


// ------ Test with response.ok ----------
// fetch('http://httpstat.us/404')
// .then((res) => {
//   if (!res.ok) {
//     throw new Error('Request Failed')
//   }
//   return res;
// })
// .then(() => console.log('success')) 
// .catch(error => console.log(error)); //catch error 


// ------ Test with specific code ----------
fetch('http://httpstat.us/500')
.then((res) => {
  if (res.status === 404) {
    throw new Error('Not Found');
  } else if (res.status === 500){
    throw new Error('Server Error');
  } else if (res.status === 200){
    throw new Error('Request Failed')
  }
  return res;
})
.then(() => console.log('success')) 
.catch(error => console.log(error));

