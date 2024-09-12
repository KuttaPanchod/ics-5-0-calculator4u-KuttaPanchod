function main() {
    console.log("Welcome to Super Calculator! Use + to add, - to subtract, * to multiply, and / to divide.");
    x = Number(prompt ("First Number"));
    operator = prompt ("Operation");
    y = Number(prompt ("Second Number"));
   
    if (operator=="+") {
        result = add();
    } else if (operator=="-") {
        result = subtract();
    } else if (operator=="*") {
        result = multiply();
    } else if (operator=="/") {
        result = divide();
    } 
    console.log(result)
}
function add() {
    return x+y;
}
function subtract() {
    return x-y;
}
function multiply() {
    return x*y;
}
function divide() {
    return x/y;
}
    
main() 
