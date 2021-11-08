
function calcLeapYear(year){
    return (year%4 === 0) && ((year%400 === 0 ) || (year%100 !== 0));
}

console.log("1900 " + calcLeapYear(1900) );
console.log("1604 " + calcLeapYear(1604) );
console.log("1954 " + calcLeapYear(1954) );
console.log("1688 " + calcLeapYear(1688) );
console.log("1700 " + calcLeapYear(1700) );
console.log("2000 " + calcLeapYear(2000) );
console.log("2012 " + calcLeapYear(2012) );
console.log("1922 " + calcLeapYear(1922) );
console.log("1920 " + calcLeapYear(1920) );