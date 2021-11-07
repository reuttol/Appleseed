
function area(radius){
	return Math.PI * radius * radius;
}

let answer = area(5);

console.log(`calculated area: ${answer}, rounded area: ${answer.toFixed(2)}`);