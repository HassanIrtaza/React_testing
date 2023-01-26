import React from 'react'
import TextField from '@mui/material/TextField';

import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
function Episodeinfo({ episodes }) {
    return (
        <Grid container spacing={2}>
            {episodes?.map((item) => (
                < Grid item xs={6} md={3} >
                    <ListItem alignItems="flex-start"  >
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={item?.image?.medium} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.name}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {`season : ${item.season}`}
                                    </Typography>
                                    <br />
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {`episode : ${item.number}`}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </Grid>
            ))
            }
        </Grid >
    )
}

export default Episodeinfo