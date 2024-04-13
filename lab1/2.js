function getCurrentDate() {
    var currentDate = new Date();

    var month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); 
    var day = currentDate.getDate().toString().padStart(2, '0');
    var year = currentDate.getFullYear();

    var formattedDate = month + '-' + day + '-' + year;

    console.log("Current date is: " + formattedDate);
}

getCurrentDate();
