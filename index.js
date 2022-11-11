

// Taking inputs from the text boxes and using it for the calculations

// Distance

document
  .getElementById("doCalcsBtn").addEventListener("click", getInputsAndCalc);

function getInputsAndCalc() {
  var distance = document.getElementById("distanceInput").value;
  var time = document.getElementById("timeInput").value;
  console.log("Clicked");
  
  // Doing the calcs
  var speed = (distance / time) * 60;
  var pace = time / distance;

  // Adding the calcs to the HTML
  document.getElementById("speed").innerHTML =
    "Your speed was: " + speed + " kmph";
  document.getElementById("timePerKm").innerHTML =
    "Your time per km was: " + pace + " minutes";
  document.getElementById("5k").innerHTML =
    "If you were to run a 5k it would take you: " + pace * 5 + " minutes";
  document.getElementById("marathon").innerHTML = marathonTime(pace);

  divChange(speed);
  
}

// Calculating the time to run a marathon

function marathonTime(runPace) {
  var marathonHours = Math.floor((runPace * 42.195) / 60);
  var marathonMinutes = Math.floor((runPace * 42.195) % 60);
  return (
    "If you were to run a marathon it would take you: " +
    marathonHours +
    " hours and " +
    marathonMinutes +
    " minutes"
  );
}

// change the div colour on the basis of the pace

function divChange(calculatedSpeed){
  var animalDiv = document.getElementById("animalDiv");
  
  var animalType = document.getElementById("animalSpan");

  if (calculatedSpeed === 0){
    animalDiv.style.backgroundImage = "url('images/rock.jpeg')";
    animalType.innerHTML = " a rock";
  } else if (calculatedSpeed > 0 && calculatedSpeed <= 1){
    animalDiv.style.backgroundImage = "url('images/slowLoris.jpeg')";
    animalType.innerHTML = " a slow loris";
  } else if (calculatedSpeed > 1 && calculatedSpeed <= 4){
    animalDiv.style.backgroundImage = "url('images/manatee.jpeg')";
    animalType.innerHTML = " a manatee";
  } else if (calculatedSpeed > 4 && calculatedSpeed <= 6){
    animalDiv.style.backgroundImage = "url('images/redSquirrel.jpeg')";
    animalType.innerHTML = " a squirrel";
  } else if (calculatedSpeed > 6 && calculatedSpeed <= 9){
    animalDiv.style.backgroundImage = "url('images/elk2.jpeg')";
    animalType.innerHTML = " an elk";
  } else if (calculatedSpeed > 9 && calculatedSpeed <= 11){
    animalDiv.style.backgroundImage = "url('images/rabbit.jpeg')";
    animalType.innerHTML = " a rabbit";
  } else if (calculatedSpeed > 11 && calculatedSpeed <= 15){
    animalDiv.style.backgroundImage = "url('images/kangaroo.jpeg')";
    animalType.innerHTML = " a kangaroo";
  } else if (calculatedSpeed > 15 && calculatedSpeed <= 19){
    animalDiv.style.backgroundImage = "url('images/cheetah2.jpeg')";
    animalType.innerHTML = " a cheetah";
  } else {
    animalDiv.style.backgroundImage = "url('images/light.jpeg')";
    animalType.innerHTML = " light";
  }


  // else if (calculatedSpeed>2){
  //   animalDiv.style.backgroundColor = "green";
  // }

  // Failed switch statement...>>>

  // switch (calculatedSpeed) {
  //   case (calculatedSpeed>0 && calculatedSpeed<=1):
  //     animalDiv.style.backgroundColor = "blue";
  //     break;
  //   case (calculatedSpeed>1 && calculatedSpeed<=10):
  //     animalDiv.style.backgroundColor = "yellow";
  //     break;
  //   case (calculatedSpeed>10):
  //       animalDiv.style.backgroundColor = "green";
  //       break;
  //   default:
  //     break;
  // }




}