function findSmallest(a, b, c){
    if (a > b && b > c || (b > a && a > c)){
        return c;
    } else if (a > c && c > b || c > a && a > b) {
        return b;
    } else if(b > c && c > a || c > b && b > a){
        return a;
    }
}
    
const d = findSmallest(52,66, 2);
console.log(d);

//! problems with this code:
/** 
 * * 1. there is an 'l' missing in the function name
 * * 2. the returned value from is not logged or saved.
 * * 3. there are missing cases. 
 * * 4. a < b < c returns (a < b) < c that is true < c ||| false < c which needs to separated into two
 * * terms (a < b) && (b < c).
 */