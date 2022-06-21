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

    getTitle() {
        return this.title;
    }

    getAuthor() {
        return this.author;
    }

    getPages() {
        return this.pages;
    }

    getRead() {
        return this.read;
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

const clearLibrary = document.createElement('button');
clearLibrary.textContent = "CLEAR LIBRARY";
clearLibrary.setAttribute('id','clearLibrary');
addbok.appendChild(clearLibrary);




function doThis() {
    const newTitle = document.getElementById('title').value;
    const newAuthor = document.getElementById('author').value;
    const newPages = document.getElementById('pages').value;
    const newRead = true;   

    console.log(newTitle);
    let addThis = new Book(newTitle,newAuthor,newPages,newRead);
    addBookToLibrary(addThis);
    console.log(addThis.info())
    console.table(myLibrary)
    updateTable();
}




/*leftside booklist*/
const booklist = document.querySelector('.booklist');
booklist.textContent = "hello from the js side"
createTable();

const tableLength = myLibrary.length;
console.log(tableLength);


function createTable() {
    const tableOfBooks = document.createElement('table');
    tableOfBooks.setAttribute('id', 'tableOfBooks');

    tableOfBooks.style.width = "300px";


    const headerRow = document.createElement('tr');
    const titleOfBook = document.createElement('th');
    const authorOfBook = document.createElement('th');
    const pagesOfBook = document.createElement('th');
    const readThisBook = document.createElement('th');
    titleOfBook.textContent = "Title";
    authorOfBook.textContent = "Author";
    pagesOfBook.textContent = "Pages";
    readThisBook.textContent = "Read?";

    headerRow.appendChild(titleOfBook);
    headerRow.appendChild(authorOfBook);
    headerRow.appendChild(pagesOfBook);
    headerRow.appendChild(readThisBook);
    tableOfBooks.appendChild(headerRow);
    booklist.appendChild(tableOfBooks);


    for (let i = 0; i < myLibrary.length; i++) {
        const tr = tableOfBooks.insertRow();
        tr.setAttribute('id', 'row')
        for (let j = 0; j < 5; j++) {
            const td = tr.insertCell();
            switch(j) {
                case 0:    
                    td.textContent = myLibrary[i].getTitle();
                    break;
                case 1:
                    td.textContent = myLibrary[i].getAuthor();
                    break;
                case 2:
                    td.textContent = myLibrary[i].getPages();
                    break;
                case 3:
                    td.textContent = myLibrary[i].getRead();
                    break;
                case 4:
                    const thrashButton = document.createElement('input');
                    thrashButton.type = "button";
                    thrashButton.className = "trashButton";
                    thrashButton.value = "Trash it!";
                    td.appendChild(thrashButton);
                    break;   
            }
        }
    }
}

function updateTable() {
    if (tableLength != myLibrary.length) {
        const tr = tableOfBooks.insertRow();
        for (let j = 0; j < 5; j++) {
            const td = tr.insertCell();
            switch(j) {
                case 0:    
                    td.textContent = myLibrary[myLibrary.length-1].getTitle();
                    break;
                case 1:
                    td.textContent = myLibrary[myLibrary.length-1].getAuthor();
                    break;
                case 2:
                    td.textContent = myLibrary[myLibrary.length-1].getPages();
                    break;
                case 3:
                    td.textContent = myLibrary[myLibrary.length-1].getRead();
                    break;
                case 4:
                    const thrashButton = document.createElement('input');
                    thrashButton.type = "button";
                    thrashButton.className = "trashButton";
                   
                    thrashButton.value = "Trash it!";
                    td.appendChild(thrashButton);    
            }
        }
    }
}

function removeAllBooks() {
    let headers = 1;

    while (tableOfBooks.rows.length > headers) {
        tableOfBooks.deleteRow(tableOfBooks.rows.length -1 );
    }
}



subButton.onclick = () => doThis();
clearLibrary.onclick = () => removeAllBooks();
console.table(myLibrary)