const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}

function getCandy(candyStore, id){
    return candyStore.candies.filter(e => e.id === id).slice(-1)[0];
}

function getPrice(candyStore, id){
    const candy = getCandy(candyStore, id);
    return candy.price;
}

function addCandy(candyStore, id, name, price){
    const candy = {
        name, id, price, amount: 1
    }
    candyStore.candies.push(candy);
}

function buy(candyStore, id){
    const candy = getCandy(candyStore, id);
    if(candy.amount > 0){
        candy.amount--;
        candyStore.cashRegister += candy.price;
    }
}

console.log(getCandy(candyStore,"5hd7y"));
console.log(getPrice(candyStore,"5hd7y"));
addCandy(candyStore,"1hgf4", "jelly", 3);
console.log(candyStore);
buy(candyStore, "1hgf4");
console.log(candyStore);
buy(candyStore, "1hgf4");
console.log(candyStore);