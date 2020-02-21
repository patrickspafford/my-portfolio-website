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
import { withStyles } from '@material-ui/core';
import './HomePage.css';

const StyledCard = withStyles({
   root: {
       width: '35%',
       height: '45%',
       marginTop: '10px',
       marginRight: '10px',
       marginLeft: '10px',
       border: '2px solid white',
       backgroundColor: '#6d8fa1',
       minWidth: '300px',
       maxWidth: '700px'
   }
  })(Card);

const StyledGrid = withStyles({
    container: {
        padding: '10px'
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

export default function HomePage() {

const cardData = [
{
    title: "My Coding Projects",
    image: ProjectsImage,
    buttons: ["Explore"],
    href: '/projects',
    buttonRefs: ['/projects']
},
{
    title: "My Hobbies",
    image: Hobbies,
    buttons: ["Explore"],
    href: '/hobbies',
    buttonRefs: ['/hobbies']
},
{
    title: "My Resume",
    image: ProfessionalPhoto,
    buttons: ["Explore", "Download pdf"],
    href: '/resume',
    buttonRefs: ['/resume', '/resume']
},
{
    title: "What's On My Bookshelf?",
    image: BookImage,
    buttons: ["Explore", "Download List"],
    href: '/bookshelf',
    buttonRefs: ['/bookshelf', '/bookshelf']
}]
return (
<div style={{paddingTop: '60px'}}>
<StyledGrid container={true} justify="space-evenly">
    {cardData.map(card => (
        <StyledCard key={card.title}>
            <CardActionArea href={card.href}>
                <StyledCardMedia src={card.image} title={card.title} height="400" component="img" />
                <CardContent>
                    <h2 className='h2'><u>{card.title}</u></h2>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {card.buttons.map((buttonContent, i) => (<Button key={i} href={card.buttonRefs[i]} size="small"><h4 className='h4'>{buttonContent}</h4></Button>))}
            </CardActions>
        </StyledCard>
    ))}
</ StyledGrid>
</div>

)

}