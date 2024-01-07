const reverseString = function(str) {
    strArr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        strArr.push(str[i]);
    }

    return str.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
