import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Layout from './components/layout/Layout';
import BlogPage from './components/blog/BlogPage';
import AuthorPage from './components/authors/AuthorPage';


function App() {

  return (
   <>
   <Layout>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blogs/:slug' element={<BlogPage/>} />
      <Route path='/authors/:slug' element={<AuthorPage />} />
    </Routes>
 
    </Layout> 
     </>

  );
}

export default App;
