var express = require('express');
var app = express();
var PORT = process.env.PORT || 5001;
app.use(express.json());
app.use(express.static('server/public'));
// Global variable that will contain all of the
// calculation objects:
var calculations = [{
        numOne: 2,
        operator: '+',
        numTwo: 2,
        result: 4,
    }];
//does all the math
function doingCalc(numOne, numTwo, operator) {
    if (operator === '+') {
        return Number(numOne) + Number(numTwo);
    }
    else if (operator === '-') {
        return Number(numOne) - Number(numTwo);
    }
    else if (operator === '*') {
        return Number(numOne) * Number(numTwo);
    }
    else if (operator === '/') {
        return Number(numOne) / Number(numTwo);
    }
}
// GET /calculations
app.get('/calculations', function (req, res) {
    console.log('we got a get req', calculations);
    res.send(calculations);
});
// POST /calculations
app.post('/calculations', function (req, res) {
    console.log('we got a post req');
    var newMath = req.body;
    console.log(newMath);
    //pushes the data into the array
    calculations.push(newMath);
    //gets the last object in that array
    var newestResult = calculations[calculations.length - 1];
    //does the math
    newestResult.result = doingCalc(newestResult.numOne, newestResult.numTwo, newestResult.operator);
    console.log('this should be the result', newestResult.result);
    console.log('this should be the calc array', calculations);
    res.sendStatus(201);
});
// PLEASE DO NOT MODIFY ANY CODE BELOW THESE BEARS:
// 🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸
// This starts the server...but also stores it in a variable.
// This is weird. We have to do it for testing reasons. There
// is absolutely no need for you to reason about this.
var server = app.listen(PORT, function () {
    console.log('server running on: ', PORT);
});
// server.setTimeout(500)
// This is more weird "for testing reasons" code. There is
// absolutely no need for you to reason about this.
app.closeServer = function () {
    server.close();
};
app.setCalculations = function (calculationsToSet) {
    calculations = calculationsToSet;
};
module.exports = app;
