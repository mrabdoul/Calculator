const screen = document.querySelector('#screen');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const resetBtn = document.querySelector('#reset');
const deleteBtn = document.querySelector('#delete');
const equals = document.querySelector('.equals');

let a = '';
let operator = '';
let b = '';

function add(a, b) {
	return a + b
}

function subtract(a, b) {
	return a - b
}

function multiply(a, b) {
	return a * b
}

function divide(a, b) {
	return a / b
}
