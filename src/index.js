module.exports = function reverse (n) {
  const str = n.toString().split();
  n.reverse();
  return Number(n.reverse().toString());
}
