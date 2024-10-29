const express = require('express');
const app = express();
let PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.static('server/public'));

// Global variable that will contain all of the
// calculation objects:
let calculations = [{
  numOne: 2,
    operator: '+',
    numTwo: 2,
    result: 4,
}];

//does all the math
function doingCalc(numOne, numTwo, operator) {
  if (operator === '+') {
    return Number(numOne) + Number(numTwo)
  } else if (operator === '-') {
    return Number(numOne) - Number(numTwo)
  } else if (operator === '*') {
    return Number(numOne) * Number(numTwo)
  } else if (operator === '/') {
    return Number(numOne) / Number(numTwo)
  }
}


// GET /calculations
app.get('/calculations', (req, res) => {
  console.log('we got a get req', calculations);
  res.send(calculations);
});

// POST /calculations
app.post('/calculations', (req, res) => {
  console.log('we got a post req');
  let newMath = req.body
  console.log(newMath);
  //pushes the data into the array
  calculations.push(newMath)

//gets the last object in that array
let newestResult = calculations[calculations.length-1];

//does the math
newestResult.result = doingCalc(newestResult.numOne, newestResult.numTwo, newestResult.operator);

console.log('this should be the result', newestResult.result);
console.log('this should be the calc array', calculations);

  res.sendStatus(201)
});

// PLEASE DO NOT MODIFY ANY CODE BELOW THESE BEARS:
// 🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸

// This starts the server...but also stores it in a variable.
// This is weird. We have to do it for testing reasons. There
// is absolutely no need for you to reason about this.
const server = app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});

// server.setTimeout(500)

// This is more weird "for testing reasons" code. There is
// absolutely no need for you to reason about this.
app.closeServer = () => {
  server.close();
}

app.setCalculations = (calculationsToSet) => {
  calculations = calculationsToSet;
}

module.exports = app;
