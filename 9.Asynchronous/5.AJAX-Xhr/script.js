const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/meeracho/repos');

// readyState has 5 possible values
// - 0: request not initialized
// - 1: server connection established
// - 2: request received
// - 3: procession request
// - 4: request finished and response is ready
xhr.onreadystatechange = function(){
  // console.log(this.readyState)
  // console.log(this.status)
  if (this.readyState === 4 && this.status === 200){
    const data = JSON.parse(this.responseText);

    data.forEach(repo => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
      document.querySelector('#results').appendChild(li);
    })
    }
}

xhr.send();




var ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function(){
    if (this.readyState == 4 && this.state == 200) {
      console.log(ajax.responseText)
    }
  };

  ajax.open('GET', 'https//codingapple1.github.io/price.json', true);
  ajax.send();



    