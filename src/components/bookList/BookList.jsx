import BookCard from '../bookCard/BookCard.jsx';

const BookList = (props) => {
    const { books } = props;
	return (
        <div>
            {books.map((book) => 
                 <BookCard key={book.title} book={book} />
            )}
		</div>
    )
};

export default BookList;

