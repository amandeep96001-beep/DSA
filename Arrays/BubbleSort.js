const arr = [9,8,7,6,55,3,56,8,9,0,7,5,3];

function sort(arr){
    if(arr.length === 0) return;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i -1 ; j++){
            console.log(j,i)
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                
            }
        }
    }
    return arr;
    
}
console.log(sort(arr));