/* eslint-disable */

function calculateTax() {
  alert('calculateTax is called');
  // DEMO: perform the tax calculation here

  // get salary, side income, and tax rate

  // calculate tax amount

  // display result
}

function splitBill() {
  alert('splitBill is called');

  // TODO: get bill total and number of pax
  const totalbill = document.querySelector('#billTotal').value;
  const persons = document.querySelector('#pax').value;
  // TODO: calculate amount for each person
  const result = Number(totalbill) / Number(persons);
  // TODO: display the result
  const split = document.querySelector('#result');
  split.innerHTML = result;
}
