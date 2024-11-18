import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';


const AuthLayout = () => {
    return (
        <div className='bg-slate-100'>
           <header className='py-10 w-11/12 mx-auto'>
            <Navbar></Navbar>
           </header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default AuthLayout;