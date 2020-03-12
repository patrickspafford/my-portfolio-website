import React from 'react';
import Grid from '@material-ui/core/Grid';
import HomeCard from './HomeCard';
import Hobbies from '../../assets/Hobbies.jpg';
import ProjectsImage from '../../assets/ProjectsImage.png';
import ProfessionalPhoto from '../../assets/professionalPhoto.jpg';
import BookImage from '../../assets/SheHasHerMothersLaugh.jpg';
import Resume from '../../assets/Resume.pdf'
import Bookshelf from '../../assets/BookshelfList.pdf'
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
    href: Resume,
    buttonRefs: [Resume, Resume],
    download: [false, 'PatrickSpaffordResume']
},
{
    title: "What's On My Bookshelf?",
    image: BookImage,
    buttons: ["Explore", "Download List"],
    href: '/bookshelf',
    buttonRefs: ['/bookshelf', Bookshelf],
    download: [false, 'PatrickSpaffordBookshelf']
}]

return (
<StyledGrid container={true} justify="space-evenly">
    {cardData.map(card => (
        <HomeCard
        href={card.href}
        key={card.href}
        image={card.image}
        buttons={card.buttons}
        title={card.title}
        buttonRefs={card.buttonRefs}
        download={card.download}
        />
    ))}
</StyledGrid>

)

}