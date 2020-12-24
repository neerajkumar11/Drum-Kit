var a = document.querySelectorAll(".drum");

for( var i = 0; i < a.length; i++){

  a[i].addEventListener("click", function(){
    makeSound(this.innerHTML);
    btnAnimation(this.innerHTML);
  });

}

document.addEventListener("keydown", function(e){
  makeSound(e.key);
  btnAnimation(e.key);
});


function makeSound(char){
  switch (char) {
    case "w":
      var aud = new Audio("sounds/tom-1.mp3");
      aud.play();
      break;

    case "a":
      var aud = new Audio("sounds/tom-2.mp3");
      aud.play();
      break;

    case "s":
      var aud = new Audio("sounds/tom-3.mp3");
      aud.play();
      break;

    case "d":
      var aud = new Audio("sounds/tom-4.mp3");
      aud.play();
      break;

    case "j":
      var aud = new Audio("sounds/snare.mp3");
      aud.play();
      break;

    case "k":
      var aud = new Audio("sounds/crash.mp3");
      aud.play();
      break;

    case "l":
      var aud = new Audio("sounds/kick-bass.mp3");
      aud.play();
      break;

    default: console.log(char);

  }
}

function btnAnimation(char){
  document.querySelector("."+char).classList.add("pressed");

  setTimeout(function(){
    document.querySelector("."+char).classList.remove("pressed");
  }, 100)
}
