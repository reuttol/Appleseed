const populations = [1441, 56, 9, 7];

const percentageOfWorld1 = population => ((population/7900)*100).toFixed(2);

const populationPercentages = arr =>{
    let percentages = [];

    for(let i=0; i<arr.length; i++){
        percentages.push(percentageOfWorld1(arr[i]));
    }
    return percentages;
}

console.log(populationPercentages(populations));