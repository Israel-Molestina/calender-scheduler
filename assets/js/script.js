// Set starting variables to use luxon
let DateTime = luxon.DateTime;

let today = DateTime.local();
console.log(today);


$(document).ready(function() {

    // Makes current date appear on screen
    $("#currentDay").text(today.toLocaleString(DateTime.DATE_FULL));

})