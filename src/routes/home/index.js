import axios from 'axios';
import { useState, useEffect } from 'preact/hooks';
import { Button } from '@mui/material';
import { Link, route } from 'preact-router';
import style from './style.css';
import LibraryList from '../../components/libraryList/LibraryList.jsx';

const backendUrl = process.env.BACKEND_REQUEST_URL;

const Home = () => {
    const [libraries, setLibraries] = useState([]);
    
    useEffect(() => { 
        axios.get(`${backendUrl}/library`).then((res) => {
            setLibraries(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    const addLibrary = () => {
        route('/library/newLibrary', false);     
    }

    return (
        <div class={style.home}>
            <h1>Home</h1>
            <Link href="/library/newLibrary" style={{ textDecoration: 'none' }}> 
                <Button variant='outlined'> Add Library </Button> 
            </Link>
            <LibraryList libraries={libraries} />

        </div>
    )
};

export default Home;
