// code wrapped within a function so it doesn't run until all the HTML elements have loaded
$(function () {
  var today = dayjs();
  var timeHour = today.hour();

  //  displays day and date on ID = #currentDay
  $("#currentDay").text(today.format("dddd, MMMM DD, YYYY"));

  //   sets up click event
  $(".saveBtn").on("click", function () {
    //   declaring variables
    var buttonClick = $(this);
    var timeBlock = buttonClick.parent();
    var timeId = timeBlock.attr("id");
    var userText = timeBlock.children("textarea").val();

    // <---------  console.log tests --------->
    // console.log(buttonClick.parent());
    // console.log(timeBlock.attr("id"));
    // console.log(userText);

    //   sets local storage items
    localStorage.setItem(timeId, userText);
  });

  // sets textarea to userText saved in local storage (if any)
  $("#hour-9 .description").text(localStorage.getItem("hour-9"));
  $("#hour-10 .description").text(localStorage.getItem("hour-10"));
  $("#hour-11 .description").text(localStorage.getItem("hour-11"));
  $("#hour-12 .description").text(localStorage.getItem("hour-12"));
  $("#hour-13 .description").text(localStorage.getItem("hour-13"));
  $("#hour-14 .description").text(localStorage.getItem("hour-14"));
  $("#hour-15 .description").text(localStorage.getItem("hour-15"));
  $("#hour-16 .description").text(localStorage.getItem("hour-16"));
  $("#hour-17 .description").text(localStorage.getItem("hour-17"));

  //   sets class of present, past or future depending on the classHour(timeID) and timeHour (actual time)
  $(".time-block").each(function () {
    var classHour = $(this).attr("id").split("-")[1];

    if (timeHour == classHour) {
      $(this).addClass("present");
      $(this).removeClass("future");
      $(this).removeClass("past");
    } else if (timeHour > classHour) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    } else if (timeHour < classHour) {
      $(this).removeClass("present");
      $(this).addClass("future");
      $(this).removeClass("past");
    }
  });
});
