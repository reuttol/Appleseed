const percentageOfWorld1 = population => ((population/7900)*100).toFixed(2);

const percentageOfWorld2 = () =>{
    console.log(percentageOfWorld1(1441));
    console.log(percentageOfWorld1(9));
    console.log(percentageOfWorld1(56));
};

percentageOfWorld2();