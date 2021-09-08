
/* The constructor method is a special method of a class for creating and initializing an object of that class.
A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.*/

class Book {
    constructor(title, genre, author){
        this.title = title,
        this.genre = genre,
        this.author = author
    }
}
const book1 = new Book ( 'sistas', 'comedy', 'Alicia')
const book2 = new Book ( 'dynasty', 'detective', 'Fred')

console.log(book1);
console.log(book2);