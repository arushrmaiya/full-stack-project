const sumAll = function(start, end) {

    if(!Number.isInteger(start) || !Number.isInteger(end) || start <0){
        return "ERROR";
    }

    let total = 0;

    start_ = Math.min(start, end);
    end_ = Math.max(start, end);

    for(let i = start_; i<end_+1; i++){
        total+=i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
