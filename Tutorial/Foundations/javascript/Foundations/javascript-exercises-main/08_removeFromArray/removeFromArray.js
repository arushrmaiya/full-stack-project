const removeFromArray = function(arr, ...elem) {
    let brr = arr.filter((num) => !elem.includes(num));
    // console.log(brr);
    return brr;
};

// Do not edit below this line
module.exports = removeFromArray;
