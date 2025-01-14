import './App.css';
import Header from './Header.js'
import Nav from './Nav.js'
import Footer from './Footer.js'
import Newpost from './Newpost.js'
import Postpage from './Postpage.js'
import About from './About.js'
import Missing from './Missing.js'
import Home from './Home.js'
import EditPost from './EditPost.js';
import { Route,Routes } from 'react-router-dom';
import { useEffect } from 'react'

import { useStoreActions } from 'easy-peasy';
import useFetch from './hooks/useFetch.js'


function App() {
  const setPost=useStoreActions((actions)=>actions.setPost)
  const {data,error,loading} =useFetch('http://localhost:3500/posts')

  useEffect(()=>{
      setPost(data)
    },[data])



  return (
   
      <div className="App">
        <Header title={"React Js"} />
        <Nav/>
        <Routes>
          <Route path="/" element={<Home 
          error={error}
          loading={loading}
          />} />
          <Route path="/post/:id" element={<Postpage />} />
          <Route path="/EditPost/:id" element={<EditPost />} />
          <Route path="/post" element={<Newpost />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </div>

  );
}

export default App;
