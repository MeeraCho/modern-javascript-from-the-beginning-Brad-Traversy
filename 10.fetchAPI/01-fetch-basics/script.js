// Fetching a JSON file 
fetch('./movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));

// Fetching a text file
fetch('./text.txt')
  .then((response) => response.text())
  .then((data) => console.log(data));

// Fetching from an API
fetch('https://api.github.com/users/meeracho')
  .then((response) => response.json())
  .then((data) => document.querySelector('h1').textContent = data.login);


