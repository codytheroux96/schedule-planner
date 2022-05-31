// This will be the date and time displaying to the ID currentDay using moment.js that I linked in my html
setInterval(function(){
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
}, 1000);
var containerEl = $(".container");

//This will be the function that makes the save button save the text and time that text is logged for 
$(".saveBtn").on("click", function () {
    //assigning the variables text and hour to the information under id in html and the information in the inserttext classes in html
    var text = containerEl.find(".inserttext").val();
    var hour = $(this).parent().attr("id");
    //sending the above variables to localstorage when the save button is clicked
    localStorage.setItem(hour, text);
    console.log(hour);
})
// this will pull what is saved in local storage and place it in the correct hour row on the page
$("#9 .inserttext").val(localStorage.getItem("9"))
$("#10 .inserttext").val(localStorage.getItem("10"));
$("#11 .inserttext").val(localStorage.getItem("11"));
$("#12 .inserttext").val(localStorage.getItem("12"));
$("#13 .inserttext").val(localStorage.getItem("13"));
$("#14 .inserttext").val(localStorage.getItem("14"));
$("#15 .inserttext").val(localStorage.getItem("15"));
$("#16 .inserttext").val(localStorage.getItem("16"));
$("#17 .inserttext").val(localStorage.getItem("17"));

//this will be the function that tracks the hour we are in and declare it the past, present, or future
function hourTracker () {
    var currentTime = moment().hours();
    $(".Timeblocks").each(function () {
        var otherTime =  parseInt($(this).attr("id"));
        console.log(otherTime);
       if (currentTime > otherTime) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }else if (currentTime < otherTime) {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }else {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
    });
}
hourTracker();