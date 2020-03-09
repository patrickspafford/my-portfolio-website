import React from 'react';
import Grid from '@material-ui/core/Grid';
import HomeCard from '../components/HomeCard';
import Hobbies from '../pictures/Hobbies.jpg';
import ProjectsImage from '../pictures/ProjectsImage.png';
import ProfessionalPhoto from '../pictures/professionalPhoto.jpg';
import BookImage from '../pictures/SheHasHerMothersLaugh.jpg';
import Resume from '../pictures/Resume.pdf'
import { withStyles } from '@material-ui/core';
import './HomePage.css';

const StyledGrid = withStyles({
    container: {
        paddingTop: '10px'
    }

})(Grid);

export default function HomePage() {

const cardData = [
{
    title: "My Coding Projects",
    image: ProjectsImage,
    buttons: ["Explore"],
    href: '/projects',
    buttonRefs: ['/projects'],
    download: [false]
},
{
    title: "My Hobbies",
    image: Hobbies,
    buttons: ["Explore"],
    href: '/hobbies',
    buttonRefs: ['/hobbies'],
    download: [false]
},
{
    title: "My Resume",
    image: ProfessionalPhoto,
    buttons: ["Explore", "Download pdf"],
    href: '/resume',
    buttonRefs: [Resume, Resume],
    download: [false, 'PatrickSpaffordResume']
},
{
    title: "What's On My Bookshelf?",
    image: BookImage,
    buttons: ["Explore", "Download List"],
    href: '/bookshelf',
    buttonRefs: ['/bookshelf', ''],
    download: [false, 'PatrickSpaffordBookshelf']
}]
return (
<div style={{paddingTop: '60px'}}>
<StyledGrid container={true} justify="space-evenly">
    {cardData.map(card => (
        <HomeCard
        href={card.href}
        image={card.image}
        buttons={card.buttons}
        title={card.title}
        buttonRefs={card.buttonRefs}
        download={card.download}
        />
    ))}
</ StyledGrid>
</div>

)

}