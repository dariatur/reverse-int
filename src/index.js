module.exports = function reverse (n) {
    let str =  Math.abs(n).toString().split("");
    str = str.reverse();
    return Number(str.join(''));
}
