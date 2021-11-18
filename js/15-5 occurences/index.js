function countOccurrences (str, char){
    let counter = 0 ;
    for ( let i = 0 ; i < str .length; i ++ ){
        if ( str . charAt ( i ) === char ){
            counter += 1 ;
        }
    }
    
    return counter ;
}

const result = countOccurrences ( "ini mini miny moe" , "n" );
console.log(result);

//! problems with this code:
/** 
 * * 1. the variable counter is not incremented.
 * * 2. the returned value from is not logged or saved.
 */