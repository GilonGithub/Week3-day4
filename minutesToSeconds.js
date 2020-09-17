const minToSec = function(min) {
    return (min * 60).toFixed(2) + " seconds.";
}

console.log(minToSec(1.52));