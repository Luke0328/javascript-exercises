const findTheOldest = function(arr) {
    return arr.reduce((res, item) => {
        const curr = new Date().getFullYear();
        let age1;
        let age2;
        if(!("yearOfDeath" in res)) {
            age1 = curr - res.yearOfBirth;
        }
        else {
            age1 = res.yearOfDeath - res.yearOfBirth;
        }
        if(!("yearOfDeath" in item)) {
            age2 = curr - item.yearOfBirth;
        }
        else {
            age2 = item.yearOfDeath - item.yearOfBirth;
        }
        if(age2 > age1) {
            return item;
        }
        return res;
    }, arr[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
