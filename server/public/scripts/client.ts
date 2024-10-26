console.log("client.ts is sourced!");

let result: number = 0;
let operator: string = "";

//the GET route for the math
function getCalc() {
  axios({
    url: "/calculations",
    method: "GET",
  }).then((response) => {
    renderingMath(response.data);
    console.log("this data is being rendered", response.data);
  });
}

//Renders the math onto the screen below
function renderingMath(calculations) {
  console.log("were rendering");

  //finding the spot to put the new math
  let recentResult: any = document.getElementById("recentResult");
  let resultHistory: any = document.getElementById("resultHistory");

  //clearing previous spot for this area
  resultHistory.innerHTML = "";
  recentResult.innerHTML = "";

  //   adds to the newest math that was just done
  recentResult.innerHTML += `
        <b>${calculations[calculations.length - 1].result}</b>
      `;
  for (let calc of calculations) {
    //should add all of the recent resaults into this part
    resultHistory.innerHTML += `
          <ol>${calc.numOne} ${calc.operator} ${calc.numTwo} = ${calc.result}</ol>
          `;
  }
}

function postMath(event) {
  event.preventDefault();

  //grabs the input and makes it a variable
  let numOne = document.getElementById("numOne") as HTMLInputElement;
  let numTwo = document.getElementById("numTwo") as HTMLInputElement;
  operatorButton(event);

  //puts the input into an object
  let newMath = {
    numOne: numOne.valueAsNumber,
    operator: operator,
    numTwo: numTwo.valueAsNumber,
    result: result,
  };

  console.log(newMath);

  axios({
    method: "POST",
    url: "/calculations",
    data: newMath,
  }).then((response) => {
    console.log("did this work?");
    getCalc();
  });

  //clears the inputs
  numOne.value = "";
  numTwo.value = "";
}

//figures out which operator got clicked
function operatorButton(event, op) {
  console.log("we are clicking operator button");
  event.preventDefault();

  if (op === "+") {
    operator = "+";
    console.log(operator);
  } else if (op === "-") {
    operator = "-";
    console.log(operator);
  } else if (op === "*") {
    operator = "*";
    console.log(operator);
  } else if (op === "/") {
    operator = "/";
    console.log(operator);
  }
  return operator;
}

getCalc();
