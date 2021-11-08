const prompt = require("prompt-sync")({ sigint: true });

function gradeAssigner(grade){
    let score;
    if(grade < 0 || grade > 100){
        return "Invalid grade!";
    }

    if(grade < 65){
        score = "F";
    }else if( grade < 70){
        score = "D";
    }else if(grade < 80){
        score = "C";
    }else if(grade < 90){
        score = "B";
    }else{
        score = "A";
    }
    return score;
}

let input = prompt("please enter a grade: ");
console.log(gradeAssigner(input));