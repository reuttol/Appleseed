function lengthOfWords(arr){
    let wordLength = [];
    for(let i=0; i<arr.length; i++){
        wordLength[i] = arr[i].length;
    }
    return wordLength;
}


console.log(lengthOfWords(["boo", "doooo", "hoo","ro"]));
console.log(lengthOfWords(["reut", "sivan", "halel","hello", "outside"]));