console.log("Loading async1.js");

function finishRace(racer) {
  const racerNode = document.createElement("p");
  racerNode.innerText = racer;
  document.getElementById("results").appendChild(racerNode);
}

function finishRaceHare() {
  finishRace("hare");
}

function finishRaceTortoise() {
  finishRace("tortoise");
}

const tortoiseNode = document.createElement("button");
tortoiseNode.className = "btn btn-primary m-2";
tortoiseNode.innerText = "Tortoise finishes race!";
tortoiseNode.addEventListener("click", finishRaceTortoise);

const logResultsNode = document.createElement("button");
logResultsNode.className = "btn btn-secondary m-2";
logResultsNode.innerText = "Hare finishes race!";
logResultsNode.addEventListener("click", finishRaceHare);

document.body.appendChild(tortoiseNode);
document.body.appendChild(logResultsNode);
