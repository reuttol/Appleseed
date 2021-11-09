let people = ['Greg', 'Mary', 'Devon', 'James'];

console.log('1. Printing people names:');
for(let i=0; i<people.length; i++){
    console.log(people[i]);
}

console.log('2. remove from start');
people.shift();
console.log(people);

console.log('3. remove from end');
people.pop();
console.log(people);

console.log('4. add to start');
people.unshift('Matt');
console.log(people);

console.log('5. add to end');
people.push('Reut');
console.log(people);

console.log('6. stop at the middle of a loop');
for(let i=0; i<people.length; i++){
    console.log(people[i]);
    if(people[i] === 'Mary')
        break;
}

console.log('7. using slice');
console.log(people.slice(2));

console.log('8. find index of name in the array');
console.log(people.indexOf('Mary'));

console.log('9. index of not found element');
console.log(people.indexOf('foo'));

console.log('10. index of not found element');
people = ['Greg', 'Mary', 'Devon', 'James'];
people.splice(2,1,'Elizabeth', 'Artie');
console.log(people);

console.log('11. concat');
let withBob = people.concat(['Bob']);
console.log(withBob);