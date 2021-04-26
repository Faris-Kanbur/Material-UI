import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { Avatar, IconButton, makeStyles, Typography } from '@material-ui/core'
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';


const useStyles = makeStyles({
    avatar: {
        backgroundColor: (note) => {
            if(note.category === 'work') {
                return '#73bfb2'
            }else if (note.category === 'reminders'){
                return '#ac71bd'
            }else if (note.category === 'money'){
                return '#bd8e5c'
            }else {
                return '#76995d'
            }
        }
    }
})


export const NotesCard = ({note, handleDelete}) => {
    const classes = useStyles(note);

    return (
        <div>
            <Card elevation={5}>
                <CardHeader 
                avatar={
                    <Avatar className={classes.avatar}>
                        {note.category[0].toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton onClick={() => handleDelete(note.id)}>
                        <DeleteTwoToneIcon />
                    </IconButton>
                }
                title={note.title}
                subheader={note.category}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
