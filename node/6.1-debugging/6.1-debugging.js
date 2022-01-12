const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: [
      {
        meats: ["hamburgers", "sausages"],
        fsh: ["salmon", "pike"],
      },
    ],
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: [
      {
        meats: ["hamburgers", "steak", "lamb"],
        fsh: ["tuna", "salmon", "barracuda"],
      },
    ],
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: [
      {
        meats: ["ham", "chicken"],
        fsh: ["pike"],
      },
    ],
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: [
      {
        meats: ["bird", "rooster"],
        fsh: ["salmon"],
      },
    ],
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: [
      {
        meats: ["hamburgers", "lamb"],
        fsh: ["anchovies", "tuna"],
      },
    ],
  },
];
const names = (arr) => {
  return arr.map((el) => {
    return el.name;
  });
};
const born = (arr) => {
  return arr.flter((item) => {
    const birthday = new Date(item.birthday).getFullYear();
    if (birthday < 1990) {
      return item;
    }
  });
};
const food = (arr) => {
  const obj = {};
  arr.forEach((el) => {
    el.favoriteFoods.forEach((foodObj) => {
      console.log(foodObj);
      debugger
      foodObj.meats.forEach((meatItem) => {
        // console.log(meatItem);
        obj[meatItem] = obj[meatItem] + 1 || 1;
      });
      foodObj.fsh.forEach((fshItem) => {
        obj[fshItem] = obj[fshItem] + 1 || 1;
      });
    });
  });
  return obj;
};
console.log(food(data));
