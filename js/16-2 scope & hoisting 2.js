//* block 1:
// 10
// 20
// 20

//* block 2:
// 10 - the first log after x definition 
// 20 - x redefinition in the anonymous function to 20
// 10 - x from the global scope

//* block 3:
// 10 - x definition in the global scope
// 20 - x is in the scope of test function.
// 30 - x is in block of the test function's scope.
// 20 - x is in the test function's scope, no acces to if block.
// 10 - test has finished running x is from global scop again.

//* block 4:
// undefined - x is defined in global scope and than redefined in function test(). var is than declared and not initialized.

//* block 5:
// undefined - the variable is defined but not initialozed
// undefined - the variable is defined but not initialozed
// 100 - y is set to 100 and printed

//* block 6:
// foo - regular function definition, foo is hoisted.
// bar is not a function - defining bar with function expression and therefore not hoisted so
// calling bar() is not recognized. 