window.addEventListener('keydown', playSound);

function playSound(e) {
    console.log(e.keyCode); //65
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    
    //play audio 
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    //key animation
    key.classList.add('playing');
    setTimeout(() => {
        key.classList.remove('playing')
    }, 100)
}