console.log("God is good");

let counter = 0;

document.getElementById("increaseButton").onclick = function () {
  counter += 1;
  document.getElementById("counter").innerHTML = counter;
};

document.getElementById("resetButton").onclick = function () {
  counter = 0;
  document.getElementById("counter").innerHTML = counter;
};

document.getElementById("decreaseButton").onclick = function () {
  counter -= 1;
  document.getElementById("counter").innerHTML = counter;
};
