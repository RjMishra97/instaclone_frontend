import React, { useState  } from 'react';
import axios from "axios";
import './App.css';
import LandingPage from './components/Landing_page';
import PostView from './components/Postview';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upload from "./components/Upload"
const API_KEY =  "https://instaclone-backend-70rr.onrender.com"

const App = ()=>{
  const [userData , setuserData] = useState([])


   
    

axios.get(API_KEY+"/post")
.then((res)=>{
    console.log(res.data)
    setuserData(res.data)
})
.catch((e)=>{
    console.log(e.message)
})
 

 
return(
    <>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<LandingPage/>}/>
   <Route path='/login' element={<PostView data={userData}/>}/>
   <Route path='/Post' element={<Upload/>}/>
   </Routes>
   </BrowserRouter>
   </>
)
}


export default App