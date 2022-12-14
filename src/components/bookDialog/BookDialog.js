import { Dialog } from '@mui/material';
import BookForm from '../bookForm/BookForm.js';

const BookDialog = (props) => {
    const { open } = props;

    return (
        <Dialog
            open={open}
        >
            <BookForm />
        </Dialog>
    )
}

export default BookDialog;

