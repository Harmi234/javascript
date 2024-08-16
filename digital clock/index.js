function UpdateClock() {
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hours = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

    if (hours == 0) {
        hours = 12;
    }

    if (hours > 12) {
        hours = hours - 12;
        pe = "PM";
    }

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["dayname", "month", "daynum", "year", "hour", "minuts", "seconds", "period"];
    var values = [week[dname], months[mo], dnum, yr, hours, min, sec, pe];

    for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).innerHTML = values[i];
    }
}

function initClock() {
    UpdateClock();
    window.setInterval(UpdateClock, 1000);
}

window.onload = initClock;