import { 
Grid,
Card,
CardContent,
Typography,
Button,
} from '@mui/material';
import axios from 'axios';

const backendUrl = process.env.PREACT_APP_BACKEND_REQUEST_URL;

const BookCard = (props) => {
    const { removeBook } = props;
    const { id, title, authors, genre, cover } = props.book;

    const checkOutBook = (id) => {
    
        axios.post(
            `${backendUrl}/library/1/books/${id}`,
            {libraryId: 0}
        ).then((res) => {
            removeBook(id);
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    };

    return (
        <Card sx={{ marginBottom: '1vh' }}>
            <CardContent>
                <Grid container columnSpacing={1}>
                    <Grid item xs={2}>
                        <img 
                            src={`${cover}`}
                            style={{ 
                                height: 'auto', 
                                margin:'auto',
                                display:'block', 
                                width: '13vw'}}
                        /> 
                    </Grid>
                    <Grid item container xs>
                        <Grid item xs={12}>
                            <Typography variant="p" color="text.primary">
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="p" color="text.secondary" sx={{ fontSize: 14}}>
                                by: {authors}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {genre && 
                            <Typography variant="p" color="text.secondary" sx={{ fontSize: 14 }}>
                                genre: {genre}
                            </Typography>}
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant='contained' onClick={() => checkOutBook(id)} sx={{ margin: '5px', mb: '15px' }}> Check-Out </Button>
                        </Grid>
                    </Grid>
               </Grid>
            </CardContent>
        </Card>
    )
}

export default BookCard;

