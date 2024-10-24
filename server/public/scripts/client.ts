console.log('client.ts is sourced!');

let result = 0;
let operator = '';

//the GET route for the math
function getCalc() {
    axios({
        url: '/calculations',
        method: 'GET'
      }).then((response) => {
        renderingMath(response.data)
        console.log('this data is being rendered', response.data);
      })
  }

  //Renders the math onto the screen below
function renderingMath(calculations) {
    console.log('were rendering');
    
    //finding the spot to put the new math
    let recentResult = document.getElementById('recentResult');
    let resultHistory = document.getElementById('resultHistory');

        //clearing previous spot for this area
        // resultHistory.innerHTML = ''
        // recentResult.innerHTML = '';
      
      //   adds to the newest math that was just done
    //     recentResult.innerHTML += `
    //     <b>${calculations[calculations.length-1].result}</b>
    //   `
        for (let calc of calculations) {
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