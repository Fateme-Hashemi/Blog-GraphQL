import {Typography} from "@mui/material";

function Footer () {
    return (
<footer sx={{marginTop: 'calc(10% + 60px)',
    width: '100%',
    position: 'fixed',
    bottom: 0,
    }}>
    <Typography component='p' variant="p" bgcolor='#f7f7f7' color='primary' padding='10px' textAlign='center' mt={10}>
Blog Project by GraphQL
    </Typography>
</footer>
    )
}

export default Footer;