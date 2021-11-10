
const book = {
    name: 'Outlander',
    author: 'Diana Galbadon',
    year: '1991',
    category: 'historical fantasy'
}

const bookInfo = (book) => `The book ${book.name} was written by ${book.author} in the year ${book.year}`;

console.log(bookInfo(book));