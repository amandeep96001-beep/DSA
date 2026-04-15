const arr = [];

function removeDuplicates(arr) {
    let seen =  Object.create(null);
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(seen[arr[i]]){
            continue;
        }
        seen[arr[i]] = true;
        result.push(arr[i]);
    }
    return result;
}

const fn = removeDuplicates(arr);
console.log(fn)