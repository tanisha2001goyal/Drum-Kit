var buts = document.querySelectorAll(".drum");
for (var i = 0; i < buts.length; i++) {
  buts[i].addEventListener("click", handleClick);
}

function handleClick() {
  makeSound(this.innerHTML);
  buttonAnimation(this.innerHTML);
}


document.addEventListener("keydown",function(event){
          makeSound(event.key);
          buttonAnimation(event.key);
});


function makeSound(sound){

  switch (sound) {
    case "w": var audio = new Audio('sounds/tom-1.mp3');
              audio.play();
              break;
    case "a": var audio = new Audio('sounds/tom-2.mp3');
              audio.play();
              break;
    case "s": var audio = new Audio('sounds/tom-3.mp3');
              audio.play();
              break;
    case "d": var audio = new Audio('sounds/tom-4.mp3');
              audio.play();
              break;
    case "j": var audio = new Audio('sounds/snare.mp3');
              audio.play();
              break;
    case "k": var audio = new Audio('sounds/crash.mp3');
              audio.play();
              break;
    case "l": var audio = new Audio('sounds/kick-bass.mp3');
              audio.play();
              break;
    default: break;
    }
}

function buttonAnimation(classDrum){
  var activeButton = document.querySelector("." + classDrum);
  activeButton.classList.add("pressed");

  setTimeout(function(){ activeButton.classList.remove("pressed");} , 100);
}
