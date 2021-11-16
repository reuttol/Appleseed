//* 1.
const objArr = [
    {
        name: 'Elie',
        age: 27
    },
    {
        name: 'Tim',
        age: 15
    },
    {
        name: 'David',
        age: 35
    },
    {
        name: 'John',
        age: 55
    }
];

function extractOnlyValue(arr, key){
    return arr.reduce((names, obj) => {
       names.push(obj[key]);
        return names;
    }, []);
}

console.log(extractOnlyValue(objArr, "name"));


//* 2.
function countOnlyVowels(str){
    const vowels = 'aeoiu'.split('');

    return str.split('').reduce((count, c) => {
        if(vowels.includes(c)) count[c] = count[c]+ 1 || 1;
        return count;
    }, {});
}

console.log(countOnlyVowels("reuuuutt"));