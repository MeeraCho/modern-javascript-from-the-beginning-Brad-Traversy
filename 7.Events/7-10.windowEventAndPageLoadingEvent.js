//------------ defer -----------
// 기본 script tag가 head에 있는 경우는 h1을 찾을 수 없다고 나온다
// script tag에 defer를 써주면 window.onload를 해주지 않아도 에러 안남 
document.querySelector('h1').textContent = 'Hello World'; //defer 안써주면 error

window.onload = function () {
    document.querySelector('h1').textContent = 'Hello World'; 
};

//------ load vs DOMContentLoaded - same result ----
//load: waits for the entire page to load, including all resources such as images
//DOMContentLoaded: run as soon as DOM is parsed and loaded 
window.addEventListener('load', () => console.log('Page Loaded'))
window.addEventListener('DOMContentLoaded', () => console.log('DOM Loaded'))
console.log('Run me')
// Run me
// DOM Loaded
// Page Loaded 

window.addEventListener('load', () => {document.querySelector('h1').textContent = '안녕하세요'})
window.addEventListener('DOMContentLoaded', () => {document.querySelector('h1').textContent = '안녕하세요'})

//------------ resize window ------------
window.addEventListener('resize', () => {
    document.querySelector('h1').innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});

//------------ window change style ------------
window.addEventListener('scroll', () => {
    console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

    if (window.scrollY > 70){
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
});

// click in text color change to blue 
window.addEventListener('focus', () => {
    document.querySelectorAll('p').forEach(p => {
        p.style.color = 'blue';
    })
})

// click out text color change to blue 
window.addEventListener('blur', () => {
    document.querySelectorAll('p').forEach(p => {
        p.style.color = 'black';
    })
})


