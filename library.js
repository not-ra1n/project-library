const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
    };
}

const hobbit = new Book('The Hobbit', 'Jr', 295, 'not read yet');

const HarryPotter = new Book("Jimmy", "John", 21, "not read yet")


function addBookToLibrary(newBook) {
    myLibrary.push(newBook)
    console.log(myLibrary)
}

let library = document.querySelector(".library");


function display () {

    let i = myLibrary.length - 1;

    if (i == -1) {
        i = 0;
    }

    while (i < myLibrary.length) {
        let bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        let removeButton = document.createElement('button');
        removeButton.classList.add("removeButton");
        removeButton.textContent = "X";        

        bookCard.dataset.bookNum = i;

        book = myLibrary[JSON.stringify(i)];

        let title = document.createElement('p')
        let author = document.createElement('p')
        let pages = document.createElement('p')
        let readStatus = document.createElement('p')
        title.classList.add("bookInfoTitle")
        author.classList.add("bookInfoAuthor")
        pages.classList.add("bookInfoPages")
        readStatus.classList.add("bookInfoRead")


        title.textContent = (`Title: ${book.title}`)
        author.textContent = (`Author: ${book.author}`)
        pages.textContent = (`Pages: ${book.pages}`)
        readStatus.textContent = (`Read Status: ${book.read}`)
        
        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(readStatus);

        readButton = document.createElement('button');
        readButton.classList.add("readButton");

        if (book.read == "read" || book.read == "Read") {
            readButton.textContent = "Read"
        }
        if (book.read == "not read yet" ||
        book.read == "Not read yet") {
            readButton.textContent = "Not read yet"
        }


        bookCard.appendChild(removeButton); 

        bookCard.appendChild(readButton);

        library.appendChild(bookCard);

        function readBook() {

            bookID = bookCard.dataset.bookNum;
            console.log(bookCard.dataset.bookNum)
            console.log(myLibrary);
            console.log(myLibrary.length);

            console.log(myLibrary[bookID])

            bookUpdate = myLibrary[bookID];

            console.log(bookUpdate.read)

            if (bookUpdate.read === "not read yet" 
            || bookUpdate.read === "Not read yet") {
                bookUpdate.read = "Read";
                readButton.textContent = "Read";
                readStatus.textContent = (`Read Status: ${bookUpdate.read}`);
            } else {
                if (bookUpdate.read === "read" 
                || bookUpdate.read === "Read") {
                    bookUpdate.read = "Not read yet";
                    readButton.textContent = "Not read yet";
                    readStatus.textContent = (`Read Status: ${bookUpdate.read}`);
                }
            }
            

            console.log(myLibrary)
        }

        readButton.addEventListener("click", () => {
            readBook()
        });

        removeButton.addEventListener("click", () => {
            bookID = bookCard.dataset.bookNum;
            console.log(bookID);
            console.log(myLibrary);
            console.log(myLibrary.length);
            myLibrary.splice(bookID, bookID + 1);
            console.log(myLibrary.length);
            i = i;
            console.log(i);
            console.log(myLibrary);

            let libraryChild = library.lastElementChild;
            while (libraryChild) {
                library.removeChild(libraryChild);
                libraryChild = library.lastElementChild;
            }

            display();
        });

        i++;
        console.log(i);
    }
}

const addNewBook = document.getElementById("addNewBook");
const favDialog = document.getElementById("favDialog");
const cancelBtn = document.getElementById("cancelBtn")
const confirmBtn = favDialog.querySelector("#confirmBtn");
const titleInput = favDialog.querySelector("#title");
const authorInput = favDialog.querySelector("#author");
const pagesInput = favDialog.querySelector("#pages");
const readInput = favDialog.querySelector("#read");


addNewBook.addEventListener("click", () => {
    favDialog.showModal();
  });


confirmBtn.addEventListener("click", (event) => {
    console.log(titleInput.value);

    addBook = new Book (titleInput.value, authorInput.value, pagesInput.value, readInput.value)

    addBookToLibrary(addBook);

    display();

    event.preventDefault();
    favDialog.close(titleInput.value);
    favDialog.close(authorInput.value);
    favDialog.close(pagesInput.value);
    favDialog.close(readInput.value);
    titleInput.value='';
    authorInput.value='';
    pagesInput.value='';
    readInput.value='';
  });

cancelBtn.addEventListener("click", () => {
    titleInput.value='';
    authorInput.value='';
    pagesInput.value='';
    readInput.value='';
});

