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

    setRead(value) {
        this.read = value;
    }
}

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
    refreshCount()
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
                        const readButton = document.createElement('button');
                        readButton.setAttribute('id', 'readButton')
                        readButton.style.backgroundColor = "green";
                        readButton.textContent = "Yes";
                        readButton.onclick = () =>  toggle(tr.rowIndex, readButton);
                        td.appendChild(readButton);
                    } else {
                        const readButton = document.createElement('button');
                        readButton.setAttribute('id', 'readButton')
                        readButton.style.backgroundColor = "red";
                        readButton.textContent = "No";
                        readButton.onclick = () =>  toggle(tr.rowIndex, readButton);
                        td.appendChild(readButton);
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
    refreshCount()
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
                    const status = myLibrary[myLibrary.length-1].getRead();
                    if (status == true) {
                        const readButton = document.createElement('button');
                        readButton.setAttribute('id', 'readButton');
                        readButton.style.backgroundColor = "green";
                        readButton.textContent = "Yes";
                        readButton.onclick = () =>  toggle(tr.rowIndex, readButton);
                        td.appendChild(readButton);
                    } else {
                        const readButton = document.createElement('button');
                        readButton.setAttribute('id', 'readButton')
                        readButton.style.backgroundColor = "red";
                        readButton.textContent = "No";
                        readButton.onclick = () =>  toggle(tr.rowIndex, readButton);
                        td.appendChild(readButton);
                    }
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

function toggle(index, readButton) {
    let toggler = myLibrary[index -1].getRead();
    if (toggler) {
        readButton.style.backgroundColor = "red";
        readButton.textContent = "No";
        myLibrary[index - 1].setRead(false);
    } else {
        readButton.style.backgroundColor = "green";
        readButton.textContent = "Yes";
        myLibrary[index - 1].setRead(true);
    }

}



function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

function deleteAll() {
    let headers = 1;

    while (tableOfBooks.rows.length > headers) {
        tableOfBooks.deleteRow(tableOfBooks.rows.length -1 );
    }

    myLibrary = [];
    refreshCount()
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

function refreshCount() {
    const amount = document.getElementById('amount');
    amount.textContent = myLibrary.length + " "
}

