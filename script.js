
/////////////////    DOM   MANIPULATION ///////////////////


let button = document.getElementById('button'); 
let result= document.getElementById('result'); 

button.addEventListener('click', function(event) { 
    let firstValue= parseInt(document.getElementById('firstValue').value);
    let secondValue= parseInt(document.getElementById('secondValue').value);
    let operator = document.getElementById("operator").value;
    let calculation;

    switch (operator) {
        case "+":
            calculation= firstValue + secondValue;
            break;
        case "-":
            calculation= firstValue - secondValue;
            break;
        case "*":
            calculation= firstValue * secondValue;
            break;
        case "/":
            calculation= firstValue / secondValue;
            break;
        default:
            calculation= "Invalid operator";
    }
    result.innerText =`Result: ${calculation}`
    document.getElementById('secondValue').value=0
    document.getElementById('firstValue').value=0

    
});





