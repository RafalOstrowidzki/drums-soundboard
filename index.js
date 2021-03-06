//
// document.querySelector("button").addEventListener("click", function () {
//   alert("I got clicked!");
//
//   // What to do when click detected.
// });

// bind eventlistener with all buttons
// document.querySelectorAll("button").forEach(button => {
//   button.addEventListener("click", function () {
//     alert("I got clicked");
//   })
// });


// document.querySelectorAll(".drum").forEach( function(button) {
//   button.addEventListener("click", function () {
//     alert("I got clicked");
//   });
// });


// var buttons = document.querySelectorAll("button");
// for (var i = 0; i < buttons.length; i++) {
//   button = buttons[i];
//   button.addEventListener("click", function () {
//     alert("I got clicked!");
//   });
// }
//
// var numberOfDrumButtons = document.querySelectorAll(".drum").length;
//
// for (var i = 0; i < numberOfDrumButtons; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
//   });
// }

function makeSound(char) {
  switch (char) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/gothic.mp3");
      audio.play();
      break;

    default:
      console.log("Something went wrong.");
  }
}

function buttonAnimation(currentKey, eventListener) {
  var activeButton = document.querySelector(`.${currentKey}`);

  if ( eventListener.type === "keydown" ) {
    activeButton.classList.add("pressed");
  } else if ( eventListener.type === "keyup" ) {
    activeButton.classList.remove("pressed");
  } else if ( eventListener.type === "click" ) {
    activeButton.classList.add("pressed");
    // release button after 100ms
    setTimeout( () => {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}


// Detecting button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function (eventListener) {
    var buttonLetter = this.innerHTML;
    makeSound(buttonLetter);
    buttonAnimation(buttonLetter, eventListener);
  });
}

// Detecting keyboard press

document.addEventListener("keydown", eventlistener => {
  var pressedKey = eventlistener.key;
  makeSound(pressedKey);
  buttonAnimation(pressedKey, eventlistener);
});

// Detecting keyboard release

document.addEventListener("keyup", eventlistener => {
  var pressedKey = eventlistener.key;
  buttonAnimation(pressedKey, eventlistener);
});
