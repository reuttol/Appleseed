const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function countLetters(arr){
    const letters = {};
    for(word of arr){
        word = word.toLowerCase();
        for(c of word){
            if(c === ' ')
                continue;
            if(!letters[c])
                letters[c] = 1;
            else 
                letters[c]++;
        }
    }
    return letters;
}

console.log(countLetters(array));

//* Mordi's solution
// const array = ['Hello', 'Good Day', 'Your Welcome', 'hotdog', 'hamburgers'];
// const func = (arr) => {
//   const obj = { count: { letter: '', frequency: 0 } };
//   [...arr.join('').split(' ').join('').toLowerCase()].forEach((char) => {
//     obj[char] ? obj[char]++ : (obj[char] = 1);
//     obj[char] > obj.count.frequency &&
//       obj.count.frequency++ &&
//       (obj.count.letter = char);
//   });
//   return obj;
// };
// console.log(func(array));
