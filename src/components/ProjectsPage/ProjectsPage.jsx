import React from 'react';
import ProjectStepper from './ProjectStepper';
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';

export default function ProjectsPage() {
    return(
    <div style={{minWidth: '320px'}}>
        <Header />
        <div>
        <ProjectStepper />
        </div>
        <Footer />  
    </div>
    
    )
}