console.log("Loading async3.js");

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

setTimeout(finishRaceHare, 1000);
setTimeout(finishRaceTortoise, 2000);

console.log(raceResults);

// const logResultsNode = document.createElement("button");
// logResultsNode.className = "btn btn-secondary m-2";
// logResultsNode.innerText = "Log results!";
// logResultsNode.addEventListener("click", () => console.log(raceResults));
// document.body.appendChild(logResultsNode);
