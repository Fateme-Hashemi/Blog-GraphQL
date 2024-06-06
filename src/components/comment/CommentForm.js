import React, {useState} from "react"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { useMutation } from "@apollo/client"
import { SEND_COMMENT } from "../../graphql/mutations"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CommentForm ({slug}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')

    const [sendComment, {data, loading}] = useMutation(SEND_COMMENT,{variables: {name, email, text, slug}})
console.log(data)
const sendHandler = () => {
    if(name && email && text) {
        sendComment();
        setName('');
        setEmail('')
        setText('')
    }else {
        toast.warn('please fill all the inputs ', {position: 'top-center'})
    }
}
if (data) {
    toast.success('Comment sent', {position: 'top-center'})
}
return(
<Grid container sx={{boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px', borderRadius: 4, py: 1, mt: 5}}>
<Grid item xs={12} m={2}>
<Typography component='p' variant="h6" fontWeight={700} color='primary'>
Comment Form
</Typography>
</Grid>
<Grid item xs={12} m={2}>
<TextField label='UserName' variant="outlined" sx={{width: '100%'}} value={name} onChange={(e) => setName(e.target.value)} />
</Grid>
<Grid item xs={12} m={2}>
<TextField label='Email' variant="outlined" sx={{width: '100%'}} value={email} onChange={(e) => setEmail(e.target.value)} />
</Grid>
<Grid item xs={12} m={2}>
<TextField label='Text' variant="outlined" sx={{width: '100%'}} value={text} onChange={(e) => setText(e.target.value)} multiline minRows={4} />
</Grid>
<Grid item xs={12} m={2}>
{loading ? <Button variant="contained" disabled onClick={sendHandler}>
  
  Sending
  </Button> : <Button variant="contained" onClick={sendHandler}>
  
  Send
  </Button>}

</Grid>
<ToastContainer />
</Grid>
    )
}

export default CommentForm