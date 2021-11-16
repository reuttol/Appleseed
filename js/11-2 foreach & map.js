
//* 1. Double values in array
function doubleValues(arr){
    return arr.map((x) => (x*2));
}

console.log(doubleValues([12,13,14,55,76,99]));

//* 2. Return even values in array
const onlyEvenValues = (arr) => {
    const even = [];
    arr.forEach((element) => {
        element%2 || even.push(element);
        // if (element % 2 === 0) even.push(element);
     });
     return even;
}

console.log(onlyEvenValues([12,13,14,55,76,99]));

//* 3. Return first and last string in array
function showFirstAndLast(arr){
    const filtered = arr.filter(element => typeof element === 'string');
    const result = [];
    filtered.forEach((element, index, originalArray) => {
        if (index === originalArray.length - 1 || index === 0)
          result.push(element);
      });
      return result;
}

console.log(showFirstAndLast([1,2,"string", "t", 4.5]));
console.log(showFirstAndLast(["1",2,"string", "t", 4.5, ""]));
console.log(showFirstAndLast([1,2,"string", "t", 4.5, ""]));

//* 4. Count vowel in string
function vowelCount(str){
    const vowels = "aeiou".split('');
    const vowelsObj = {};
    
    const words = str.split("");
    words.forEach((letter) =>{
        if(vowels.includes(letter))
            vowelsObj[letter] = vowelsObj[letter] + 1 ||  1;  
    });
    return vowelsObj;
}

console.log(vowelCount('reeuuuuuut'));

//* 5. Capitalize all letters in a string
const capitalize = (str) => str.split('').map(c => c.toUpperCase()).join(''); 

console.log(capitalize("this is ma string!"));

//* 6. Encode string by moving each char down by one in alphabeit
const shiftLetters = (str) => str.split('').map(c => {
        if (c === 'a') return 'z'; 
        return String.fromCharCode(c.charCodeAt(0) -1)
    }).join('');

const shiftLetters2 = (str) =>{
    const arr = str.split('');
    const result = [];

    arr.forEach(c => {
        if (c === 'a') 
            result.push('z');
        else{
            const subtractted = c.charCodeAt(0) -1;
            result.push(String.fromCharCode(subtractted));
        }
        
    });
    return result.join('');
}
         
console.log(shiftLetters("ReutFarkash"));
console.log(shiftLetters2("ReutFarkash"));

//* 7. Capitilize every other word in a string
const swapCase = (str) => {
    const words = str.split(' ');
    const result = [];

    words.forEach((word, index) => index%2 && result.push(word) || result.push(word.toUpperCase()));
    // words.forEach((word, index) => index%2 ? result.push(word) : result.push(word.toUpperCase()));

    return result.join(' ');
}

console.log(swapCase("this is a very long string to test me function..."));