// Set starting variables to use luxon
let DateTime = luxon.DateTime;

let today = DateTime.local();
let hourNow = today.hour;
console.log(hourNow);
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

];

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

        // If statments for settig future past and present classes dependant on the time
        if (hourNow < hours.mhour) {
            $(textSec).addClass("future");
        }

        if (hourNow > hours.mhour) {
            $(textSec).addClass("past");
        }

        else if (hourNow = hours.mhour) {
            $(textSec).addClass("present");
        }

        // variables for localStorage use
        var key = hours.hour;
        var value = textSec.val();

        // Sets the text in boxes from local storage
        var toDo = localStorage.getItem(key);
        console.log(toDo);
        $(textSec).val(toDo);

        // button event that saves input into local storage
        $(".saveBtn").on("click", function() {

            localStorage.setItem(key, value);

        });

    });

    

});