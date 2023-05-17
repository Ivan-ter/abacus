
let operand = '';
let factor1 = '';
let factor2 = '';
let answer = '';
let inputValue = document.getElementById("inputnumb");

document.querySelector('.buttons').addEventListener('click', function(e){

  if (e.target.matches('.operator')) {
      if(inputValue.value == '' && factor1 == '' && factor2 == '' && answer == '') {
          factor1 = 0;
          inputValue.value == '';
      } 
      else if (answer != '' && factor1 != '' && factor2 == '') {
        factor2 = 0;
      } 
      operand = e.target.textContent;
      inputValue.value = operand;
      inputValue.value = '';
      
  } 
  
  else if (e.target.matches('#del')) {
    inputValue.value = inputValue.value.slice(0, -1);
  } 
  
  else if (e.target.matches('#clear')) {
    inputValue.value = '';
    factor1 = '';
    factor2 = '';
    answer = '';
    operand = '';
  } 
  
  else if(e.target.matches('.equals')) {
    if(factor1.includes('.') || factor2.includes('.')) {
      factor1 = parseFloat(factor1);
      factor2 = parseFloat(factor2);

    } 
    switch(operand) {
      case '+':
        answer = factor1 + factor2;
        inputValue.value = answer;
        break;
      case '-':
        answer = factor1 - factor2;
        inputValue.value = answer;
        break;
      case '*':
        answer = factor1 * factor2;
        inputValue.value = answer;
        break;
      case '/':
        answer = factor1 / factor2;
        inputValue.value = answer;
        break;
    }
      factor1 = answer;
  } 
  
  else {
    if (operand == '') {
      factor1 = inputValue.value + e.target.textContent;
      inputValue.value = factor1;
    } 
    else {
      factor2 = inputValue.value + e.target.textContent;
      inputValue.value = factor2;
    }
  } 
})


