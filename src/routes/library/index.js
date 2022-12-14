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
        axios.get(`${backendUrl}/library/${library}`).then((res) => {
            setBooks(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [library]);

    const buttonAction = () => {
        alert("button pressed");
    }

    return (
		<div class={style.profile}>
			<h1>Library Name: { library }</h1>
			<p>welcome to { library }.</p>
            <Button variant='contained' onClick={buttonAction} sx={{ margin: '5px', mb: '15px' }}> Check-Out </Button>
            <Button variant='outlined' onClick={() => setOpen(true)} sx={{ margin: '5px', mb: '15px' }}> Deposit </Button>
            <BookList books={books} />
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                fullWidth
            >
                <BookForm libraryID={library} />
            </Dialog>
		</div>
	);
}

export default Library;
