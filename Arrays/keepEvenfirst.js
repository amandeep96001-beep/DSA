function keepEvenFirst(arr) {
    
    let left = 0;
    let right = arr.length -1;
    
    while(left < right){
        if(arr[left] % 2 !==0 && arr[right] % 2 === 0){
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }  else if(arr[left] % 2 === 0){
            left++;
        }
        else{
            right--;
        }
    }
    return arr;
    
}

const arr = [3,4,5,6,7,9,8];

const fn = keepEvenFirst(arr);
console.log(fn);
