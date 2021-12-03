/* eslint-disable */

console.log('getCurrentYear', helpers.getCurrentYear());
/* DEMO: show how to update current year */

// get the footer year element

// update the content of the year element to result of helpers.getCurrentYear

console.log('getCurrentDate', helpers.getCurrentDate());
/* EXERCISE: practice how to update current date */

// TODO: get the footer today element
const todayElement = document.querySelector('#footer-today');
const currentDate = helpers.getCurrentDate();
todayElement.innerHTML = currentDate;
// TODO: update the content of the today element to result of helpers.getCurrentDate
