import axios from 'axios';
import { h} from 'preact';
import { useState, useEffect } from 'preact/hooks';
import style from './style.css';
import { Button, Dialog } from '@mui/material';
import BookList from '../../components/bookList/BookList.jsx';
import BookForm from '../../components/bookForm/BookForm.js';

const backendUrl = process.env.PREACT_APP_BACKEND_REQUEST_URL;

// Note: `library` comes from the URL, courtesy of our router
const Library = ({ library }) => {

    const [books, setBooks] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        pullBookList();
    }, [library]);

    const pullBookList = () => {
        axios.get(`${backendUrl}/library/${library}`).then((res) => {
            setBooks(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    const updateBookList = () => {pullBookList()};

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id != id ))
    }

    return (
		<div class={style.profile}>
			<h1>Library Name: { library }</h1>
			<p>welcome to { library }.</p>
            <Button variant='outlined' onClick={() => setOpen(true)} sx={{ margin: '5px', mb: '15px' }}> Deposit </Button>
            <BookList 
                books={books}
                updateBookList = {updateBookList}
                removeBook = {(id) => removeBook(id)}
            />
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                fullWidth
            >
                <BookForm 
                    libraryID={library} 
                    toggleOpen={() => setOpen(!open)}
                    updateBookList={updateBookList}
                />
            </Dialog>
		</div>
	);
}

export default Library;
