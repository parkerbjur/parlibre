import { 
Grid,
Card,
CardContent,
Typography,
} from '@mui/material';
import { route } from 'preact-router';

const mediaURL = process.env.MEDIA_STORAGE_URL;

const LibraryCard = (props) => {
    const { pictureName, name, address, id } = props.library;
    
    const LibRedirect = (id) => {
        route(`/library/${id}/`);
    }

    return (
        <Card sx={{ marginBottom: '1vh' }} onClick={() => { LibRedirect(id) }}>
            <CardContent>
                <Grid container columnSpacing={1}>
                    <Grid item xs={2}>
                        <img 
                            src={`${mediaURL}/${pictureName}`} 
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
                                {name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="p" color="text.secondary" sx={{ fontSize: 14}}>
                                at: {address}
                            </Typography>
                        </Grid>
                   </Grid>
               </Grid>
            </CardContent>
        </Card>
    )
}

export default LibraryCard;

