const sumAll = function(lowest, highest) {
  let sumResult = 0;
  if (lowest < 0 || highest < 0 ||
      typeof lowest !== 'number' ||
      typeof highest !== 'number') return 'ERROR';
  if (lowest <= highest) {
    for (; lowest <= highest; lowest ++) {
      sumResult += lowest;
    }
  } else {
    for (; highest <= lowest; highest ++) {
      sumResult += highest;
    }
  }
  return sumResult;
}

module.exports = sumAll
