const repeatString = function(str, numTimes) {
    newStr = '';
    if (numTimes >= 0) {
        newStr = str.repeat(numTimes);
        return newStr;
    }
    
    return 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;
