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
function CastInfo({ episodes }) {
    return (
        <Grid container spacing={2}>
            {episodes?.map((item) => (
                < Grid item xs={6} md={3} >
                    <ListItem alignItems="flex-start"  >
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={item.person.image.medium} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.character.name}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {`real name : ${item.person.name}`}
                                    </Typography>
                                    <br />
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {`gender : ${item.person.gender}`}
                                    </Typography>
                                    <br />
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {`country : ${item?.person?.country?.name}`}
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

export default CastInfo