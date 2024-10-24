import axios from "./axios";

console.log('client.ts is sourced!');

let result = 0;
let operator = '';



//the GET route for the math
function getCalc() {
    axios({
        url: '/calculations',
        method: 'GET'
      }).then((response) => {
        let calculations = response.data 
        renderingMath(calculations)
        console.log('this data is being rendered', calculations);
      })
  
  }


  //figures out which operator got clicked
function operatorButton(event, op) {
    console.log('we are clicking operator button');
    event.preventDefault();
  
    if (op === '+') {
      operator = '+'
      console.log(operator);
    } else if (op === '-') {
      operator = '-'
      console.log(operator);
    } else if (op === '*') {
      operator = '*'
      console.log(operator);
    } else if (op === '/') {
      operator = '/'
      console.log(operator);
    } 
    return operator;
  }

  getCalc()