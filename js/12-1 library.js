var library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false
    }
];

function canBeLoaned(arr){
    const filtered = arr.filter(book => book.readingStatus);
    
    for(e of filtered)      
        console.log(`The book ${e.title}, written by ${e.author} is available for reading!`);
}

canBeLoaned(library);