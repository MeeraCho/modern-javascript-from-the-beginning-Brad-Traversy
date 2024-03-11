//---------catch uncaught error ---------
// try {
//   console.log(x)
// } catch(error){
//   console.log('Error: ' + error);
// }


//---------Throw our own error ---------
// function double(number) {
//   if (isNaN(number)){ //NaN: Not a Number
//     throw new Error(number + ' is not a number');
//   }
//   return number * 2;
// }

// try {
//   const y = double('Hello');
//   console.log(y);
// } catch(error){
//   console.log(error);
// }

//---------try, catch with Async and Await ---------
// const getUsers = async () => {
//   try {
//     //const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
//     const data = await response.json(); //return promise so put await

//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getUsers();



//---------try, catch with status error ---------
// const getUsers2 = async () => {
//   try {
//     const response = await fetch('http://httpstat.us/404')

//     if(!response.ok){
//       throw new Error('Request Failed');
//     }
    
//     const data = await response.text(); 

//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getUsers2();


//---------catch with outside function ---------
const getPosts = async () => {
  const response = await fetch('http://httpstat.us/404')

    if(!response.ok){
      throw new Error('Request Failed');
    }
    
    const data = await response.json(); 

    console.log(data);
};

getPosts().catch(error => console.log(error));
