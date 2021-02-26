exports.min = function min(array) {
    let min = 0;
    if (typeof array == 'undefined' || array.length == 0) {
        return 0;
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        return min;
    }
}

exports.max = function max(array) {

    if (typeof array == 'undefined' || array.length == 0) {
        return 0;
    } else {
        let maxValue = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > maxValue) {
                maxValue = array[i];
            }
        }
        return maxValue;
    }
}

exports.avg = function avg(array) {
    if (typeof array == 'undefined' || array.length == 0) {
        return 0;
    } else {
        let kol = array.length;
        let sumValue = 0;
        for (let i = 0; i < array.length; i++) {
            sumValue += array[i];
        }
        let avgValue = sumValue / kol;
        return avgValue;
    }
}
