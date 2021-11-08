const prompt = require("prompt-sync")({ sigint: true });

let siblings = prompt("'How many siblings do you have?  ");
siblings = parseInt(siblings);

if(siblings === 1){
    console.log('1 sibling!');
}
else if(siblings > 1){
    console.log('More than 1 sibling!');
}
else{
    console.log('No siblings');
}
