const integerToBinary = function(num) {
    let ansArr = [];
    
    if (num <= 255 && num > 0) {
        while(num >= 1) {
            num % 2 === 0 ? ansArr.push('0') : ansArr.push('1');
            num = parseInt((num/2));
        }

            return ansArr.reverse().join('');
    } else {
            return 'invalid number';
    }
}

console.log(integerToBinary(-1));