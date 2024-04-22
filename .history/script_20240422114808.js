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

function reset() {
document.getElementById('num1').value = '';
document.getElementById('operator').selectedIndex = 0;
document.getElementById('num2').value = '';
}

