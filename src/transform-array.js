import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
  let arr2=arr;
  try{
    arr.splice(0,0);
}
catch{
    throw new Error ('\'arr\' parameter must be an instance of the Array!');
}


for(let i=0;i<arr.length;i++){
    if(arr[i]=='--discard-next'){
        if(arr[i+1]){
        arr.splice(i+1,1);
        arr.splice(i,1);
        }
        else arr.splice(i,1);
    }
    else if(arr[i]=='--discard-prev'){
        if(arr[i-1]){
        arr.splice(i-1,1);
        arr.splice(i-1,1);
        }
        else arr.splice(i,1);
    }
    else if(arr[i]=='--double-next'){
        if(arr[i+1]){
        arr[i]=arr[i+1]
        }
        else{
            arr.splice(i,1);
        }
        // arr.splice(i,1);
        // continue;
    }
    else if(arr[i]=='--double-prev'){
        if(arr[i-1]){
            arr[i]=arr[i-1];
        // arr.splice(i-1,0,i-1);
        // arr.splice(i,1);
        }
        else{
            arr.splice(i,1);
        }
    }
}
return arr;
}
