
//* Section 1
function isString(str, func){
    if(typeof str === 'string')
        func(str);
}

isString("Print Me", console.log);

//* Section 2
function frstWordUpperCase(str, func){
    const words = str.split(' ');
    words[0] = words[0].toUpperCase();

    return func(words);
}

const dashedStr = (words) => words.join("-");

console.log(frstWordUpperCase("dash this sentence!", dashedStr));

//* Section 3
const powers = (x, y) => x**y;

function compute(arr1, arr2, func){
    const result = [];
    for(let i=0; i<arr1.length; i++){
        result.push(func(arr1[i], arr2[i]))
    }
    return result;
}

console.log(compute([1,2,3,4,5,6], [6,5,4,3,2,1], powers));