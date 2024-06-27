function findRotatedIndex(arr, target) {
    function findPivot(arr){
        let left = 0;
        let right = arr.length - 1;

        if (arr[left] < arr[right]){
            return 0;
        }

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] > arr[mid + 1]) {
                return mid + 1;
            }

            if (arr[mid - 1] > arr[mid]) {
                return mid;
            }

            if (arr[mid] >= arr[left]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return 0; // Default return if no pivot is found
    }

    function binarySearch(arr, left, right, target){
        while (left <= right){
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === target){
                return mid;
            } else if (arr[mid] < target){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }

    let pivot = findPivot(arr);

    if (pivot === 0){
        return binarySearch(arr, 0, arr.length-1, target);
    }

    if (arr[pivot] === target){
        return pivot;
    }

    if (target >= arr[0]){
        return binarySearch(arr, 0, pivot - 1, target);
    } else {
        return binarySearch(arr, pivot, arr.length - 1, target);
    }
}

module.exports = findRotatedIndex;


module.exports = findRotatedIndex
