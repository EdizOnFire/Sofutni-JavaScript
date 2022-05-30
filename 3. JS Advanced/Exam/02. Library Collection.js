class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error("Not enough space in the collection.")
        }

        this.books.push({ bookName, bookAuthor, payed: false })
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {
        let isBookThere = false;
        for (let book of this.books) {
            if (book.bookName === bookName) {
                isBookThere = true;
                if (book.payed === true) {
                    throw new Error(`${bookName} has already been paid.`)
                } else {
                    book.payed = true;
                    return `${bookName} has been successfully paid.`
                }
            }
        }

        if (!isBookThere) {
            throw new Error(`${bookName} is not in the collection.`)
        }
    }

    removeBook(bookName) {
        let isBookThere = false;
        for (let book of this.books) {
            if (book.bookName === bookName) {
                isBookThere = true;
                if (book.payed === false) {
                    throw new Error(`${bookName} need to be paid before removing from the collection.`)
                } else {
                    let index = this.books.indexOf(book);
                    this.books.splice(index, 1);
                    return `${bookName} remove from the collection.`
                }
            }
        }

        if (!isBookThere) {
            throw new Error("The book, you're looking for, is not found.")
        }
    }

    getStatistics(bookAuthor) {
        let isInCollection = false
        for (let book of this.books) {
            if (book.bookAuthor === bookAuthor) {
                isInCollection = true
                if (book.payed === false) {
                    return `${book.bookName} == ${bookAuthor} - Not Paid.`
                } else {
                    return `${book.bookName} == ${bookAuthor} - Has Paid.`
                }
            }
        }

        let result = [];
        if (bookAuthor === undefined) {
            result.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`)
            this.books.sort((a, b) => a.bookName - b.bookName)
            for (let newBook of this.books) {
                if (newBook.payed === true) {
                    result.push(`${newBook.bookName} == ${newBook.bookAuthor} - Has Paid.`)
                } else {
                    result.push(`${newBook.bookName} == ${newBook.bookAuthor} - Not Paid.`)
                }
            }

            return result.join('\n')
        }

        if (!isInCollection) {
            throw new Error(`${bookAuthor} is not in the collection.`)
        }
    }
}

let library = new LibraryCollection(2);

console.log(library.addBook('asd', 'qwe'));
console.log(library.addBook('qwe', 'asd'));
console.log(library.payBook('asd'));
console.log(library.getStatistics());

//The book collection has 2 empty spots left.
// Don Quixote == Miguel de Cervantes - Has Paid.
// In Search of Lost Time == Marcel Proust - Not Paid.
// Ulysses == James Joyce - Not Paid.
