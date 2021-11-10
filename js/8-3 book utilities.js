const book1 = {
    name: 'some book',
    author: 'John Doe',
    year: 2000
};

const book2 = {
    name: 'fictional fiction',
    author: 'Jane DOe',
    year: 2012
};

const bookUtils = {
    getFirstPublished(book1, book2){
        return book1.year < book2.year ? book1 : book2;
    },
    setNewEdition(book, editionYear){
        book[ylatestEdition] = editionYear;
    },
    setLanguage(book, lang){
        book[language] = lang;
    },
    setTranslation(book, language, translator){
        book['translation'] = {language, translator}
    },
    setPublisher(book, name, location){
        book['publisher'] = {name, location}

    },
    isSamePublisher(book1, book2){
        return book1.publisher.location === book2.publisher.location &&
        book1.publisher.name === book2.publisher.name;
    }
};


console.log(bookUtils.getFirstPublished(book1, book2));