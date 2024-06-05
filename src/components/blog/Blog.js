import { useQuery } from "@apollo/client";
import { GET_BLOG } from "../../graphql/queries";
import { Grid } from "@mui/material";
import CardElement from "../shared/Card";
import Loader from "../shared/Loader";



function Blog() {
const {data, loading, errors} = useQuery(GET_BLOG);
if (loading) return <Loader />
if (errors) return null;
    return (
     <Grid container spacing={2}>
      {data?.posts?.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id} display='flex'>
<CardElement {...post} />
</Grid>
      ))}

     </Grid>
    );
  }
  
  export default Blog;