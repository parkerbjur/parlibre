import axios from 'axios';
import { h} from 'preact';
import { useState, useEffect } from 'preact/hooks';
import style from './style.css';
import { Button } from '@mui/material';
import BookList from '../../components/bookList/BookList.jsx';

// Note: `library` comes from the URL, courtesy of our router
const Library = ({ library }) => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get(`http://parlibre-env.eba-3e823xix.us-west-1.elasticbeanstalk.com/library/${library}`).then((res) => {
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
            <Button variant='outlined' onClick={buttonAction} sx={{ margin: '5px', mb: '15px' }}> Deposit </Button>
            <BookList books={books} />
		</div>
	);
}

export default Library;
