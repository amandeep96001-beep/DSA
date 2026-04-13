
const arr = [23,23,5,23,23,5,2354,2,523];

const findMax = (arr) => {
    if(arr.length === 0) return;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax(arr));
