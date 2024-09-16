// Name: Sukhminder
// Date: September 16 2024
// Title: Calculator App

function main() {
    console.log("Welcome to Super Calculator! Use + to add, - to subtract, * to multiply, / to divide, ^ to power, and $ to sqaure root.");
    x = Number(prompt("First Number"));
    operator = prompt("Operation");
    y = Number(prompt("Second Number"));

    if (operator == "+") {
        result = add();
    } else if (operator == "-") {
        result = subtract();
    } else if (operator == "*") {
        result = multiply();
    } else if (operator == "/") {
        result = divide();
    } else if (operator == "^") {
        result = square();
    } else if (operator == "$") {
        result = squareRoot();
    } else if (operator == "sin") {
        result = sin();
    }
    console.log(result) 
}
function add() {
    return x + y;
}
function subtract() {
    return x - y;
}
function multiply() {
    return x * y;
}
function divide() {
    return x / y;
}
function square() {
    return Math.pow (x , y);
}
function squareRoot() {
    return Math.sqrt(x);
}
function sin() {
    return Math.sin (x);
}

main()


