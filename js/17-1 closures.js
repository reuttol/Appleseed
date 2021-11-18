//* block 1:
// 5 - the parameters passed to someFunction and otherFunction are never used, someFunction 
//  sets b to 5.

//* block 2:
// 10 - in b2 a is redefined as a local variable and doesn't chanfe the value of
// the global a, therefore a is 1 and remains unchanged.

//* block 3:
// 3
// 3
// 3
// set timeout pauses log from executing. it runs only after the loop has ended
// and i is equal to 3.