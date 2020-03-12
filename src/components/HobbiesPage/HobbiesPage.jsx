import React from 'react';
import Header from '../components/HeaderFooter/Header'
import HobbiesGridList from '../components/HobbiesPage/HobbiesGridList';
import Footer from '../components/HeaderFooter/Footer';
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