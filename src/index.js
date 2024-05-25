import React from 'react';
import ReactDOM from 'react-dom/client';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material';
import theme from './mui/Theme';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAGHCMS_URI,
  cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
   <ThemeProvider theme={theme}>
        <App />
        </ThemeProvider>
  </ApolloProvider>

);


