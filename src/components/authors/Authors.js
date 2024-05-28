
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { Avatar, Grid, Typography, Divider } from "@mui/material";
function Authors() {
  const {data, error, loading} = useQuery(GET_AUTHORS_INFO);
  console.log({data, error, loading});

  if( loading) return <div>loading ...</div>
  if(error) return null;
  const {authors} = data;

    return (
     <Grid container sx={{boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4, alignItems: 'center'}}>
      {authors.map((author) => (
 
        <Grid item xs={12}  padding={2}  key={author.id}>
          <a href={`/authors/${author.slug}`} style={{display: 'flex', alignItems: 'center', textDecoration: 'none'}}>
          <Avatar src={author.avatar.url}/>
          <Typography component="p" variant="p" color="text.secondary" ml={1}>{author.name}</Typography>
          </a>
   

   <Divider variant="middle" sx={{margin: '10px'}} />
           </Grid>
 
      
    

      ))}
     </Grid>
    );
  }
  
  export default Authors;