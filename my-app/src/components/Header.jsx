import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import BrightnessMedium from '@material-ui/icons/BrightnessMedium';
import './Header.css'
import { withStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import InfoIcon from '@material-ui/icons/Info';
import GitHubIcon from '@material-ui/icons/GitHub';

const StyledAppBar = withStyles({
  colorPrimary: 
  {
    backgroundColor: '#142630'
  }
})(AppBar);

const StyledIconButton = withStyles({
root: {
  borderRadius: '0%'
}
})(IconButton)

const StyledDrawer = withStyles({
  paper: {
    backgroundColor: '#053752'
  }
})(Drawer);

export default function Header() {
const [open, setOpen] = useState(false);
return ([
      <header>
          <StyledAppBar position='fixed'>
            <div className='appBar'>
                <StyledIconButton onClick={() => setOpen(true)}>
                  <MenuIcon />
                </StyledIconButton>
                <StyledIconButton>
                    <GitHubIcon />
                  </StyledIconButton>
              <h3>Patrick Spafford's Portfolio</h3>
              <StyledIconButton>
                <InfoIcon />
              </StyledIconButton>
              <StyledIconButton>
                <BrightnessMedium />
              </StyledIconButton>
            </div>
          </StyledAppBar>  
      </ header>,
      <div>
      <StyledDrawer open={open} onBackdropClick={() => setOpen(false)} transitionDuration={300}>
          <List>
            <ListItem></ListItem>
            <ListItem>Test Item</ListItem>
            <ListItem>Test Item 2</ListItem>
          </List>
      </StyledDrawer>
      </div>
])}