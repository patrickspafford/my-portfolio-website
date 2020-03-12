import React from 'react';
import { makeStyles, GridList, GridListTile, GridListTileBar} from '@material-ui/core';
import Azure from '../../pictures/azure.png';
import Deftones from '../../pictures/deftones.png';
import LateKick from '../../pictures/lateKick.jpg';
import Rec from '../../pictures/rec.jpg';
import Ultimate from '../../pictures/ultimate.jpg';
import Explore from '../../pictures/explore.jpg';

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
    width: '90%',
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));

const tileData = [
    {
        img: Azure,
        title: "Microsoft Azure",
        featured: false
    },
    {
        img: LateKick,
        title: 'Late Kick Podcast',
        featured: false
    },
    {
        img: Ultimate,
        title: "Intramural Ultimate Frisbee",
        featured: true
    },
    {
        img: Rec,
        title: 'Exercising at the Auburn Rec',
        featured: false
    },
    {
        img: Deftones,
        title: "Music",
        featured: false
    },
    {
        img: Explore,
        title: 'Exploring',
        featured: true
    }
]
export default function HobbiesGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={320} spacing={1} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}