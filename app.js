function soundPlay(e){
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('active');
};

function removeTransition(e){
    e.target.classList.remove('active')
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))


window.addEventListener('keydown' , soundPlay);