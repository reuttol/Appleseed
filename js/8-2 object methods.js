
const myCountry = {
    country : 'Israel',
    capital: 'Jerusalem',
    languge: 'Hebrew',
    population: 9,
    neighbours: ['Egept', 'Lebanon', 'Syria', 'Jordan'],

    describe(){
        return `${this.country} has ${this.capital} million people, their mother tongue is ${this.languge}, 
        they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    },
    checkIsland(){
        this['isIsland'] = this.neighbours.length > 0 ? false : true;
    }
};

console.log(myCountry.describe());
myCountry.checkIsland();
console.log(myCountry.isIsland);