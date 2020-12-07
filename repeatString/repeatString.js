const repeatString = function(string, nTimes) {
  let newString = '';
  if (nTimes < 0) return ('ERROR');
  for (let i = 0; i < nTimes; i++){
    newString += string;
  }
  return newString;
}

module.exports = repeatString
