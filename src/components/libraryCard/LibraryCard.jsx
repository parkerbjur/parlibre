import { 
Grid,
Card,
CardContent,
Typography,
} from '@mui/material';


const LibraryCard = (props) => {
    const { pictureName, name, address, id } = props.library;
    
    const LibRedirect = (id) => {
        console.log(id);
        window.location.assign(`/library/${id}/`);
    }

    console.log(props.library);

    return (
        <Card sx={{ marginBottom: '1vh' }} onClick={() => { LibRedirect(id) }}>
            <CardContent>
                <Grid container columnSpacing={1}>
                    <Grid item xs={2}>
                        <img 
                            src={`https://d237qkgix41sfb.cloudfront.net/${pictureName}`} 
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

