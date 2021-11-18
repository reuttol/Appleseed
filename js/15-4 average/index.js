function calcAverage (arr){
    var sum = 0;
    for ( var i = 0 ; i < arr .length; i ++ ){
        sum += arr [ i ];
    }
    return sum ;
}

console.log(calcAverage ([ 85 , 90 , 92 ]));

//! problems with this code:
/** 
 * * 1. the variable sum is not initialized.
 * * 2. the returned value from is not logged or saved.
 */