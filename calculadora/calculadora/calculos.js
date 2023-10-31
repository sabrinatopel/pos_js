/**
 * operator: '+', '-', '*', '/'
 */
function calculos(operand1, operand2, operator) {
    switch (operator) {
      case '+':
        return parseInt(operand1) + parseInt(operand2);
      case '-':
        return operand1 - operand2;
      case '*':
        return operand1 * operand2;
      case '/':
        return operand1 / operand2;
    }
  }
  
  function calcWithEval(operand1, operand2, operator) {
    return eval(operand1 + operator + operand2);
  }
  
  export { calculos, calcWithEval };