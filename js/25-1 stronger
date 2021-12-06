const hero = {
    health: 5,
    power: 68,
    getStrength: function(){
        if (this.health <= 5){
            return this.power - 10;
        }else return this.power;
    }
}

function whoIsStronger(getStrength){
    const myStrength = 82;
    if (getStrength() < myStrength){
        return "I am stronger";
    } else {
        return "You are stronger";
    }
}

// there is a bind missing in getStrength function without binding getStrength to hero 'this' is refered to 
// window which does not have health or power attributes.

console.log(whoIsStronger(hero.getStrength.bind(hero)));
