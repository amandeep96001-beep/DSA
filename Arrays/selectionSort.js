

const arr = [234,34,2,5,36,1234,6,1234];

function sort(arr){
    
    if(arr.length === 0) return;
    for(let i = 0; i < arr.length; i++){
        let min = i;
    for(let j = i + 1; j < arr.length; j++)    {
        if(arr[j] < arr[min]){
            min = j;
        }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    
    return arr;
    
}

console.log(sort(arr));