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


const aura = new Book("aura", "hrr", 123, "xxx");
const fabel = new Book("bauer","me",9,"xxxxxx");
const theHobbit = new Book("Hobbit", "JRR", 555, "placeholder");

addBookToLibrary(aura);
addBookToLibrary(fabel)
addBookToLibrary(theHobbit);

/* create left side*/

/*
const addbok = document.querySelector('.addbok');
const formul = document.createElement('form')
addbok.appendChild(formul);



const titleDiv = document.createElement('div');
const titleField = document.createElement('input');
const titleLabel = document.createElement('label');
titleField.type = "text";
titleField.placeholder = "title"
titleField.setAttribute('id', 'title');
titleField.textContent = "title:"
titleDiv.appendChild(titleField);
titleDiv.appendChild(titleLabel);
formul.appendChild(titleDiv)




const authDiv = document.createElement('div');
const authLabel = document.createElement('label');
const authorField = document.createElement('input');
authorField.type = "text";
authorField.placeholder = "author"
authorField.setAttribute('id', 'author');
authorField.textContent = "author:"
authDiv.appendChild(authLabel);
authDiv.appendChild(authorField);
formul.appendChild(authDiv);


const pagesDiv = document.createElement('div');
const pagesLabel = document.createElement('label');
const pagesField = document.createElement('input');
pagesField.type = "text";
pagesField.placeholder = "pages"
pagesField.setAttribute('id', 'pages');
pagesField.textContent = "pages:"
pagesDiv.appendChild(pagesLabel);
pagesDiv.appendChild(pagesField);
formul.appendChild(pagesDiv);


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
*/

subButton.onclick = () => doThis();
clearLibrary.onclick = () => deleteAll();




/* creates new book object and adds it to array*/
function doThis() {
    const newTitle = document.getElementById('title').value;
    const newAuthor = document.getElementById('author').value;
    const newPages = document.getElementById('pages').value;
    if (newTitle == "" || newAuthor == "" || newPages == "") {
        console.log('is empty')
        return;
    }

    let isRead = ""
    const newRead = document.getElementById('read');
    if (newRead.checked) {
        isRead = true
    } else {
        isRead = false  
    }
    let addThis = new Book(newTitle,newAuthor,newPages,isRead);
    addBookToLibrary(addThis);
    updateTable();
}

populateTable();

/* this one populates the table */
function populateTable() {
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
                    const status = myLibrary[i].getRead();
                    if (status == true) {

                    }
                    break;
                case 4:
                    const thrashButton = document.createElement('input');
                    thrashButton.type = "button";
                    thrashButton.className = "trashButton";
                    thrashButton.setAttribute('id', 'trash');
                    thrashButton.onclick = () =>  removeOneBook(tr.rowIndex);
                    td.appendChild(thrashButton);
                    break;   
            }
        }
    }
}

/*update table*/
function updateTable() {
    if (tableOfBooks.rows.length <= myLibrary.length) {
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
                    thrashButton.setAttribute('id', 'trash');
                    thrashButton.onclick = () =>  removeOneBook(tr.rowIndex);
                    td.appendChild(thrashButton);    
            }
        }
    }
}

function deleteAll() {
    let headers = 1;

    while (tableOfBooks.rows.length > headers) {
        tableOfBooks.deleteRow(tableOfBooks.rows.length -1 );
    }

    myLibrary = [];
}

function removeAllBooks() {
    let headers = 1;

    while (tableOfBooks.rows.length > headers) {
        tableOfBooks.deleteRow(tableOfBooks.rows.length -1 );
    }
}

function removeOneBook(index) {
    const removeThis = index -1;
    myLibrary.splice(removeThis, 1);
    removeAllBooks(); /*just removes all after splicing */
    populateTable(); /*and adds them to screen after*/
}
