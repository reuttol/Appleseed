
function getDay(date){
	return date.toLocaleString('en-GB', { weekday: 'long' });
}

function getDayOfMonth(date){
	return date.getDate();
}

function getMonth(date){
	return date.getMonth()+1;
}

function getYear(date){
	return date.getFullYear();
}

function printDate() {
	let date = new Date();
  return `Today is ${getDay(date)} the ${getDayOfMonth(date)} of ${getMonth(date)}, ${getYear(date)} `;
}


console.log(printDate());