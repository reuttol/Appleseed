
const newReleases = [
    {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nﬂximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netﬂix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
    },
    {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nﬂximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netﬂix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
    },
    {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nﬂximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netﬂix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
    },
    {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nﬂximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netﬂix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
    },
    ];

const videoForEach = (releases) =>{

    const result = [];
    releases.forEach(function(release){
        result.push ({
            name: release.title,
            id: release.id
        });
    });
    return result;
}

const videoMap = (releases) =>{

    return releases.map(function(release){
        return {
            name: release.title,
            id: release.id
        };
    });
}

console.log(videoForEach(newReleases));
console.log(videoMap(newReleases));