import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Markup } from 'interweave';
function Generalinfo({ moviesList, clickHandler }) {
    return (
        <>
            {moviesList.lenght !== 0 ? moviesList?.map((item) => (
                <>
                    <Card sx={{ maxWidth: 345 }} style={{ float: "left" }} onClick={() => clickHandler(item.id)}>
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
        </>
    )
}

export default Generalinfo