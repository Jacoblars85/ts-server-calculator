console.log('client.ts is sourced!');
var result = 0;
var operator = '';
//the GET route for the math
function getCalc() {
    axios({
        url: '/calculations',
        method: 'GET'
    }).then(function (response) {
        renderingMath(response.data);
        console.log('this data is being rendered', response.data);
    });
}
//Renders the math onto the screen below
function renderingMath(calculations) {
    console.log('were rendering');
    //finding the spot to put the new math
    var recentResult = document.getElementById('recentResult');
    var resultHistory = document.getElementById('resultHistory');
    //clearing previous spot for this area
    resultHistory.innerHTML = '';
    recentResult.innerHTML = '';
    //   adds to the newest math that was just done
    recentResult.innerHTML += "\n        <b>".concat(calculations[calculations.length - 1].result, "</b>\n      ");
    for (var _i = 0, calculations_1 = calculations; _i < calculations_1.length; _i++) {
        var calc = calculations_1[_i];
        //should add all of the recent resaults into this part
        resultHistory.innerHTML += "\n          <ol>".concat(calc.numOne, " ").concat(calc.operator, " ").concat(calc.numTwo, " = ").concat(calc.result, "</ol>\n          ");
    }
    ;
}
function postMath(event) {
    event.preventDefault();
    //grabs the input and makes it a variable
    var numOne = document.getElementById('numOne');
    var numTwo = document.getElementById('numTwo');
    operatorButton(event);
    //puts the input into an object 
    var newMath = {
        numOne: numOne.valueAsNumber,
        operator: operator,
        numTwo: numTwo.valueAsNumber,
        result: result
    };
    console.log(newMath);
    axios({
        method: 'POST',
        url: '/calculations',
        data: newMath
    }).then(function (response) {
        console.log('did this work?');
        getCalc();
    });
    //clears the inputs
    numOne.value = '';
    numTwo.value = '';
}
//figures out which operator got clicked
function operatorButton(event, op) {
    console.log('we are clicking operator button');
    event.preventDefault();
    if (op === '+') {
        operator = '+';
        console.log(operator);
    }
    else if (op === '-') {
        operator = '-';
        console.log(operator);
    }
    else if (op === '*') {
        operator = '*';
        console.log(operator);
    }
    else if (op === '/') {
        operator = '/';
        console.log(operator);
    }
    return operator;
}
getCalc();
