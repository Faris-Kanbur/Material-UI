import React from 'react'
import { Typography, AppBar,Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container  } from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

import useStyles from './styles';


const cards = [1,2,3,4,5,6,7,8,9]

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
              <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>

                    {cards.map((card) => 
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card className={classes.card} >
                            <CardMedia 
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                            <CardContent className={classes.CardContent}>
                                <Typography gutterBottom variant="h5">
                                    Heading
                                </Typography>
                                <Typography>
                                    This is media card. You can use this section to describe the content.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">View</Button>
                                <Button size="small" color="primary">Edit</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    )}
                </Grid>
              </Container>
          </main>
          <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                Learn Material UI in One Hour - React Material UI Project Tutorial
                </Typography>
          </footer>
        </>
    )
}

export default App
