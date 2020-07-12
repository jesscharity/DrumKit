
//Detecing Button Press

var x = document.querySelectorAll(".drum");
var i;
for (var i = 0; i < x.length; i++) {

x[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

//Detecting Keyboard Press

document.addEventListener("keydown", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);

  });

  function makeSound(key) {

      switch (key) {
        case "w":
          var tom1 = new Audio('sounds/tom-1.mp3');
          tom1.play();
          break;

        case "a":
          var tom2 = new Audio('sounds/tom-2.mp3');
          tom2.play();
          break;

        case "s":
          var tom3 = new Audio('sounds/tom-3.mp3');
          tom3.play();
          break;

        case "d":
          var tom4 = new Audio('sounds/tom-4.mp3');
          tom4.play();
          break;

        case "j":
          var snare = new Audio('sounds/snare.mp3');
          snare.play();
          break;

        case "k":
          var kickBass = new Audio('sounds/kick-bass.mp3');
          kickBass.play();
          break;


        case "l":
          var crash = new Audio('sounds/crash.mp3');
          crash.play();
          break;

      default: console.log(buttonInnerHTML);
    }

  }

  //Setting a new function that will animate the buttons being
  //clicked or key being pressed. The 'currentKey' will act as
  //the input representing the 'event.key' (key being pressed)
  //and the 'buttonInnerHTML' (the button being clicked)

  function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

  //We created a variable that represents the class (from the index.html)
  //of the 'currentKey' being clicked or pressed.

    activeButton.classList.add("pressed");

  //To that variable, we added a class that we would like to
  //use to style that currentKey when the buttonAnimation function is called

    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);

  }
  //We don't want the button to stay in this style after it is pressed,
  //so we added a timeout for when it should go back to its original style
  //after the buttonAnimation function is performed. This new function,
  //setTimeout, removes the .pressed style from the button after 100 miliseconds.
