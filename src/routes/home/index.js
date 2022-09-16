import axios from 'axios';
import { useState, useEffect } from 'preact/hooks';
import { h } from 'preact';
import { Button } from '@mui/material';
import style from './style.css';
import LibraryList from '../../components/libraryList/LibraryList.jsx';

const Home = () => {
    const [libraries, setLibraries] = useState([]);
    
    useEffect(() => { 
        axios.get('http://parlibre-env.eba-3e823xix.us-west-1.elasticbeanstalk.com/library').then((res) => {
            setLibraries(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    const addLibrary = () => {
        window.location.assign('/library/newLibrary');     
    }

    return (
        <div class={style.home}>
            <h1>Home</h1>
            <Button variant='outlined' onClick={addLibrary}> Add Library </Button>
            <LibraryList libraries={libraries} />
        </div>
    )
	
};

export default Home;
