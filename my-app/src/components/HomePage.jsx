import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Hobbies from '../pictures/Hobbies.jpg';
import ProjectsImage from '../pictures/ProjectsImage.png';
import ProfessionalPhoto from '../pictures/professionalPhoto.jpg';
import BookImage from '../pictures/SheHasHerMothersLaugh.jpg';
import Resume from '../pictures/Resume.pdf'
import { withStyles } from '@material-ui/core';
import './HomePage.css';

const StyledCard = withStyles({
   root: {
       width: '35%',
       marginTop: '10px',
       marginRight: '10px',
       marginLeft: '10px',
       border: '2px solid white',
       backgroundColor: '#6d8fa1',
       minWidth: '300px',
       maxWidth: '700px',
   }
  })(Card);

const StyledGrid = withStyles({
    container: {
        paddingTop: '10px'
    }

})(Grid);

const StyledCardMedia = withStyles({
    root : {
        paddingTop: '10px',  
    },
    img: {
        objectFit: 'scale-down',
    }
})(CardMedia);

const StyledButton = withStyles({
label: {
    border: '1px solid white',
    borderRadius: '5px',
    padding: '10px'
}
})(Button);

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
        <StyledCard key={card.title}>
            <CardActionArea href={card.href}>
                <StyledCardMedia src={card.image} title={card.title} height="350" component="img" />
                <CardContent>
                    <h2 className='h2'><u>{card.title}</u></h2>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {card.buttons.map((buttonContent, i) =>
                (<StyledButton key={i} href={card.buttonRefs[i]} download={card.download[i]} size="small">
                    <h4 className='h4'>{buttonContent}</h4>
                </StyledButton>))}
            </CardActions>
        </StyledCard>
    ))}
</ StyledGrid>
</div>

)

}