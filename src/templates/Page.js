import { makeStyles } from '@material-ui/core/styles'

import Typography from '@mui/material/Typography';


// JSS
const useStyles = makeStyles(() => ({
    container: {
        padding: '15px 0',
    }
}));

const Page = ({ title, Component }) => {
    const classes = useStyles()
    return (
        <>
            <Typography variant='h2'>
                {title}
            </Typography>
            <Component />
        </>
    )
};

export default Page