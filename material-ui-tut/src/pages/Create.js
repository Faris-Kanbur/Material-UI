import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import SendIcon from '@material-ui/icons/SendOutlined';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  // btn:{
  //   fontSize: 60,
  //   backgroundColor: 'violet', 
  //   '&:hover':{
  //     backgroundColor: 'blue'
  //   }
  // },
  // title:{
  //   textDecoration: 'underline',
  //   marginBottom: 20
  // },
  filed:{
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  }
})

export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if ( title === '') {
      setTitleError(true)
    };

    if ( title === '') {
      setDetailsError(true)
    };

    if(title && details) {
      console.log(title, details)
    }
  }

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

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
        onChange={(e) => setTitle(e.target.value)}
        className={classes.filed} 
        label="Note Title"
        variant="outlined"
        color="secondary"
        fullWidth
        required
        error={titleError}
        />

        <TextField
        onChange={(e) => setDetails(e.target.value)}
        className={classes.filed} 
        label="Details"
        variant="outlined"
        color="secondary"
        // multiline
        rows={4}
        fullWidth
        required
        error={detailsError}
        />  

      <Button 
      type="submit" 
      color="secondary" 
      variant="contained"
      // startIcon={<SendIcon />}
      endIcon={<KeyboardArrowRightOutlinedIcon />}
      >
      Submit
      </Button>
      </form>
      <br/>
      
    </Container>
  )
}
