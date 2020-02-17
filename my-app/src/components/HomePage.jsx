import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ProjectsImage from '../pictures/ProjectsImage.png';
import ProfessionalPhoto from '../pictures/professionalPhoto.jpg';
import { withStyles } from '@material-ui/core';
import './HomePage.css';

const StyledCard = withStyles({
   root: {
       width: '40%',
       height: '40%',
       marginTop: '10px',
       marginRight: '10px',
       marginLeft: '10px',
       border: '2px solid white',
       paddingTop: '50px',
       backgroundColor: '#496e9c'
   }
  })(Card);

const StyledGrid = withStyles({
    container: {
        padding: '30px'
    }

})(Grid);

export default function HomePage() {

return (
<div>
<StyledGrid container={true} justify="space-evenly">
<StyledCard>
      <CardActionArea>
        <CardMedia
          src={ProjectsImage}
          title="Projects"
          height="400"
          component="img"
        />
        <CardContent>
            <h3 className='h3'>My Coding Projects</h3>
            <p className='p'>React.js, Java, Python, C++, you name it.</p>
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
        <CardMedia
          src={ProfessionalPhoto}
          title="Projects"
          height="400"
          component="img"
        />
        <CardContent>
            <h3 className='h3'>My Resume</h3>
            <p className='p'>In everyone's favorite format (pdf)</p>
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
    
    </ StyledGrid>
</div>

)

}