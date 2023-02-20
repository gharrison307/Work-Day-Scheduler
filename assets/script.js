// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// code wrapped within a function so it doesn't run until all the HTML elements have loaded
$(function () {
  var today = dayjs();
  var timeHour = today.hour();

  //  displays day and date on ID = #currentDay
  $("#currentDay").text(today.format("dddd, MMMM YYYY"));

  //   sets up click event
  $(".saveBtn").on("click", function () {
    //   declaring variables
    var buttonClick = $(this);
    var timeBlock = buttonClick.parent();
    var timeId = timeBlock.attr("id");
    var userText = timeBlock.children("textarea").val();

    // console.log tests
    console.log(buttonClick.parent());
    console.log(timeBlock.attr("id"));
    console.log(userText);

    //   sets local storage items
    localStorage.setItem(timeId, userText);
  });

  // sets textarea to userText saved in local storage (if any)
  $("#hour-9 .description").text(localStorage.getItem("hour-9"));
  $("#hour-10 .description").text(localStorage.getItem("hour-10"));
  $("#hour-11 .description").text(localStorage.getItem("hour-11"));
  $("#hour-12 .description").text(localStorage.getItem("hour-12"));
  $("#hour-1 .description").text(localStorage.getItem("hour-1"));
  $("#hour-2 .description").text(localStorage.getItem("hour-2"));
  $("#hour-3 .description").text(localStorage.getItem("hour-3"));
  $("#hour-4 .description").text(localStorage.getItem("hour-4"));
  $("#hour-5 .description").text(localStorage.getItem("hour-5"));

  $(".time-block").each(function () {
    var classHour = $(this).attr("id").split("-")[1];
    console.log(classHour);
    console.log(timeHour);

    if (timeHour == classHour) {
      $(this).addClass("present");
      $(this).removeClass("future");
      $(this).removeClass("past");
    } else if (timeHour < classHour) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    } else if (timeHour > classHour) {
      $(this).addClass("present");
      $(this).removeClass("future");
      $(this).removeClass("past");
    }
  });

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
