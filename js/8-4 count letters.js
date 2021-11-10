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