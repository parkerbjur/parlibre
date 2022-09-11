const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Book extends Model {
        static async createBook(book, library) {
            const newBook = await Book.create({
                Title: book.title,
                Author: book.author || "",
                Genre: book.genre || "",
                Cover: book.cover || "",
                ISBS: book.ISBN || "",
                Library: library.referenceNumber || "",
            }) 
            console.log(`${newBook.Title} created`);
        }
        
        static async getBooksByTitle(title) {
            const books = await Book.findAll({
                where: {
                    Title: title
                }
            })
            return books;
        }

        static async getBooksByLibrary(library) {
            const books = await Book.findAll({
                where: {
                    Library: library
                }
            })
            return books;
        }
        
        async moveBook(library){
            const movedBook = await Book.update({Library: library}, {
                where: {
                    id: this.id
                }
            });
            return movedBook;
        }
    }

    Book.init({
        Title: {
            type: DataTypes.STRING,   
        },
        Author: {
            type: DataTypes.STRING,
        },
        Genre: {
            type: DataTypes.STRING,
        },
        Cover: {
            type: DataTypes.STRING,
        },
        ISBN: {
            type: DataTypes.STRING,
        },
        Library: {
            type: DataTypes.INTEGER,
        },

    }, {sequelize});

    // REMOVE
    Book.sync({ force: true });
}

