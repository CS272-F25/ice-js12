console.log("Loading async4.js");

const raceResults = [];

function finishRace(racer) {
  raceResults.push(racer);
}

function showResults() {
  for (const racer of raceResults) {
    const racerNode = document.createElement("p");
    racerNode.innerText = racer;
    document.getElementById("results").appendChild(racerNode);
  }
}

function finishRaceHare() {
  finishRace("hare");
}

function finishRaceTortoise() {
  finishRace("tortoise");
}

setTimeout(finishRaceHare, 1000);
setTimeout(finishRaceTortoise, 2000);
setTimeout(showResults, 2001);
