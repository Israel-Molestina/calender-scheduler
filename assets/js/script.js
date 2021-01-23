// Set starting variables to use luxon
let DateTime = luxon.DateTime;

let today = DateTime.local();
let hour = today.hour;
console.log(hour);
console.log(today);

// variable that holds objects for the times. 
var hours = [

    {hour: "9am",
     mhour: "9"},

    {hour: "10am",
     mhour: "10"},

    {hour: "11am",
     mhour: "11"},

    {hour: "12pm",
     mhour: "12"},

    {hour: "1pm",
     mhour: "13"},

    {hour: "2pm",
     mhour: "14"},

    {hour: "3pm",
     mhour: "15"},

    {hour: "4pm",
     mhour: "16"},

    {hour: "5pm",
     mhour: "17"},

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

        if (hour < hours.mhour) {
            $(textSec).addClass("future");
        }

        if (hour > hours.mhour) {
            $(textSec).addClass("past");
        }

        else if (hour = hours.mhour) {
            $(textSec).addClass("present");
        }

    });

    

});



