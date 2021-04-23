import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    icon: {
        marginRight: theme.spacing(2),  // '20px'
    },
    buttons: {
        marginTop: '40px',
    },
    cardGrid: {
        marginTop: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia :{
        paddingTop: '56.25%'
    },
    cardContent:{
        flexGrow: 1,
    },
    footer:{
        marginTop: '2%',
        padding:'2%',
        backgroundColor: '#8412'
    }
}));

export default useStyles;