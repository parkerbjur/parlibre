import { TextField, Button, Stack } from '@mui/material';
import { useState } from 'preact/hooks';
import axios from 'axios'
import style from './style.css'

const backendUrl = process.env.PREACT_APP_BACKEND_REQUEST_URL;

const BookForm = (param) => {
    const { libraryID, toggleOpen, updateBookList } = param;

    const [ISBN, setISBN] = useState(true);
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [bookInfo, setBookInfo] = useState({});

    const findBookByISBN = (event) => {
        event.preventDefault();

        const isbn = event.target.isbn.value;
        if (isNaN(isbn) || isbn.length != 10) {
            return;
        }
        console.log(`api2.isbndb.com/book/${isbn}`);

        axios.get(`${backendUrl}/isbndb/book/${isbn}`)
        .then((res) => {
            setISBN(false);
            setAuthor(res.data.authors);
            setTitle(res.data.title);
            setBookInfo(res.data);
            console.log(res);
        })
    }

    const submitBook = (event) => {
        event.preventDefault();
        bookInfo.libraryID = libraryID;

        axios.put(
            `${backendUrl}/book`,
            bookInfo
        ).then((res) => {
            console.log(res);
            updateBookList();
            toggleOpen();
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div class={style.bookForm}>
            <h3 margin={0}> Add Book </h3>
            
            {ISBN && (
                <form onSubmit={findBookByISBN}>
                    <Stack spacing={1}>
                        <TextField 
                            fullWidth 
                            id="isbn" 
                            label="ISBN" 
                            variant="outlined" 
                            required
                        />
                        <Stack direction="row" spacing={1}>
                            <Button type="submit" variant="contained">Submit</Button>
                            <Button onClick={()=>setISBN(false)}>No ISBN</Button>
                        </Stack>
                        <p>The ISBN is a 10 or 13 digit code often printed next to the book's barcode</p>
                    </Stack>
                </form>
            )}
            
            {!ISBN && (
            <form onSubmit={submitBook}>
                <Stack spacing={1}> 
                    <TextField 
                        value={title}
                        fullWidth 
                        id="title" 
                        label="Title" 
                        variant="outlined" 
                    />
                    <TextField 
                        value={author}
                        fullWidth
                        id="author"
                        label="Author"
                        variant="outlined"
                    />
                    <Stack direction="row">
                    <Button 
                        variant="contained"
                        size="large"
                        type="submit"
                    >
                        Submit
                    </Button>
                    <Button onClick={()=>setISBN(true)}>Back</Button>
                    </Stack>
                </Stack>
            </form>
            )}
        </div>
    )
}

export default BookForm;
