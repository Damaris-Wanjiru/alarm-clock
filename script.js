let dateInput = document.getElementById("alarmDate");
let Input = document.getElementById("alarmTime");
let btn = document.getElementById("setAlarm")
let cont = document.getElementById("alarms");
let interval;
let maxvalue = 3;
let cnt = 0;

function alarmSetFunction() {
    let now = new Date();
    let selectedDate = new Date(dateInput.value + "T" + tInput.value);
    if (selectedDate <= now) {
        alert(`Invalid time. Please select 
      a future date and time.`);
        return;
    }
}
    if (alarmTimesArray.includes(selectedDate.toString())) {
        alert(`You cannot set multiple 
      alarms for the same time.`);
        return;
    }
    if (cnt < maxValue) {
        let timeUntilAlarm = selectedDate - now;
        alarmDiv.classList.add("alarm");
    }
