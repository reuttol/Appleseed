function hasSeven(n){
    let nArr = [];
    for(let k=n; k>0; ){
        nArr.push(k%10);
        k /= 10;
    }
    return nArr.includes(7);
}

function boom(n){
    for(let i=1; i<=n; i++){

        if(i%7 === 0){
            if(hasSeven(i))
                console.log('BOOM-BOOM,');
            else
                console.log('BOOM,');

        }
        else
            console.log(i + ",");
    }
}

boom(20);