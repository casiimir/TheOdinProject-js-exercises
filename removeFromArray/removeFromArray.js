var removeFromArray = function(...args) {
  const array = args[0]
  return array.filter(val => !args.includes(val))
}

removeFromArray([1, 2, 3, 4], 7, 2)
module.exports = removeFromArray