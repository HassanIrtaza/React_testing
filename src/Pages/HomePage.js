import '../App.css';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Markup } from 'interweave';
function HomePage() {
    let navigate = useNavigate();
    const [change, setChange] = useState()
    const [moviesList, setMoviesList] = useState([])
    const ClickHandlerxy = () => {
        localStorage.setItem("name", change)
        axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${change}`).then((res) => {
            setMoviesList([res.data])

        }).catch((err) => console.log(err))
    }
    const cardClicked = (id) => {
        navigate(`../pelicula/${id}`);
    }
    return (
        <>
            <div className="App">
                <TextField id="standard-basic" label="Season search" variant="standard" onChange={e => setChange(e.target.value)} />
                <Button variant="outlined" onClick={ClickHandlerxy}>Search</Button>
            </div>
            <div className='cards' style={{ marginTop: "-200px" }}>
                {moviesList.lenght !== 0 ? moviesList?.map((item) => (
                    <>
                        <Card sx={{ maxWidth: 345 }} style={{ float: "left" }} onClick={() => cardClicked(item.id)}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={item?.image?.original ? item?.image?.medium : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"}
                                    alt={item?.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item?.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <Markup content={item?.summary} />
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </>
                )) :
                    <></>
                }
            </div>
        </>
    )
}

export default HomePage