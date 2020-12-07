function add (first, second) {
  return first + second;
}

function subtract (first, second) {
	return first - second;
}

function sum (numbers) {
  let result = 0;
  numbers.map(num => result += num);
  return result;
}

function multiply (numbers) {
  let result = 1;
  numbers.map(num => result *= num);
  return result;
}

function power(num, pow) {
	return (num ** pow);
}

function factorial(numbers) {
  let result = 1;
  for (let i=1; i <= numbers; i++) {
    result *= i;
  }
return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
  power,
	factorial
}