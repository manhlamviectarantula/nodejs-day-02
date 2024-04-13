function getCurrentDateTime() {
    var currentDate = new Date();

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var day = days[currentDate.getDay()];

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var currentTime = hours + ' ' + period + ' : ' + minutes + ' : ' + seconds;

    console.log("Today is: " + day);
    console.log("Current time is: " + currentTime);
}

getCurrentDateTime();
