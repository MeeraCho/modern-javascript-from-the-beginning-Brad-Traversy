// --------- pass in a callback ------- 
// 1. asynchrous callback 
// addEventListener(), setTimeout() - it gets put into the task queue, the event loop moves it to the call stack. 

// Do not pass in callback with parenthese- toggle O toggle() X
function toggle(e){
  e.target.classList.toggle('danger');
}

document.querySelector('button').addEventListener('click', toggle);

// 2. synchrous callback
// using callback doesn't mean it's always asynchronous
// forEach(), map() on arrays - those taken callbacks, but it's not asynchronous, those are executed right away. 

// 3. creating own callback 
const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'},
]

function createPost(post, cb) {
  setTimeout(()=>{
    posts.push(post);
    cb();
  }, 2000)
}

function getPosts(){
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts)
