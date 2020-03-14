import React from 'react';
import { makeStyles, GridList, GridListTile, GridListTileBar} from '@material-ui/core';
import Azure from '../../assets/azure.png';
import Deftones from '../../assets/deftones.png';
import LateKick from '../../assets/lateKick.jpg';
import Rec from '../../assets/rec.jpg';
import Ultimate from '../../assets/ultimate.jpg';
import Explore from '../../assets/explore.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    padding: '10px',
    background: 'linear-gradient(#eee, #405bc7)',
  },
  gridList: {
    width: '85%',
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 90%, rgba(0,0,0,0) 100%)',
    whiteSpace: 'normal'
  },
  title: {
    overflow: 'auto',
    whiteSpace: 'normal'
  },
  icon: {
    color: 'white',
  },
}));

const tileData = [
    {
        img: Azure,
        title: "Cloud: Microsoft Azure",
        featured: false
    },
    {
        img: LateKick,
        title: 'Podcast: The Late Kick',
        featured: false
    },
    {
      img: Explore,
      title: 'Exploring: Yosemite',
      featured: true
    },
    {
        img: Rec,
        title: 'Exercise: The Auburn Rec',
        featured: false
    },
    {
        img: Deftones,
        title: "Music: Deftones",
        featured: false
    },
    {
      img: Ultimate,
      title: "Sports: Intramural Ultimate Frisbee",
      featured: true
  },
]
export default function HobbiesGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList spacing={1} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
            <img src={tile.img} alt={tile.title}  />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionPosition="left"
              className={classes.titleBar}
              classes={{title: classes.title}}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}