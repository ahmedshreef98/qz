import { makeStyles } from '@mui/styles';

export default makeStyles(() =>( {
    root: {
        maxWidth:'100%'
    },
    media: {
        height: 0,
        paddingTop:'56.25%'
    },
    cardActions: {
        display: 'flex',
        justifyContent:'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent:'space-between'
    }
}))