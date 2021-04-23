import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import SendIcon from '@material-ui/icons/SendOutlined';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  btn:{
    fontSize: 60,
    backgroundColor: 'violet', 
    '&:hover':{
      backgroundColor: 'blue'
    }
  },
  title:{
    textDecoration: 'underline',
    marginBottom: 20
  }
})

export default function Create() {
  const classes = useStyles();

  return (
    <Container>
      <Typography 
      className={classes.title}
      variant="h6" 
      color="textSecondary" 
      component="h2" 
      gutterBottom>
        Create a New Note
      </Typography>

      <Button 
      className={classes.btn}
      onClick={() => console.log("You click me")}
      type="submit" 
      color="secondary" 
      variant="contained"
      // startIcon={<SendIcon />}
      endIcon={<KeyboardArrowRightOutlinedIcon />}
      >
      Submit
      </Button>
      <br/>
      
    </Container>
  )
}
