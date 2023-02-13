function BookInfo(BookName, Author, Totalpages, status) {
    this.BookName = BookName
    this.Author = Author
    this.Totalpages = Totalpages
    this.status = status

    this.info = function () {
        return `${this.BookName} by ${this.Author}, ${this.Totalpages} pages, ${this.status}`
    }
}

const Book1 = new BookInfo("The Hobbit", "JRR", 59, "not read")
console.log(Book1.info())


// popup modal open

function ModalOpen() {
    // console.log("Clicked")
    document.querySelector(".modal").style.display = 'revert';
}
function ModalClose() {
    // console.log("Clicked")
    document.querySelector(".modal").style.display = 'none';
}

