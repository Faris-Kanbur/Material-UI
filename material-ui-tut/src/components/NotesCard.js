import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { IconButton, makeStyles, Typography } from '@material-ui/core'
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';


const useStyles = makeStyles({
    test: {
        border: (note) => {
            if(note.category === 'work') {
                return '1px solid red'
            }
        }
    }
})


export const NotesCard = ({note, handleDelete}) => {
    const classes = useStyles(note);

    return (
        <div>
            <Card elevation={5} className={classes.test}>
                <CardHeader 
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
