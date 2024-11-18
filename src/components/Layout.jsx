import React from 'react';
import Navbar from './Navbar';
import EcoDetails from '../Pages/EcoDetails';

const Layout = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto my-11 sticky top-0 z-50 py-10 bg-slate-100 h-32'>
            <Navbar></Navbar>
            </div>
            <div className='w-9/12 mx-auto'>
            <EcoDetails></EcoDetails>
            </div>
        </div>
    );
};

export default Layout;