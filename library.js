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

    // if (jimmy >= myLibrary.length) {
    //     jimmy = jimmy
    // } else {
    //     jimmy = myLibrary.length - 1;
    // }

    let i = myLibrary.length - 1;

    if (i == -1) {
        i = 0;
    }

    // console.log(j);
    console.log(i);
    while (i < myLibrary.length) {
        let bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        let removeButton = document.createElement('button');
        removeButton.classList.add("removeButton");
        removeButton.textContent = "X";        

        bookCard.dataset.bookNum = i;

        book = myLibrary[JSON.stringify(i)];

        bookCard.textContent = (`${book.title} by ${book.author}, ${book.pages} pages, ${book.read}`);

        bookCard.appendChild(removeButton); 

        library.appendChild(bookCard);

        removeButton.addEventListener("click", () => {
            bookNum = bookCard.dataset.bookNum;
            console.log(bookNum);
            console.log(myLibrary);
            console.log(myLibrary.length);
            myLibrary.splice(bookNum, bookNum + 1);
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

// jimmy = 0;
// addBookToLibrary(hobbit);

// addBookToLibrary(HarryPotter);

// display();

const addNewBook = document.getElementById("addNewBook");
const favDialog = document.getElementById("favDialog");
const confirmBtn = favDialog.querySelector("#confirmBtn");
const title = favDialog.querySelector("#title");
const author = favDialog.querySelector("#author");
const pages = favDialog.querySelector("#pages");
const read = favDialog.querySelector("#read");


addNewBook.addEventListener("click", () => {
    favDialog.showModal();
  });


// if (myLibrary.length )

confirmBtn.addEventListener("click", (event) => {
    console.log(title.value);

    addBook = new Book (title.value, author.value, pages.value, read.value)

    addBookToLibrary(addBook);

    display();

    event.preventDefault();
    favDialog.close(title.value);
    favDialog.close(author.value);
    favDialog.close(pages.value);
    favDialog.close(read.value);
  });