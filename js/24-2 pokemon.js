function Pokemon(pokemonName, pokemonType, pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function(){
    return `I choose you ${this.name}`;
}
Pokemon.prototype.attack = function(idx){
    return `${this.name} used ${this.attackList[idx]}`;
}

const p1 = new Pokemon("Kyogre", "water", [
    "Waterfall",
    "Hydro Pump",
    "Blizzard",
    "Thunder",
  ]);
const p2 = new Pokemon("Groudon", "Ground", [
    "Earthquake",
    "Eruption",
    "Solar Beam",
    "Dragon Tail",
  ]);
const p3 = new Pokemon("Rayquaza", "Dragon Flying", [
    " Air Slash",
    "Dragon Tail",
    "Outrage",
    "Aerial Ace",
    "Ancient Power",
  ]);



console.log(p1.callPokemon());
console.log(p1.attack(2));  

console.log(p2.callPokemon());
console.log(p2.attack(1));  

