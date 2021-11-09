const passValidate = pass =>{
    if(pass.length < 7)
        return "Weak";
    else
        return "Strong";
}

const passValidateTernary = pass => pass.length<7 ? "Weak" : "Strong";
const passValidateAnd = pass => pass.length<7 && "Weak" || "Strong";

function advancedPassValidate (pass){
    if(pass.length < 7)
        return "Weak";
    else if(pass.toLowerCase() === pass)
        return "Strong";
    else
        return "Very Strong";
}
console.log('------------------');
console.log(passValidate("mypass"));
console.log(passValidate("thisismypass"));

console.log('------------------');
console.log(passValidateTernary("mypass"));
console.log(passValidateTernary("thisismypass"));

console.log('------------------');
console.log(passValidateAnd("mypass"));
console.log(passValidateAnd("thisismypass"));

console.log('------------------');
console.log(advancedPassValidate("mypass"));
console.log(advancedPassValidate("thisismypass"));
console.log(advancedPassValidate("thisISmypass"));