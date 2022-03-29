console.clear();
/*
1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/
const showTimeAsPerQuestion = () => {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const date = new Date();
  const day = date.getDay();
  // output -1
  const answerOne = `Today is : ${weekDays[day]}`;
  console.log(answerOne);

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  const AM_PM = h >= 12 ? "PM" : "AM";

  const addingZero = (t) => {
    return t <= 9 ? `0${t}` : t;
  };

  const answerTwo = `Current Time is : ${addingZero(h)} ${AM_PM}:${addingZero(
    m
  )}:${addingZero(s)}`;

  console.log(answerTwo);
};
// showTimeAsPerQuestion();

/* 2. Write a JavaScript program to print the contents of the current window.*/

const printCurrentWindow = () => {
  return window.print();
};
// printCurrentWindow()
