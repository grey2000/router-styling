import React from 'react'
import {  Route, Routes} from 'react-router-dom'
import Head from './Head'
import Register from './Register'
import Login from './Login'
import Error404 from './Error404'
import Home_page from '../Pages/Home_page'
import About_page from '../Pages/About_page'
import Service_page from '../Pages/Service_page'
import Contactus_page from '../Pages/Contactus_page'


export default function Router_com() {
  return (
    <>
    <Head/>
    {/* <Home_page/> */}
    <Routes>
        <Route path="/" element={<Home_page/>}/>
        <Route path="/About" element={<About_page/>}/>
        <Route path="/Service" element={<Service_page/>}/>
        <Route path="/Contactus" element={<Contactus_page/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="*" element={<Error404/>}/>
    </Routes>
    </>
  )
}
