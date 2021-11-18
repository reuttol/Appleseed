function getSum(arr1, arr2){
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
        sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
        sum += arr2[i];
    }
    return sum;
}
const result = getSum([1,2,3],[5,66,23]);
console.log(result);

//! problems with this code:
/** 
 * * 1. the sum variable is defined as const and therefore cannot be changed.
 * * 2. there is no return statement from getSum function.
 * * 3. there is a comma missing between the two arrays in the getSum innvocation.
 * * 4. the returned value from getSum is not logged or saved.  
 */