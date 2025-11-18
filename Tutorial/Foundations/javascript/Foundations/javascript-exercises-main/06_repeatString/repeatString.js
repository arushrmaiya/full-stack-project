const repeatString = function(str, num) {

    if(num<0) return "ERROR";
    let retstr = "";
    for(let i = 0; i<num; i++){
        retstr += str;
    }

    return retstr;
};

// Do not edit below this line
module.exports = repeatString;
