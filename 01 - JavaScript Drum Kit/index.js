function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio){ 
        return; //wont play a sound on a invalid key
    }else {
        audio.play()
        audio.currentTime = 0; //skip the time take to play again
    }
    key.classList.add('playing')
  
    this.setTimeout(function(){
        key.classList.remove('playing')
    }, 100)
}


window.addEventListener('keyup', playSound)