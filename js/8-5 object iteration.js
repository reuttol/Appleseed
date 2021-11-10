const myObj = {
    firstName: 'Johnny',
    lastName: 'Depp',
    age: 58,
    country: 'USA'
}

function swapValuesAndKeys(obj){
    const newObj = {};
    for(key in obj)
        newObj[obj[key]] = key;

    return newObj;
}

console.log(swapValuesAndKeys(myObj));