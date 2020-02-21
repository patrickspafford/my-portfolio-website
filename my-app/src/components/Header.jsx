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
import BookIcon from '@material-ui/icons/Book';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import CodeIcon from '@material-ui/icons/Code';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import DescriptionIcon from '@material-ui/icons/Description';

const StyledAppBar = withStyles({
  colorPrimary: 
  {
    backgroundColor: '#142630',
    color: '#eee'
  }
})(AppBar);

const StyledIconButton = withStyles({
root: {
  borderRadius: '0%',
  color: '#eee'
}
})(IconButton)

const StyledDrawer = withStyles({
  paper: {
    backgroundColor: '#142630',
    color: '#eee'
  }
})(Drawer);

export default function Header() {
const [open, setOpen] = useState(false);
const navBarItems = [
  {
    name: "Bookshelf",
    icon: <BookIcon />
  },
  {
    name: "Contact Me",
    icon: <ContactMailIcon />
  },
  {
    name: "Coding Projects",
    icon: <CodeIcon />
  },
  {
    name: "GitHub",
    icon: <AccountTreeIcon />
  },
  {
    name: "Hobbies",
    icon: <SportsHandballIcon />
  },
  {
    name: "Resume",
    icon: <DescriptionIcon />
  } ]
return ([
      <header>
          <StyledAppBar position='fixed'>
            <div className='appBar'>
                <StyledIconButton onClick={() => setOpen(true)}>
                  <MenuIcon />
                </StyledIconButton>
                
                <StyledIconButton href="https://github.com/patrickspafford" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                  </StyledIconButton>
                  <StyledIconButton size="small" href="/">
                    <p>Patrick Spafford's Portfolio</p>
                  </StyledIconButton>
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
            {Object.values(navBarItems).map(navBarItem => {
              return (
              <ListItem key={navBarItem}>
                 <StyledIconButton size="small">
                 {navBarItem.icon}
                 {navBarItem.name}
                 </StyledIconButton>
              </ListItem>)
            })}
          </List>
      </StyledDrawer>
      </div>
])}