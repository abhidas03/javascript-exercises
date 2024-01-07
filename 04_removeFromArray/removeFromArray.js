var removeFromArray = function(array, ...args) {
  return array.filter((item) => !args.includes(item))
}
console.log(removeFromArray(['a', 'b', 'c', 'd'], 'c', 'd'));
// Do not edit below this line
module.exports = removeFromArray;

