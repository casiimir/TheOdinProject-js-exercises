const reverseString = function(value) {
  let reversedString = [];
  for (let i = 0; i <= value.length - 1; i++) {
    reversedString.unshift(value[i]);
  }
  return reversedString.join('');
}

module.exports = reverseString
