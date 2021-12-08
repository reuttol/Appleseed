async function getCharacters(amount){
    let characters = [];
    const baseURL = 'https://swapi.dev/api/people/';
    
    try{
        for(let i=0; i<amount; i++){
            characters.push(fetch(`${baseURL}${i+1}/`)); 
        }
        const results = await Promise.all(characters);
        results.forEach((res) => {
            if(!res.ok)
                throw Error(`Error getting data from ${res.url}`);
        });
  
        characters = [];
        results.forEach((character) => characters.push(character.json()));
        characters = await Promise.all(characters);

        let worlds = [];
        for(let character of characters)
            worlds.push(fetch(character.homeworld))

        const responses = await Promise.all(worlds);
        responses.forEach((res) => {
            if(!res.ok)
                throw Error(`Error getting data from ${res.url}`);
        });

        worlds = [];
        responses.forEach((world) => worlds.push(world.json()));
        worlds = await Promise.all(worlds);       

        const data = [];
        for(let i=0; i<amount; i++){
            data.push({
                name: characters[i].name,
                height: characters[i].height,
                hair: characters[i].hair_color,
                planet: worlds[i].name,
                population: worlds[i].population
            });
        }

        createTable(data);
    }catch(e){
        console.log(e.message);
    }
    
}

function createTable(data){
    const table = document.createElement('table');
    table.classList.add("table");
    const tableHeader = document.createElement('thead');
    for(let key in data[0]){
        const th = document.createElement('th');
        th.innerText = key;
        tableHeader.appendChild(th);
    }
    table.appendChild(tableHeader);

    for(let character of data){
        const tableRow = document.createElement('tr')
        for(let key in character){
            const td = document.createElement('td');
            td.innerText = character[key];
            tableRow.appendChild(td);
        }
        table.appendChild(tableRow);
    }

    document.querySelector('.container').appendChild(table);
}

getCharacters(10);
