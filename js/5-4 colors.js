function darkOrLightColor(color){
    switch(color.toLowerCase()){
        case 'orange':
        case 'yellow':
        case 'pink':
            return 'light color';
        case 'blue':
        case 'purple':
        case 'brown':
            return 'dark color';
        default:
            return "Unknown color";
        
    }
}

console.log('Orange -', darkOrLightColor('Orange'));
console.log('orange -', darkOrLightColor('orange'));
console.log('ORANGE -', darkOrLightColor('ORANGE'));
console.log('pink -', darkOrLightColor('pink'));
console.log('yellow - ', darkOrLightColor('yellow'));
console.log('BLUE -', darkOrLightColor('BLUE'));
console.log('brown -', darkOrLightColor('brown'));
console.log('purple -', darkOrLightColor('purple'));
console.log('red -', darkOrLightColor('red'));
console.log('BLACK - ', darkOrLightColor('BLACK'));