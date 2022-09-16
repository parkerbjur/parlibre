import { 
Grid,
Card,
CardContent,
Typography,
} from '@mui/material';


const BookCard = (props) => {
    const { title, author, genre, cover } = props.book;
    console.log(cover);

    return (
        <Card sx={{ marginBottom: '1vh' }}>
            <CardContent>
                <Grid container columnSpacing={1}>
                    <Grid item xs={2}>
                        <img 
                            src={`https://d237qkgix41sfb.cloudfront.net/${cover}`} 
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
                                by: {author}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="p" color="text.secondary" sx={{ fontSize: 14 }}>
                                genre: {genre}
                            </Typography>
                        </Grid>
                    </Grid>
               </Grid>
            </CardContent>
        </Card>
    )
}

export default BookCard;

