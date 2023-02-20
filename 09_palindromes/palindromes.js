const palindromes = function (word) {
    const l_word = word.toLowerCase().replace(/[^a-z]/g, "");
    console.log(l_word);
    let l = 0;
    let r = l_word.length - 1;
    while(l < r) {
        if(l_word[l] != l_word[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
