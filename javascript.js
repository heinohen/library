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

/*fo testing*/


const aura = new Book("aura", "hrr", 123, true);
const fabel = new Book("bauer","me",9,true);
const theHobbit = new Book("Hobbit", "JRR", 555, false);

addBookToLibrary(aura);
addBookToLibrary(fabel)
addBookToLibrary(theHobbit);

/* create right side*/


const addbok = document.querySelector('.addbok');

/*title*/
const titleField = document.createElement('input');
titleField.type = "text";
titleField.placeholder = "title"
titleField.setAttribute('id', 'title');
titleField.textContent = "title:"
addbok.appendChild(titleField);
/*author*/
const authorField = document.createElement('input');
authorField.type = "text";
authorField.placeholder = "author"
authorField.setAttribute('id', 'author');
authorField.textContent = "author:"
addbok.appendChild(authorField);
/*pages*/
const pagesField = document.createElement('input');
pagesField.type = "text";
pagesField.placeholder = "pages"
pagesField.setAttribute('id', 'pages');
pagesField.textContent = "pages:"
addbok.appendChild(pagesField);
/*read*/
const readField = document.createElement('input');
readField.type = "text";
readField.placeholder = "YES / NO"
readField.setAttribute('id', 'read');
readField.textContent = "read:"
addbok.appendChild(readField);

const subButton = document.createElement('button');
subButton.textContent = "ADD NEW BOOX";
subButton.setAttribute('id','sub');
addbok.appendChild(subButton);


const newTitle = document.querySelector("#title");
const newAuthor = document.querySelector("#author");
const newPages = document.querySelector("#pages");
const newRead = true;

function doThis(newTitle, newAuthor,newPages, newRead) {
    let addThis = new Book(newTitle,newAuthor,newPages,newRead);
    addBookToLibrary(addThis);
    console.log(addThis.info())
    console.log("asdfasd")
}




/*leftside booklist*/
const booklist = document.querySelector('.booklist');
booklist.textContent = "hello from the js side"



function updateScreen() {
    for (i = 0; i < myLibrary.length; i++) {
        let one_book = document.createElement('div');
        one_book.textContent = myLibrary[i].info();
        booklist.appendChild(one_book);
    }
}



subButton.onclick = () => doThis();


updateScreen()
console.table(myLibrary)