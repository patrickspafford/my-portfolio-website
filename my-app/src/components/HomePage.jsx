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
       backgroundColor: '#496e9c',
       minWidth: '300px',
       maxWidth: '700px'
   }
  })(Card);

const StyledGrid = withStyles({
    container: {
        padding: '30px'
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

return (
<div style={{paddingTop: '60px'}}>
<StyledGrid container={true} justify="space-evenly">
    <StyledCard>
        <CardActionArea>
            <StyledCardMedia src={ProjectsImage} title="Coding Projects" height="400" component="img" />
            <CardContent>
                <h2 className='h2'><u>My Coding Projects</u></h2>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small">
                <h4 className='h4' >Share</h4>
            </Button>
            <Button size="small">
                <h4 className='h4' >Explore</h4>
            </Button>
        </CardActions>
    </StyledCard>
    <StyledCard>
        <CardActionArea>
            <StyledCardMedia src={Hobbies} title="Hobbies" height="400" component="img" />
            <CardContent>
                <h2 className='h2'><u>My Hobbies</u></h2>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small">
                <h4 className='h4' >Share</h4>
            </Button>
            <Button size="small">
                <h4 className='h4' >Learn More</h4>
            </Button>
        </CardActions>
    </StyledCard>
    <StyledCard>
      <CardActionArea>
        <StyledCardMedia src={ProfessionalPhoto} title="Resume" height="400" component="img" />
        <CardContent>
            <h2 className='h2'><u>My Resume</u></h2>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">
            <h4 className='h4' >Share</h4>
        </Button>
        <Button size="small">
            <h4 className='h4' >Download</h4>
        </Button>
      </CardActions>
    </StyledCard> 
    
    <StyledCard>
        <CardActionArea>
            <StyledCardMedia src={BookImage} title="What's On My Bookshelf?" height="400" component="img" />
            <CardContent>
                <h2 className='h2'><u>What's On My Bookshelf?</u></h2>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small">
                <h4 className='h4'>Share</h4>
            </Button>
            <Button size="small">
                <h4 className='h4'>Explore</h4>
            </Button>
        </CardActions>
    </StyledCard>
</ StyledGrid>
</div>

)

}