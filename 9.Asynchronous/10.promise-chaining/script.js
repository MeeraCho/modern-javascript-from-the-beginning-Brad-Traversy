const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    if(!error){
      resolve({ name: 'John', age: 30 });
    } else {
      reject('Error: something went wrong')
    }
  }, 1000);
})

getUser
  .then((user) => {
    console.log(user); //{name: 'John', age: 30}
    return user.name;
  })
  .then((name) => {
    console.log(name); //John
    return name.length;
  })
  .then((nameLength) => {
    console.log(nameLength); //4
  })
  .catch((error) => {
    console.log(error);
    return 123;
  })
  .then((x)=>console.log('This will run no matter what', x))


