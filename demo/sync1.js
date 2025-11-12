console.log("Loading sync1.js");

function finishRace(racer) {
  const racerNode = document.createElement("p");
  racerNode.innerText = racer;
  document.getElementById("results").appendChild(racerNode);
}

finishRace("tortoise");
finishRace("hare");
