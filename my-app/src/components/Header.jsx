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

const StyledIconButton = withStyles({
root: {
  borderRadius: '0%'
}
})(IconButton)
export default function Header() {

    return (
      <header>
          <StyledAppBar classes position='fixed'>
            <div className='appBar'>
              <StyledIconButton>
                <MenuIcon />
              </StyledIconButton>
              <h3>Patrick Spafford</h3>
              <StyledIconButton>
                <DarkModeIcon />
              </StyledIconButton>
            </div>
          </StyledAppBar>  
      </ header>
    )
}