import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    const navigate = useNavigation()
    const isPageLoading = navigate.state==='loading'
  return (
    <div>
        <Navbar/>
        <section className='page'>
            {isPageLoading?<div className='loading'/>:<Outlet/>}
        </section>
        
    </div>
  )
} 

export default HomeLayout;
