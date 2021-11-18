//* block 1:
// 0 - function immediateB dosen't use b at all it gets the a value from immediateA parent function.

//* block 2:
// 1 - count in function immediate if block is shaddowed and set to 1
// 0 - count now refers to global scope 

//* block 3:
// bar 
// bam 
// module returns publicInterface. publicInterface.bar return bar and the value is loged.
// publicInterface.bam calls addToFoo which saves it to foo and returns it.

//* block 4:
// count is 0 - the message: `Count is ${count}` is evaluated when let message is defined and only once.
// then log calls the message after it has already been set.
