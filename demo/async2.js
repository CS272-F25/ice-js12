console.log("Loading async2.js");

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

setTimeout(finishRaceHare, 1000);
setTimeout(finishRaceTortoise, 2000);
