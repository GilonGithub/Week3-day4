const cToF = function (unit, temp) {

    return (temp === 'c' ? (unit * (9/5) + 32).toFixed(2).toString() + ' F' :
           (temp === 'f' ? ((unit - 32) * (5/9)).toFixed(2).toString() + ' C' : 'invalid temp'));
}

console.log(cToF(1,'c'));
console.log(cToF(50,'f'));