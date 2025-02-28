function playSound (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stops the function from running
    audio.currentTime = 0; // rewind to start
    audio.play();
    key.classList.add("playing");
    }

function removeTransition (e) {
    if(e.propertyName !== "transform") return; //skip it if its not a transform
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
["keydown","click"].forEach(event => window.addEventListener(event ,playSound));
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

