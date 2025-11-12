console.log("Loading sync3.js");

const raceResults = [];

function finishRace(racer) {
  raceResults.push(racer);
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

finishRaceTortoise();
finishRaceHare();

console.log(raceResults);
