// Used Moment.js to obtain and format the current day:
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

// Use Moment.js to obtain the current time and set as variable:
var currentTime = parseInt(moment().format('HH'));

$(document).ready(function () {
    // Assign variables for local 
    var $nineAM = $("#nineAM");
    var $tenAM = $("#tenAM");
    var $elevenAM = $("#elevenAM");
    var $twelvePM = $("#twelvePM");
    var $onePM = $("#onePM");
    var $twoPM = $("#twoPM");
    var $threePM = $("#threePM");
    var $fourPM = $("#fourPM");
    var $fivePM = $("#fivePM");

    // Set the color for each column, past, present, and future
    $("textarea").each(function () {
        var name = parseInt($(this).attr("name"));
        if (name < currentTime) {
            $(this).addClass("past");
        }

        if (name > currentTime) {
            $(this).addClass("future")
        }

        if (name === currentTime) {
            $(this).addClass("present")
        }
    })

    $("button").on("click", function () {
        // Set the variables in the local storage
        localStorage.setItem("9AM", ($nineAM.val()))
        localStorage.setItem("10AM", ($tenAM.val()))
        localStorage.setItem("11AM", ($elevenAM.val()))
        localStorage.setItem("12PM", ($twelvePM.val()))
        localStorage.setItem("1PM", ($onePM.val()))
        localStorage.setItem("2PM", ($twoPM.val()))
        localStorage.setItem("3PM", ($threePM.val()))
        localStorage.setItem("4PM", ($fourPM.val()))
        localStorage.setItem("5PM", ($fivePM.val()))
    })

    // Obtain the information stored on screen. 
    // Content will stay on screen if page is refreshed.
    $("#nineAM").append(localStorage.getItem("9AM"));
    $("#tenAM").append(localStorage.getItem("10AM"));
    $("#elevenAM").append(localStorage.getItem("11AM"));
    $("#twelvePM").append(localStorage.getItem("12PM"));
    $("#onePM").append(localStorage.getItem("1PM"));
    $("#twoPM").append(localStorage.getItem("2PM"));
    $("#threePM").append(localStorage.getItem("3PM"));
    $("#fourPM").append(localStorage.getItem("4PM"));
    $("#fivePM").append(localStorage.getItem("5PM"));

})







