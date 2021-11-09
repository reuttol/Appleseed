function languages(lang){
    switch(lang){
        case 'mandrin':
            console.log('MOST number of native speakers!');
            break;
        case 'spanish':
            console.log('2nd place in number of native speakers');
            break;
        case 'english':
            console.log('3rd place');
            break;
        case 'hindi':
            console.log('Number 4');
            break;
        case 'arabic':
            console.log( '5th most spoken language');
            break;
        default:
            console.log('Not in the top 5');
    }
}

languages('english');
languages('hebrew');
languages('mandrin');
languages('french');