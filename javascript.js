let myLibrary = [];


class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;

    }
    info() {
        return this.title + " "
            + this.author + " "
            + this.pages + " "
            + this.read;
    }
}


function addBookToLibrary(Book) {
    myLibrary.push(Book);
}









const aura = new Book("aura", "hrr", 123, true);

const fabel = new Book("bauer","me",9,true);

const theHobbit = new Book("Hobbit", "JRR", 555, false);

addBookToLibrary(aura);
addBookToLibrary(fabel)
addBookToLibrary(theHobbit);

console.table(myLibrary)

for (i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].pages)
}