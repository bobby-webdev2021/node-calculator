const readlineSync = require('readline-sync');
var firstNum = readlineSync.questionInt("Please enter the first number: ");
var secondNum = readlineSync.questionInt("Please enter the second number: ");
var calcOperator = readlineSync.question("Please select your operation: add/sub/mult/div:")
function myCalc (number1,number2,enteredOperator){
function additionFunc(num1, num2){
    return num1+num2;
}
function subtractionFunc(num1, num2){
    return num1-num2;
}
function multiplicationFunc(num1, num2){
    return num1*num2;
}
function divisionFunc(num1, num2){
    return num1/num2;
}
   
    if (enteredOperator =="add"){
        console.log("Sum of two numbers is: " + additionFunc(number1, number2));
    }
    else if(enteredOperator == "sub"){
        console.log ("Sum of two munbers is " + subtractionFunc(number1, number2));
    }
    else if(enteredOperator == "mult"){
        console.log("Sum of tdwo numbers is: " + multiplicationFunc(number1, number2));
    }
    else if(enteredOperator == "div"){
        console.log("Sum of two numbers is: " + divisionFunc(number1, number2));
    }
    else 
        console.log("invalid operation");
}
myCalc(firstNum, secondNum, calcOperator);