class Book {
    constructor(title, author, price, rentalPrice, copiesAvailable) {
        this.title = title; 
        this._author = author; 
        this._price = price;
        this._rentalPrice = rentalPrice; 
        this._copiesAvailable = copiesAvailable; 
    }
    
    buyBook() {
        console.log(`Buying the book: ${this.title}`);
        this._copiesAvailable;
    }

    rentBook() {
        console.log(`Renting the book: ${this.title} at price: ${this._rentalPrice}`);
        this._copiesAvailable;
    }

    returnBook() {
        console.log(`Returning the book: ${this.title}`);
        this._copiesAvailable;
    }

    checkAvailability() {
        console.log(`Available copies of ${this.title}: ${this._copiesAvailable}`);
         this._copiesAvailable;
    }
    
    getauthor() {
        return this._author;
    }

    setauthor(author) {
        this._author = author;
    }

    getprice() {
        return this._price;
    }

    setprice(price) {
        this._price = price;
    }

    getrentalPrice() {
        return this._rentalPrice;
    }

    SetrentalPrice(rentalPrice) {
        this._rentalPrice = rentalPrice;
    }

    getcopiesAvailable() {
        return this._copiesAvailable;
    }

    setcopiesAvailable(copiesAvailable) {
        this._copiesAvailable = copiesAvailable;
    }
}
let book = new Book("thiyari books", "Harmi", 50, 100, 7);
book.buyBook();
book.rentBook();
book.returnBook();
book.checkAvailability();
