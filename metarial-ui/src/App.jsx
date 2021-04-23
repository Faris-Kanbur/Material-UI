import React from 'react'
import { Typography, AppBar,Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container  } from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

import useStyles from './styles';




const App = () => {
    const classes = useStyles();
    return (
        <>
          <CssBaseline />
          <AppBar position="relative">
            <Toolbar>
                <PhotoCameraIcon  className={classes.icon}/>    
                <Typography variant="h6">
                    Prhoto Album
                </Typography>
            </Toolbar>    
          </AppBar>  
          <main>
              <div className={classes.container}>
                  <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5"  align="justify" color="textSecondary">
                            Are you new to Material UI? Have you heard about it but never actually tried it out? Maybe you dived into it but it felt overwhelming? It's easy to learn if you know where to start! 
                        </Typography>
                        <div className={classes.buttons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>

                  </Container>
              </div>
          </main>
        </>
    )
}

export default App
