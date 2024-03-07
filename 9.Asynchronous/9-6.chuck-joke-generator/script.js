const jokeEl = document.querySelector('#joke');
const btn = document.querySelector('#joke-btn');

const generageJoke = () => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  
  xhr.onreadystatechange = function(){
    if (this.readyState === 4 && this.status === 200){
      const data = JSON.parse(this.responseText);
  
      jokeEl.innerHTML = JSON.parse(this.responseText).value;
    } else {
      jokeEl.innerHTML = 'Something Went Wrong (Not Funny)';
    }
  } 
  
  xhr.send();
} 

btn.addEventListener('click', generageJoke);
document.addEventListener('DOMContentLoaded', generageJoke)



