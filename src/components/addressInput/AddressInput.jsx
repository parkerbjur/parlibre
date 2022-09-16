import { Autocomplete, TextField, InputAdornment } from '@mui/material';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import CircularProgress from '@mui/material/CircularProgress';
import { useState, useEffect } from 'preact/hooks';
import google from '../../utilities/google.utility.js';

const AddressInput = () => {
    const [addresses, setAddresses] = useState([]);
    const [googleApi, setGoogleApi] = useState(null);
    const [address, setAddress] = useState(null);
    const [adornment, setAdornment] = useState(<LocationSearchingIcon />);

    useEffect(() => {
        google.load().then((obj) => {
            console.log('google maps loaded');
            setGoogleApi(obj);
        })    
    }, [])
    
    const updateAddress = async (event, value) => {
        const autocomplete = new googleApi.maps.places.AutocompleteService();
        autocomplete.getPlacePredictions(
            {input: value}, 
            (result) => {
                const descriptions = result.map(result => result.description);
                setAddresses(descriptions);
            },
            (error) => {
                console.log(error);
            }
        );
        setAddresses(['asdf'])
    }
    
    const findLocation = (event) => {
        setAdornment(
            <CircularProgress
                thickness={6} 
                size={30} 
            />
        );
        event.preventDefault();
        event.stopPropagation();
        navigator.geolocation.getCurrentPosition(
            (success) => {
                const geocoder = new googleApi.maps.Geocoder();
                geocoder.geocode({
                    location: {
                        lat: success.coords.latitude,
                        lng: success.coords.longitude,
                    }
                }).then((success) => {
                    setAddress(success.results[0].formatted_address);
                    setAdornment(<LocationSearchingIcon />);
                })
            },
            (error) => {
                console.log(error);
            },{
                timeout: 5000,
                maximumAge: 5000,
            });
        
    }
    
    return (
        <Autocomplete
            value={address}
            freeSolo
            onInputChange={updateAddress}
            options={addresses}
            disableClearable
            forcePopupIcon={false}
            id="address"
            renderInput={(params) => (
                <TextField 
                    {...params} 
                    label="Address" 
                    required
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <InputAdornment 
                                position="end" 
                                onClick={findLocation} 
                            >
                                {adornment}
                            </InputAdornment>
                        )
                    }}
                /> 
            )}
        />
    )
}

export default AddressInput;

