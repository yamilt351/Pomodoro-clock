var breakDecrement = document.getElementById("break-decrement");

var breakIncrement = document.getElementById("break-increment");

var sessionDecrement = document.getElementById("session-decrement");

var sessionIncrement = document.getElementById("session-increment");

var startStopButton = document.getElementById("start_stop");

var resetButton = document.getElementById("reset");

var LabelDisplay = document.getElementById("timer-label");

var breakLength = document.getElementById("break-length");

var sessionLength = document.getElementById("session-length");

var timeLeft = document.getElementById("time-left");

var timer;

var timerStatus = "begins";

var minute;

var isBreak = false;
//PROCESS SESSION
startStopButton.addEventListener("click", () => {
  //counting down sessionLength
  if (!isBreak || isBreak) {
    if (timerStatus === "begins" || timerStatus == "stopped") {
      timerStatus = "counting";
      console.log("pressing start button");

      timer = setInterval(() => {
        timeLeft.innerText = decrementTime(timeLeft.innerText);
      }, 1000);
    } else if (timerStatus === "counting") {
      timerStatus = "stopped";
      console.log("pressing stop button");

      clearInterval(timer);
    }
  }
});

//RESET COUNT
resetButton.addEventListener("click", () => {
  clearInterval(timer);
  console.log("pressing reset button");
  console.log(typeof timeLeft);
  return (
    (timerStatus = "stopped"),
    document.getElementById("beep").pause(),
    (document.getElementById("beep").ended = true),
    document.getElementById("beep").load(),
    (isBreak = false),
    (LabelDisplay.innerText = "Session"),
    (breakLength.innerText = 5),
    (sessionLength.innerText = 25),
    (timeLeft.innerText = "25:00")
  );
});
// SESSION INCREMENT

sessionIncrement.addEventListener("click", (time) => {
  time = timeLeft.innerText.split(":");
  minute = parseInt(time[0]);
  var sessionMinute = parseInt(time[0]);
  if (minute < 60) {
    minute += 1;
    sessionMinute = minute;
  }
  if (minute <= 9) {
    sessionMinute = "0" + minute;
  }
  return (
    (sessionLength.innerText = minute),
    (timeLeft.innerText = sessionMinute + ":" + "0" + 0)
  );
});

//  SESSION DECREMENT

sessionDecrement.addEventListener("click", (time) => {
  time = timeLeft.innerText.split(":");
  var sessionMinute = parseInt(time[0]);
  minute = parseInt(time[0]);
  if (minute != 1) {
    minute -= 1;
    sessionMinute = minute;
  }
  if (minute <= 9) {
    minute = "0" + minute;
    sessionMinute != minute;
  }
  return (
    (sessionLength.innerText = sessionMinute),
    (timeLeft.innerText = minute + ":" + "0" + 0)
  );
});

// BREAK INCREMENT
breakIncrement.addEventListener("click", (time) => {
  time = breakLength.innerText.split();

  minute = parseInt(time[0]);

  if (minute < 60) {
    minute += 1;
  }

  return (breakLength.innerText = minute);
});
// BREAK DECREMENT
breakDecrement.addEventListener("click", (time) => {
  time = breakLength.innerText.split();

  minute = parseInt(time[0]);

  if (minute != 1) {
    minute -= 1;
  }

  return (breakLength.innerText = minute);
});

//COUNTING SESSION

function decrementTime(timeString) {
  let timeDisplay = timeString.split(":");

  let secondDisplay = parseInt(timeDisplay[1]);

  let minuteDisplay = parseInt(timeDisplay[0]);

  secondDisplay--;

  if (secondDisplay == -1) {
    secondDisplay = 59;

    minuteDisplay -= 1;
  }
  if (secondDisplay <= 9) {
    secondDisplay = "0" + secondDisplay;
  }
  if (minuteDisplay <= 9) {
    minuteDisplay = "0" + minuteDisplay;
  }
  if (minuteDisplay == 0 && secondDisplay == 0 && isBreak) {
    LabelDisplay.innerText = "Session";

    document.getElementById("beep").play();

    document.getElementById("beep").muted = false;
    isBreak = false;
  } else if (minuteDisplay == 0 && secondDisplay == 0 && !isBreak) {
    isBreak = true;

    LabelDisplay.innerText = "Break";

    document.getElementById("beep").play();

    document.getElementById("beep").muted = false;
  }

  if (minuteDisplay === "0" + -1 && !isBreak) {
    secondDisplay = "0" + 0;
    minuteDisplay = "0" + sessionLength.textContent;
   
  } else if (minuteDisplay === "0" + -1 && isBreak) {
    secondDisplay = "0" + 0;
    minuteDisplay = "0" + breakLength.innerText;
 }
  return minuteDisplay + ":" + secondDisplay;
}
