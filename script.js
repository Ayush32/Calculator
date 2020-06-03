/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
var buttons = document.getElementsByClassName("button");
var displays = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;

function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var value = this.getAttribute("data-value");
        var text = displays.textContent.trim();

        if (isOperator(value)) {
            operator = value;
            operand1 = parseFloat(text);
            displays.textContent = "";
        } 
        else if (value == "%") {
            operand1 = parseFloat(text);
            operand1 = operand1 / 100;
            displays.textContent = operand1;
        }
         else if (value == "expo") {
            operand1 = parseFloat(text);
            operand1 = Math.sqrt(operand1);
            displays.textContent = operand1;
        } 
        else if (value == ".") {
            if (text.length && !text.includes(".")) {
                displays.textContent = text + ".";
            }
        } 
        else if (value == "=") {
            operand2 = parseFloat(text);
            var result = eval(operand1 + " " + operator + " " + operand2);
            if (result) {
                displays.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        }
         else if (value == "AC") {
            displays.textContent = "";
        }
         else {
            displays.innerText += value;
        }
    });
}
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("keyup", function () {
        var value = this.getAttribute("data-value");
        var text = displays.textContent.trim();

        if (isOperator(value)) {
            operator = value;
            operand1 = parseFloat(text);
            displays.textContent = "";
        } else if (value == "%") {
            operand1 = parseFloat(text);
            operand1 = operand1 / 100;
            displays.textContent = operand1;
        } else if (value == "expo") {
            operand1 = parseFloat(text);
            operand1 = Math.sqrt(operand1);
            displays.textContent = operand1;
        } else if (value == ".") {
            if (text.length && !text.includes(".")) {
                displays.textContent = text + ".";
            }
        } else if (value == "=") {
            operand2 = parseFloat(text);
            var result = eval(operand1 + " " + operator + " " + operand2);
            if (result) {
                displays.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        } else if (value == "AC") {
            displays.textContent = "";
        } else {
            displays.innerText += value;
        }
    });
}
