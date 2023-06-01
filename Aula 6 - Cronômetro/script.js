var timer;
var startTime;
var isPaused = false;
var elapsedTime = 0;

function startTimer() {
  if (!timer) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateTimer, 1000);
  }
}

function pauseTimer() {
  if (!isPaused) {
    clearInterval(timer);
    isPaused = true;
  } else {
    startTimer();
    isPaused = false;
  }
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
  elapsedTime = 0;
  updateTimer();
  isPaused = false;
}

function updateTimer() {
  var currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  var hours = Math.floor(elapsedTime / 3600000);
  var minutes = Math.floor((elapsedTime % 3600000) / 60000);
  var seconds = Math.floor((elapsedTime % 60000) / 1000);

  document.getElementById("timer").textContent =
    formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
