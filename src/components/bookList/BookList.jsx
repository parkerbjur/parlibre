import BookCard from '../bookCard/BookCard.jsx';

const BookList = () => {
    const books = [
        {
            author:"Brandon Sanderson",
            title:"Hero of Ages",
            cover:"../../assets/mistbornCover.jpeg",
            genre:"fantasy",
        },
        {
            author:"JK Rowling",
            title:"Harry Potter",
            cover:"../../assets/hpCover.jpg",
            genre:"fantasy",
        },
    ]

	return (
        <div>
            {books.map((book) => 
                 <BookCard key={book.title} book={book} />
            )}
		</div>
    )
};

export default BookList;

