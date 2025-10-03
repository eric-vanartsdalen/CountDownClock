window.countdown = function () {
    var eventStart = moment.tz("2025-11-11 09:00", "America/Los_Angeles");
    var eventEnd = moment.tz("2025-11-13 17:00", "America/Los_Angeles");

    var now = moment();

    var countdown = document.getElementById('countdown');
    if (!countdown) return;
    countdown.style.paddingTop = '7px';
    countdown.style.paddingRight = '10px';
    countdown.style.paddingBottom = '7px';
    countdown.style.paddingLeft = '10px';
    var state = document.getElementById('state');

    function updateCountdown() {
        now = moment();

        if (now.isBefore(eventStart)) {
            countdown.style.color = "#3399FF";
            countdown.style.backgroundColor = "#1f1f1fff";
            var duration = moment.duration(eventStart.diff(now));
            var countdownText = "";
            if (duration.months() > 0) countdownText += duration.months() + " Months ";
            if (duration.days() > 0) countdownText += duration.days() + " Days ";
            if (duration.hours() > 0) countdownText += duration.hours() + " Hours ";
            if (duration.minutes() > 0) countdownText += duration.minutes() + " Minutes ";
            countdownText += duration.seconds() + " Seconds";
            countdown.innerHTML = countdownText;
            if(state) state.innerHTML = "Event will start in:";
        } else if (now.isBefore(eventEnd)) {
            countdown.style.color = "#ac99eaff";
            countdown.style.backgroundColor = "#1f1f1fff";
            var duration = moment.duration(eventEnd.diff(now));
            var countdownText = "";
            if (duration.months() > 0) countdownText += duration.months() + " Months ";
            if (duration.days() > 0) countdownText += duration.days() + " Days ";
            if (duration.hours() > 0) countdownText += duration.hours() + " Hours ";
            if (duration.minutes() > 0) countdownText += duration.minutes() + " Minutes ";
            countdownText += duration.seconds() + " Seconds";
            countdown.innerHTML = countdownText;
            if(state) {
                state.style.color = "#FFFF99";
                state.innerHTML = "Event is Live. It will end in:";
            }
        } else {
            countdown.className = "font-hero-subtitle";
            countdown.style = "background: linear-gradient(to bottom right, #9780E5, #DE33BB); -webkit-background-clip: text; -webkit-text-fill-color: transparent;";
            var countdownText = "See you next year !";
            countdown.innerHTML = countdownText;
            if(state) {
                state.style = "background: linear-gradient(to bottom right, #9780E5, #DE33BB); -webkit-background-clip: text; -webkit-text-fill-color: transparent;";
                state.style.fontWeight = "bold";
                state.innerHTML = "Thank you for joining us.";
            }
            clearInterval(interval);
        }
    }
    var interval = setInterval(updateCountdown, 1000);
    updateCountdown();
}

// Optionally, call countdown on window load for non-Blazor scenarios
window.onload = function () {
    if (document.getElementById('countdown')) {
        window.countdown();
    }
}