import React from 'react';
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import DarkModeIcon from '@material-ui/icons/BrightnessMedium';
import './Header.css'
import { withStyles } from '@material-ui/core';

const StyledAppBar = withStyles({
  colorPrimary: 
  {
    backgroundColor: '#D45E25'
  }
})(AppBar);
export default function Header() {

    return (
      <header>
          <StyledAppBar classes position='fixed'>
            <div className='appBar'>
              <IconButton>
                <MenuIcon />
              </IconButton>
              <h3>Patrick Spafford</h3>
              <IconButton>
                <DarkModeIcon />
              </IconButton>
            </div>
          </StyledAppBar>  
      </ header>
    )
}