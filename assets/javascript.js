// This will be the date and time displaying to the ID currentDay using moment.js that I linked in my html
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));
var containerEl = $(".container");

//This will be the function that makes the save button save the text and time that text is logged for 
$(".saveBtn").on("click", function(){
    //assigning the variables text and hour to the information under id in html and the information in the inserttext classes in html
  var text= containerEl.find(".inserttext").val();
  var hour = $(this).parent().attr("id");
  //sending the above variables to localstorage when the save button is clicked
  localStorage.setItem(text, hour);
  
  
})