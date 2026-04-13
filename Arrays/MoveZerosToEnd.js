

const arr = [3,3,0,56,0,2,234,2];


function MoverZerosToEnd(arr){
    let j = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;
        }
    }
  
    return arr;

};

const fn = MoverZerosToEnd(arr);
console.log(fn)