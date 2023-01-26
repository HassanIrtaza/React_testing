import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Markup } from 'interweave';
import Episodeinfo from '../Components/Episodeinfo';
import CastInfo from '../Components/castinfo';
import Generalinfo from '../Components/Generalinfo';
import Loader from '../Components/Loader';
function Detail() {

    const [episodes, setEpisodes] = useState([])
    const [cast, setcast] = useState([])
    const [gerenalinfo, setGerenalinfo] = useState([])
    const [loading, setLoading] = useState(false)
    const [toDisplay, settoDisplay] = useState("General")
    const { id } = useParams();
    const episodeInfo = () => {
        setLoading(true)
        settoDisplay("episodeInfo")
        axios.get(`https://api.tvmaze.com/shows/${id}/episodes`).then((resp) => {
            setEpisodes(resp.data)
            setLoading(false)
        }).catch((err) => setLoading(false))
    }
    const castInfo = () => {
        setLoading(true)
        settoDisplay("castInfo")
        axios.get(`https://api.tvmaze.com/shows/${id}/cast`).then((resp) => {
            setcast(resp.data)
            setLoading(false)
        }).catch((err) => setLoading(false))
    }
    const generalinfo = () => {
        setLoading(true)
        settoDisplay("General")
        const change = localStorage.getItem("name")
        axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${change}`).then((res) => {
            setGerenalinfo([res.data])
            setLoading(false)
        }).catch((err) => setLoading(false))
    }
    return (
        <>
            <div >
                <Button variant="outlined" onClick={generalinfo}>General Info</Button>
                <Button variant="outlined" onClick={episodeInfo}>Episode info</Button>
                <Button variant="outlined" onClick={castInfo}>Cast info</Button>
            </div>
            {loading && <Loader />}
            {toDisplay === "episodeInfo" &&
                <Episodeinfo episodes={episodes} />
            }
            {toDisplay === "castInfo" &&
                <CastInfo episodes={cast} />
            }
            {toDisplay === "General" &&
                <div>
                    {gerenalinfo.lenght !== 0 ? gerenalinfo?.map((item) => (
                        <>
                            <Card sx={{ maxWidth: 345 }} style={{ float: "left" }}>
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
            }
        </>

    )
}

export default Detail