const addAllNumbers = function(num) {
    let sum = 0;
    for(i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
};

console.log(addAllNumbers(600));