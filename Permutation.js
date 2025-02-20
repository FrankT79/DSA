let array0 = [3,2,1];
let array1 = [1,2,3,6,5,4];
let array2 =  [3,4,2,5,1];


function permutation(arr){
    let n = arr.length-1;

    let pivot = -1;

    //find pivot index

    for(let i= n; i>=0; i--){
        if(arr[i] > arr[i-1]){
            pivot = i-1;
            break;
        }
    }

    // if no pivot - reverse the array
    if(pivot == -1){
        arr.reverse();
        return arr;
    }
    else{

    //find element from the right that is greater than pivot
    for(let i = n; i>pivot; i--){
        if(arr[i] > arr[pivot]){
            [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
            break;
        }
    }

    //reverse the element from pivot to the right

    let left = pivot+1;
    let right = n;

    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left ++;
        right --;

    }
    return arr;
}}

console.log(permutation(array0))
console.log(permutation(array1))
console.log(permutation(array2))
