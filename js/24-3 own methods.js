// Array.prototype = {
//     myFilter(callback){
//         const newArr = [];
//          this.forEach((element) => {
//              if(callback(element))
//                 newArr.push(element);
//          });
//          return newArr;
//     },
//     myFind(callback){
//          this.forEach((element) => {
//              if(callback(element))
//                return element;
//          });
//          return -1;
//     },
//     myReduce(callback, initialValue=0){
//         let accumulator = initialValue;
//         this.forEach((element) =>{
//             accumulator += element;
//             callback(accumulator);
//         });
//         return accumulator;
//     }
// }

Array.prototype.myFilter = function(callback){
    const newArr = [];
    this.forEach((element) => {
        if(callback(element))
            newArr.push(element);
    });
    return newArr;
}
Array.prototype.myFind = function(callback){
    for(let i = 0; i < this.length; i++) {
        if (callback(this[i])) 
            return this[i];
      }
    return -1;
}
Array.prototype.myReduce = function(callback, initialValue=0){
    let accumulator = initialValue;
    this.forEach((element) =>{
        accumulator += element;
        callback(accumulator);
    });
    return accumulator;
}

const arr = [1,2,3,4,5,6,7,8,9,10];

console.log(arr.myFilter((val) => val%2 === 0));
console.log(arr.myFind((val) => val+10 >19));
console.log(arr.myReduce((previousValue, currentValue) => previousValue + currentValue));