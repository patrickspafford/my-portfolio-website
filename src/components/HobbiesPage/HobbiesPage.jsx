import React from 'react';
import Header from '../HeaderFooter/Header'
import HobbiesGridList from './HobbiesGridList';
import Footer from '../HeaderFooter/Footer';
import './HobbiesPage.css'
export default function HobbiesPage() {
    return(
    <div className='hobbiesPage'>
        <Header />
        <HobbiesGridList />
        <Footer /> 
    </div>
    )
}