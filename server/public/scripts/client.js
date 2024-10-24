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
    // resultHistory.innerHTML = ''
    // recentResult.innerHTML = '';
    //   adds to the newest math that was just done
    //     recentResult.innerHTML += `
    //     <b>${calculations[calculations.length-1].result}</b>
    //   `
    for (var _i = 0, calculations_1 = calculations; _i < calculations_1.length; _i++) {
        var calc = calculations_1[_i];
        //should add all of the recent resaults into this part
        //   resultHistory.innerHTML +=`
        //   <ol>${calc.numOne} ${calc.operator} ${calc.numTwo} = ${calc.result}</ol>
        //   `
    }
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
