const NAMES = ["Jessie", "Jackson", "Ben", "Kyle", "Gabby", "Jill"];
const NUMS = [2, 5, 6, 8, 19, 22, 27];

/**
 * Prints out each name on a new line
 */
document.getElementById("btn-log-names").addEventListener("click", () => {
  NAMES.forEach((name, i) => console.log(name));
});

/**
 * Prints out the list of each person's first initial
 */
document.getElementById("btn-first-initial").addEventListener("click", () => {
  writeOutput(NAMES.map((n, i) => n[0]));
});

/**
 * Prints out the list of each person's name length
 */
document.getElementById("btn-length-of-name").addEventListener("click", () => {
  writeOutput(NAMES.map((x, i) => x.length));
});

/**
 * Prints out the list of people who's name starts with J.
 */
document.getElementById("btn-j-names").addEventListener("click", () => {
  writeOutput(NAMES.filter((name, i) => name[0].toLowerCase() === "j"));
});

/**
 * Prints out the list of people who's name starts with J and have a long name (>= 5 characters)
 */
document.getElementById("btn-long-j-names").addEventListener("click", () => {
  writeOutput(
    NAMES.filter((name, i) => name[0].toLowerCase() === "j" && name.length >= 5)
  );
});

/**
 * Prints out whether or not there is a 7 in the list of numbers
 */
document.getElementById("btn-is-there-7").addEventListener("click", () => {
  writeOutput(NUMS.some((num, i) => num === 7));
});

/**
 * Prints out whether or not each number is positive.
 */
document.getElementById("btn-is-all-positive").addEventListener("click", () => {
  writeOutput(NUMS.every((num, i) => num >= 0));
});

document.addEventListener("keypress", () => {
  alert("This website does not support typing!");
});

// document.getElementsByTagName returns an iterable, but not a list object!
// We must turn it into a list by doing [...obj]
[...document.getElementsByTagName("button")].forEach((btnNode, i) => {
  btnNode.addEventListener("mouseenter", () => {
    console.log("The user is hovering over ", btnNode.innerText);
  });
  btnNode.addEventListener("mouseleave", () => {
    console.log("The user is no longer hovering over ", btnNode.innerText);
  });
});

function writeOutput(stringOrArray) {
  const outputNode = document.getElementById("output");
  outputNode.innerText = Array.isArray(stringOrArray)
    ? stringOrArray.join(", ")
    : stringOrArray;
}

window.addEventListener("load", () => {
  document.getElementById("names").innerText = "Name list: " + NAMES.join(", ");
  document.getElementById("nums").innerText = "Number list: " + NUMS.join(", ");
});
