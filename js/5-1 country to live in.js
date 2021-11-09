function countryToLiveIn(lang, isIsland, population, country){
    if(lang.toLowerCase() === 'english' && !isIsland && population < 50)
        console.log(`You should live in ${country}.`);
    else 
        console.log(`${country} does not meet your criteria`);
}


countryToLiveIn('Hebrew', false, 9, 'Israel');
countryToLiveIn('English', false, 100, 'USA');
countryToLiveIn('ENGLISH', false, 49, 'Neverland');