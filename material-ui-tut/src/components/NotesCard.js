import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { IconButton, Typography } from '@material-ui/core'
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';


export const NotesCard = ({note, handleDelete}) => {
    return (
        <div>
            <Card elevation={5}>
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
