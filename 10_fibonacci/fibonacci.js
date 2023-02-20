const fibonacci = function(n) {
    if(n < 0) {
        return "OOPS";
    }
    let arr = [];
    arr.push(1);
    arr.push(1);
    let i = 0;
    let j = 1;
    while(arr.length < n) {
        arr.push(arr[i] + arr[j]);
        i++;
        j++;
    }
    return arr[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
