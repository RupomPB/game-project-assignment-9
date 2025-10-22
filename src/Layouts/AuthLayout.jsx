import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className=" bg-base-300 min-h-screen">
            <header>
                <Navbar></Navbar>
            </header>
            <main className='max-w-7xl mx-auto px-4 py-10 m-2'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;