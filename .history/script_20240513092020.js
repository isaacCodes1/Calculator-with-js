function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var operator = document.getElementById('operator').value;
    var num2 = parseFloat(document.getElementById('num2').value);
  
    var result;
  
    switch (operator) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          console.log('Error: Division by zero');
          return;
        }
        break;
      default:
        console.log('Error: Invalid operator');
        return;
    }
  
  
    
console.log('Result:', result);
}
