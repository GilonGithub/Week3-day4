const hrToSec = function(hr) {
    return (hr * 60 * 60).toFixed(4) + " seconds.";
}

console.log(hrToSec(1.5000));