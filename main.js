/* eslint-disable no-unused-vars */

function BookInfo(BookName, Author, Totalpages, status) {
    this.BookName = BookName;
    this.Author = Author;
    this.Totalpages = Totalpages;
    this.status = status;

    this.info = function () {
        return `${this.BookName} by ${this.Author}, ${this.Totalpages} pages, ${this.status}`;
    };
}

const Book1 = new BookInfo("The Hobbit", "JRR", 59, "not read");
console.log(Book1.info());

// popup modal open

function ModalOpen() {
    document.querySelector(".modal").style.display = "revert";
}
function ModalClose() {
    document.querySelector(".modal").style.display = "none";
}

// Collect Form input

let form = document.getElementById("AddBookForm");
let BookTitle = document.querySelector("#bookTitle");
let Author = document.querySelector("#author");
let TotalPages = document.querySelector("#Totalpages");
let Status = document.querySelector("#books-status");


let SubmitBook = document.querySelector('#submitbook');
SubmitBook.addEventListener(onclick, () => {
    console.log(BookTitle.value, " ", Author.value, " ", TotalPages.value, " ", Status.value);
})

// function ShowDetails() {
//     alert(BookTitle.value, " ", Author.value, " ", TotalPages.value, " ", Status.value);
// }

// function Show() {
//     console.log("Helo");
// }
