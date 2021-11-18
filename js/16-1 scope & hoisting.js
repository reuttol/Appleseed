
//* block 1:
// Undefined - var a is hoisted.
// 2 - returned from foo()

//* block 2:
// 'Aurelio De Rosa' - fullName is in the same scope of the prop objecr
// 'John Doe' - test enclosing scope is the global/main scope

//* block 3:
// undefined - a is in function's inner scope
// number -  variable without a var declaration is treated as global

//* block 4:
// 2
// 2
// second definition overrides the first definition and function 
// are hoisted to the top.

//* block 5:
// 1 - variable without a var declaration is treated as global
// a is not defined - e is declared as var in afunction and not accible outside the scop

//* block 6:
// Value of f in global scope: undefined
// Value of f in local scope: 1
