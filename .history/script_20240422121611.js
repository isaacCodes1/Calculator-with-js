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
// var v1 = document.getElementById('num1');
function reset() {
document.getElementById('num1').value = '';
document.getElementById('operator').selectedIndex = 0;
document.getElementById('num2').value = '';
}

// function calculate(){
//     console.log('num1')
// }

document.getElementById('chuks').style.color="blue"

var display= show(document.getElementsByClassName("display")){
  console.
}