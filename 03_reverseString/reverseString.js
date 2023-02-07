const reverseString = function(input) {
    let rev = "";
    for(let i = input.length - 1; i >= 0; i--) {
        rev += input[i];
    }
    return rev;
};

// Do not edit below this line
module.exports = reverseString;
