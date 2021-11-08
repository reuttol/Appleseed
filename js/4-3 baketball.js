const prompt = require("prompt-sync")({ sigint: true });

const AVG = (a,b,c) => (a+b+c)/3;

function findWinner(team1, team2){
    if(team1 > team2)
        return 1;
    else if(team2> team1)
        return 2;
    return 0;
}

let johnAVG = AVG(9, 120, 103);
let mikeAVG = AVG(116, 94, 123);
let maryAVG = AVG(97, 134, 102)

console.log(`John's team avrage is: ${johnAVG}.`);
console.log(`Mike's team avrage is: ${mikeAVG}.`);
console.log(`Mary's team avrage is: ${maryAVG}.`);

let winner = findWinner(mikeAVG, johnAVG);
let winner2 = findWinner(mikeAVG, maryAVG);

if(winner === 1 && winner2 === 1){
    console.log(`Mike's team is the winner with a score of: ${mikeAVG}`);
}
else if(winner === 0 && winner2 === 0){
    console.log(`all teams tied at the top with a score of: ${mikeAVG}`);
}
else if(winner === 1){
    if(winner2 == 2)
        console.log(`Mary's team is the winner with a score of: ${maryAVG}`);
    if(winner2 === 0)
        console.log(`Mary and Mike teams won with a score of: ${mikeAVG}`);
}
else if(winner2 === 1){
    if(winner2 === 2)
        console.log(`John's team is the winner with avarage of: ${johnAVG}`);
    if(winner2 === 0)
    console.log(`John and Mike teams won with a score of: ${mikeAVG}`);
}
else if(winner === 0){
    if(winner2 === 1)
        console.log(`John and Mike teams won with a score of: ${mikeAVG}`);
    if(winner2 === 2){
        console.log(`Mary's team is the winner with a score of: ${maryAVG}`);
    }
}
