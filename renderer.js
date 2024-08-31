let timerInterval;
let timeRemaining = 0;

document.getElementById("start-timer").addEventListener("click", () => {
  const minutes = parseInt(document.getElementById("minutes").value);
  const seconds = parseInt(document.getElementById("seconds").value);
  timeRemaining = minutes * 60 + seconds;

  timerInterval = setInterval(() => {
    timeRemaining--;
    updateDisplay();
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      shutDown();
    }
  }, 1000);
});

document.getElementById("start-stopwatch").addEventListener("click", () => {
  timeRemaining = 0;
  timerInterval = setInterval(() => {
    timeRemaining++;
    updateDisplay();
  }, 1000);
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(timerInterval);
});

function updateDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  document.getElementById("display").innerText = `${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}

//function shutDown() {
//  const { exec } = require("child_process");
//  exec("shutdown -s -t 0"); // Für Windows
//  // exec('sudo shutdown -h now'); // Für Linux/Mac
//}

//anstelle der obigen shutdown funktion lasse ich hier zu testzwecken nur eine meldung ausgeben
const { Notification } = require("electron");

function shutDown() {
  new Notification({
    title: "Timer",
    body: "Der Timer ist abgelaufen!",
  }).show();
}
