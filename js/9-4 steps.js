
function steps(n){
    for(let i=1; i<=n; i++)
        console.log("#".repeat(i) + ' '.repeat(n-i));
}

function steps2(n){
    for(let i=1; i<=n; i++)
        console.log(''.padStart(i,'#').padEnd(n,' '));
}

steps(5);
steps2(5);

