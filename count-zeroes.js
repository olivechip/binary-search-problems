function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let count = 0;
    while (leftIdx <= rightIdx){
        let middleIdx = Math.round((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal === 0){
            count = arr.length - middleIdx;
            rightIdx = middleIdx - 1;
        } else {
            leftIdx++;
        }
    }
    return count;
}

module.exports = countZeroes