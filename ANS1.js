function dateFunction() {

  const Days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  
  const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  // Assuming you have an input field with the id "inputDate" in your HTML

  // Get the input date value from the HTML input field
  var inputDateValue = document.getElementById("input-date").value;

  // Create a new Date object with the input date value
  var date = new Date(inputDateValue);

  // Get the day, date, and month from the Date object
  var day = date.toLocaleDateString("en-US", { weekday: "long" });
  var dateValue = date.getDate();
  var month = date.toLocaleDateString("en-US", { month: "long" });

  // Print the day, date, and month
  console.log("Day: " + day);
  console.log("Date: " + dateValue);
  console.log("Month: " + month);
  
  document.getElementById(
    "date-ans"
  ).innerHTML = `Greetings, Today is ${day} and it’s ${dateValue} ${month}`;
}
