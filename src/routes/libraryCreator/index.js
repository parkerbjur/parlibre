import { TextField, Button, Autocomplete } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import style from './style.css';
import AddressInput from '../../components/addressInput/AddressInput.jsx';
import axios from 'axios'

const backendUrl = process.env.PREACT_APP_BACKEND_REQUEST_URL;

const LibraryCreator = () => {
    
    const submitLibrary = (event) => {
        event.preventDefault();

        const formData = new FormData();
        const data = [
            ['name', event.target.name.value],
            ['address', event.target.address.value],
            ['charter', event.target.charter.value],
            ['picture', event.target.picture.files[0]],
        ];
        for (const dataPoint of data) {
            formData.append(dataPoint[0], dataPoint[1]);
        }
        
        axios.put(
            `${backendUrl}/library`,
            formData,
            {headers: { 'content-type': 'multipart/form-data'}}
        ).then((res) => {
            console.log(res);             
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <form class={style.libraryCreator} onSubmit={submitLibrary}>
            <h1> Create Library </h1>

            <TextField 
                fullWidth 
                id="name" 
                label="Library Name" 
                variant="outlined" 
                required
            />

            <AddressInput 
                InputProps={{ required: true }}
                />

            <TextField 
                fullWidth
                id="charter"
                label="Charter #"
                variant="outlined"
            />

            <Button
                variant="outlined"
                component="label"
                sx={{ margin: '10px 0' }}
                size='large'
            >
                Image 
                <input
                    type="file"
                    id="picture"
                    accept="image/*"
                    capture="enviroment"
                    hidden
                />
                <CameraAltIcon />
            </Button><br />

            <Button 
                variant="contained"
                size="large"
                type="submit"
            >
                Submit
            </Button>
        </form>
    )
}

export default LibraryCreator;
