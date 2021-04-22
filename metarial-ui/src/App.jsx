import React from 'react'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container  } from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const App = () => {
    return (
        <>
          <CssBaseline />
          <AppBar position="relative">
            <Toolbar>
                <PhotoCameraIcon />    
                <Typography variant="h6">
                    Prhoto Album
                </Typography>
            </Toolbar>    
          </AppBar>  
          <main>
              <div>
                  <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="justify" color="textSecondary">
                            Are you new to Material UI? Have you heard about it but never actually tried it out? Maybe you dived into it but it felt overwhelming? It's easy to learn if you know where to start! 
                        </Typography>
                  </Container>
              </div>
              <ButtonGroup variant="contained"  color="primary" aria-label="contained primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
             </ButtonGroup>
          </main>
        </>
    )
}

export default App
