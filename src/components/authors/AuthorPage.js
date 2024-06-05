import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import CardElement from '../shared/Card';
import Loader from "../shared/Loader";




function AuthorPage() {
    const {slug }= useParams();
    const {loading, data, error} = useQuery(GET_AUTHOR_INFO, {variables:{slug}})
    if( loading) return <Loader />
    if(error) return null;
    return (
<Container maxWidth='lg'>
<Grid container mt={10}>
<Grid item xs={12} display='flex' flexDirection='column' alignItems='center'>
<Avatar src={data?.author?.avatar?.url} sx={{width: 250, height: 250}} />
<Typography fontWeight={700} mt={4} component='h3' variant="h5">{data?.author.name}</Typography>
<Typography color='text.secondary' mt={2} component='p' variant="h5">{data?.author.filed}</Typography>

</Grid>
<Grid item xs={12}>
<div dangerouslySetInnerHTML={{__html: data.author.description.html}}>

</div>
</Grid>
<Grid item xs={12} mt={6}>
<Typography component='h3' variant="h5" fontWeight={700}>
    Blogs of {data.author.name}
</Typography>
<Grid container spacing={2} mt={2}>
    {data.author.posts.map((post) => (   <Grid item xs={12} sm={6} md={4} key={post.id}>
             <CardElement title={post.title} slug={post.slug} coverPhoto={post.coverPhoto} />
             </Grid>)
    )}
</Grid>
</Grid>
</Grid>
</Container>
    )
}

export default AuthorPage;