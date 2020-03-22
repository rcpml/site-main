"use strict";

let totalExpense = 0;
let totalIncome = 0;
let totalAmount = 0;

const userInput = document.getElementById('input-value-js');
const expense = document.getElementById('expense-js');
const income = document.getElementById('income-js');

const expenseDisplay = document.getElementById('expense-display-js');
const incomeDisplay = document.getElementById('income-display-js');
const totalDisplay = document.getElementById('total-display-js');

const submitButton = document.getElementById('submit-value-js');
submitButton.addEventListener('click', submitValue);

totalDisplay.textContent = `${totalAmount}$`;

function updateAmount() {
  if (expense.checked) {
    totalExpense += parseInt(userInput.value);
    console.log(`Expense updated: ${expense}`); 
  } else {
    totalIncome += parseInt(userInput.value);
    console.log(`Income updated: ${income}`);
  }
}

function updateDisplay() {
  expenseDisplay.textContent = totalExpense;
  incomeDisplay.textContent = totalIncome;
  totalDisplay.textContent = (totalIncome - totalExpense);
}

function submitValue() {
  updateAmount();
  updateDisplay();
  console.log("Submitted");
}