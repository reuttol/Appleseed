
let arr1 = Array(100).fill(5);
console.log(arr1);

let arr2 = Array.from({length: 100}, (v, i) => i);
console.log(arr2);

let obj = {
    name : "Rina",
    country : "Israel",
    born : "1975"
}

let arr3 = Object.values(obj);
console.log(arr3);

let arr4 = ['1','2','3'];
console.log(Object.assign({}, arr4));
console.log(Object.assign({...arr4}));

console.log(Array.isArray(arr4));

console.log('Seprate copy:');
let arr5 = [...arr4];
arr5.push('4');
console.log(`arr4: ${arr4}, arr5: ${arr5}`);

console.log('Same refrence:');
let arr6 = arr4;
arr6.push('5');
console.log(`arr4: ${arr4}, arr6: ${arr6}`);