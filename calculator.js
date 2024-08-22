// Functions to find Mean, Median, or Mode in given Array

    // // EDGE CASES
    // if (arr.length === 0) {
    //     return undefined;
    // } 



function findMean(arr){
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }

    return sum / arr.length;
}



function findMedian(arr){
    let sortedArr = arr.sort((a, b) => a - b);

    if (arr.length % 2 === 0) {
        let middleLoIndex = sortedArr[(sortedArr.length / 2) - 1];
        let middleHiIndex = sortedArr[(sortedArr.length / 2)];

        return (middleLoIndex + middleHiIndex) / 2;
    } else {
        return sortedArr[Math.floor(sortedArr.length / 2)]
    }
}


function findMode(arr){
    // FUNCTION
    const numFreq = {};
    let highestFreq = 0;
    let mode = [];

    for (let num of arr) {
        if (numFreq[num] === undefined) {
            numFreq[num] = 1;
        } else {
            numFreq[num]++
        }
    }

    for (let num in numFreq) {
        if (numFreq[num] > highestFreq) {
            highestFreq = numFreq[num];
        }
    }

    for (let num in numFreq) {
        if (numFreq[num] === highestFreq) {
            mode.push(num);
        }
    }

    return mode;
}



function validateAndConvertQuery(query){
    let numArr = query.split(',');
    let returnArr = [];

    for (let num of numArr) {
        let toNum = Number(num);

        if (Number.isNaN(toNum)) {
         return new Error(
             `Array contains invalid element: ${num} is NaN`
         );
        }
        returnArr.push(toNum);
     }

     return returnArr;
}

// EXPORT

module.exports = {
    findMean,
    findMedian,
    findMode,
    validateAndConvertQuery
};