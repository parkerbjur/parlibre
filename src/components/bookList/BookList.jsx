import BookCard from '../bookCard/BookCard.jsx';

const BookList = (props) => {
    const { books } = props;

    return (
        <div>
            {books.map((book) => 
                <BookCard 
                    key={book.id} 
                    book={book} 
                    {...props}
                />
            )}
		</div>
    )
};

export default BookList;

