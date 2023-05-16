// let btnClck = document.querySelectorAll('button');
// let newArray = [];
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
        // factor1 = answer;
      } 
      // else if (factor2 != '') {
        // factor1 = answer;
      // }
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
      
    switch(operand) {
      case '+':
        answer = parseInt(factor1) + parseInt(factor2) ;
        inputValue.value = answer;
        break;
      case '-':
        answer = parseInt(factor1) - parseInt(factor2);
        inputValue.value = answer;
        break;
      case '*':
        answer = parseInt(factor1) * parseInt(factor2);
        inputValue.value = answer;
        break;
      case '/':
        answer = parseInt(factor1) / parseInt(factor2);
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
      // inputValue.value = '';
      factor2 = inputValue.value + e.target.textContent;
      inputValue.value = factor2;
    }
  } 
})


