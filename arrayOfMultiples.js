const arrayOfMultiples = function(num, length) {
    let newArr = [num];

    for(i = 2; i <= length; i++) {
        newArr.push(num * i);
    }

    return newArr;
};

console.log(arrayOfMultiples(12,10));
console.log(arrayOfMultiples(17,6));