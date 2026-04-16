const arr = [3,23,5,23,5,6,7,345,234,34];

function findSecondMax(arr) {
    if(arr.length < 2)  return null;
    
    let max = arr[0];
    let secondMax = null;
    for(let i = 1; i < arr.length; i++){
        let current = arr[i];
        if(current > max){
            secondMax = max;
            max = current;
        }else if (current  < max && (current > secondMax || secondMax === null)){
            secondMax = current;
        }
    }
    return secondMax;
}
const fn = findSecondMax(arr);
console.log("This is the second max",fn);