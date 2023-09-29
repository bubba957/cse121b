/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector(`#add1`).value);
    let addNumber2 = Number(document.querySelector(`#add2`).value);
    return document.querySelector(`#sum`).value = add(addNumber1, addNumber2);
}

document.querySelector(`#addNumbers`).addEventListener(`click`, addNumbers);

/* Function Expression - Subtract Numbers */

let subtract = function (number1, number2) {
    return number1 - number2;
}

let subtractNumbers = function () {
    let subtractNumber1 = Number(document.querySelector(`#subtract1`).value);
    let subtractNumber2 = Number(document.querySelector(`#subtract2`).value);
    return document.querySelector(`#difference`).value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector(`#subtractNumbers`).addEventListener(`click`, subtractNumbers);

/* Arrow Function - Multiply Numbers */

multiply = (number1, number2) => number1 * number2;

multiplyNumbers = () => {
    let factorNumber1 = Number(document.querySelector(`#factor1`).value);
    let factorNumber2 = Number(document.querySelector(`#factor2`).value);
    document.querySelector(`#product`).value = multiply(factorNumber1, factorNumber2);
}

document.querySelector(`#multiplyNumbers`).addEventListener(`click`, multiplyNumbers);

/* Open Function Use - Divide Numbers */

divide = (number1, number2) => number1 / number2;

divideNumbers = () => {
    let dividendNumber = Number(document.querySelector(`#dividend`).value);
    let divisorNumber = Number(document.querySelector(`#divisor`).value);
    document.querySelector(`#quotient`).value = divide(dividendNumber, divisorNumber);
}

document.querySelector(`#divideNumbers`).addEventListener(`click`, divideNumbers)

/* Decision Structure */



/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector(`#array`).innerHTML = numbersArray;

/* Output Odds Only Array */

let filteredOdds = numbersArray.filter(array => {
    if (array % 2 === 1)
        return array;
})

document.querySelector(`#odds`).innerHTML = filteredOdds;

/* Output Evens Only Array */

let filteredEvens = numbersArray.filter(array => {
    if (array % 2 === 0)
        return array;
})

document.querySelector(`#evens`).innerHTML = filteredEvens;

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
