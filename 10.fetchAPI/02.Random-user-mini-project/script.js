function fetchUser(){
  showSpinner();
  fetch('https://randomuser.me/api/')
    .then((res) => res.json())
    .then(data => {
      hideSpinner();
      displayUser(data.results[0])
    });
}

function displayUser(user){
  const userDisplay = document.querySelector('#user');
  userDisplay.innerHTML = '';
  const divLarge = document.createElement('div');
  const divMed = document.createElement('div');

  changeBackground(user.gender);
  
  const img = createImg('w-48 h-48 rounded-full mr-8', user.picture.medium)
  const divSmall = createUserSpecList(user);

  divLarge.className ='flex justify-between';
  divMed.className = 'flex';
  divSmall.className = 'space-y-3';

  divMed.appendChild(divSmall);
  divLarge.appendChild(img);
  divLarge.appendChild(divMed);
  userDisplay.appendChild(divLarge);
}

function showSpinner(){
  document.querySelector('.spinner').style.display = 'block';
}

function hideSpinner(){
  document.querySelector('.spinner').style.display = 'none';
}


function changeBackground(gender){
  if (gender === 'male') {
    document.body.style.backgroundColor = 'steelblue';
  } else {
    document.body.style.backgroundColor = 'rebeccapurple';
  }
}

function createUserSpecList(user){  
  const divSmall = document.createElement('div');
  const userName = `${user.name.first} ${user.name.last}`;
  const userLocation = `${user.location.state} ${user.location.country}`;
  
  const spanText = {
    Name : userName, 
    Email: user.email,
    Phone: user.phone,
    Location: userLocation,
    Age : user.dob.age
  }; 

  for (const text in spanText ){
    const p = createP('text-xl');
    const span = createSpan('font-bold');

    const pText = document.createTextNode(spanText[text]);

    span.appendChild(document.createTextNode(`${text}: `));

    p.appendChild(span);
    p.appendChild(pText);
    divSmall.appendChild(p);
  }

  return divSmall;
}

function createP(classes){
  const p = document.createElement('p');
  p.className = classes;
  return p;
}

function createSpan(classes){
  const span = document.createElement('span');
  span.className = classes;
  return span;
}

function createImg(classes, pic){
  const img = document.createElement('img');
  img.className = classes;
  img.src = pic;
  return img;
}


document.querySelector('#generate').addEventListener('click', fetchUser)
document.addEventListener('DOMContentLoaded', fetchUser);
