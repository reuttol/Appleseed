const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

//* 1. Return all the names
const names = (arr) => arr.map(x => x.name);

console.log(names(data));

//*2. Rreturn all the objects that are born before 1990
const birthYear = (arr) => arr.filter(element => parseInt(element.birthday.split('-').slice(-1)[0]) < 1990);

console.log(birthYear(data));

//* Number of occurences of foods in the data
function foodOccurances(arr){
    const foods = {};

    arr.map(element =>{
        Object.entries(element.favoriteFoods).forEach(([key, values]) =>{
            for(val of values){
                foods[val] = foods[val]+ 1 || 1;
            }
        });   
    });
    return foods;
}
console.log(foodOccurances(data));