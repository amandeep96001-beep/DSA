
const arr = [3,5,2,6,7,8,1,54];
function quickSort(arr){
  if(arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  
  let left = [], right = [];

  for(let i = 0; i < arr.length - 1; i++){
    //   console.log(arr[i], pivot)
    //   console.log(left, right)
    if(arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(arr)
const fn = quickSort(arr);
console.log(fn)