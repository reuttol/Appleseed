const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
    ];

    for(neighbour of listOfNeighbours)
        for(country of neighbour)
            console.log(`Neighbour: ${country}`);