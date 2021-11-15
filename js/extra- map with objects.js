const obj1 = {
    name: 'Reut',
  };
  
  const obj2 = {
    name: 'Agam',
  };
  
  const obj3 = {
    name: 'Ofek',
  };


  let s = [];

const map1 = new Map();
map1.set(obj1, 1);
map1.set(obj2, 2);
map1.set(obj3, 3);
console.log(map1);

for (const [key, value] of map1) {
  console.log(`name: ${key.name}, id: ${value}`);
}
