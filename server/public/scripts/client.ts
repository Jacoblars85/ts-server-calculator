import axios from "./axios";

console.log('client.ts is sourced!');



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