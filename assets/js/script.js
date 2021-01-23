// Set starting variables to use luxon
let DateTime = luxon.DateTime;

let today = DateTime.local();
console.log(today);

// variable that holds objects for the times. 
var hours = [

    {hour: "9ma"},

    {hour: "10am"},

    {hour: "11am"},

    {hour: "12pm"},

    {hour: "1pm"},

    {hour: "2pm"},

    {hour: "3pm"},

    {hour: "4pm"},

    {hour: "5pm"},

]

$(document).ready(function() {

    // Makes current date appear on screen
    $("#currentDay").text(today.toLocaleString(DateTime.DATE_FULL));

    //added class to container section
    $(".container").addClass("time-block");

    hours.forEach(function(hours) {

        console.log(hours);

        // created and appended row to container
        var row = $("<article>").addClass("row");
        $(".container").append(row);

        // created and appended section for time to row
        var timeSec = $("<section>").addClass("hour col-2");
        timeSec.text(hours.hour);
        row.append(timeSec);

        // created and appended textarea
        var textSec = $("<textarea>").addClass("textarea col-8 description");
        row.append(textSec);

        // created and appended buttons
        var btnSec = $("<button>").addClass("saveBtn col-2");
        row.append(btnSec);

    })

});

