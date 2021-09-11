import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let count =1;
    let max=1;
    let calc =(arr)=>{
    for(let i=0;i<arr.length;i++){
        if(!Array.isArray(arr[i])) continue;
        else {
            count++;
            if(count>max)max=count;
            calc(arr[i])
        }
        
    }
    count=1;
}
calc(arr);
    return max;

  }
}
