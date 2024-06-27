function sortedFrequency(arr, target) {
    function findFirst(arr, target){
        let left = 0;
        let right = arr.length-1;
        let first = -1;

        while (left <= right){
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] === target){
                first = mid;
                right = mid - 1;
            } else if (arr[mid] < target){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return first;
    }

    function findLast(arr, target){
        let left = 0;
        let right = arr.length-1;
        let last = -1;

        while (left <= right){
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] === target){
                last = mid;
                left = mid + 1;
            } else if (arr[mid] < target){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return last;
    }

    const first = findFirst(arr, target);
    if (first === -1){
        return 0;
    }
    const last = findLast(arr, target);
    return last-first+1;
};

module.exports = sortedFrequency