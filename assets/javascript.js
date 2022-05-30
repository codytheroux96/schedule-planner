// This will be the date and time displaying to the ID currentDay using moment.js that I linked in my html
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));
var containerEl = $(".container");

//This will be the function that makes the save button save the text and time that text is logged for 
$(".saveBtn").on("click", function(){
  var text= containerEl.find(".inserttext").val();
  var hour = $(this).parent().attr("id");
  console.log(hour)
  
  
})