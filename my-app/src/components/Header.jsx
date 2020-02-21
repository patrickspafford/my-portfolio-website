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
const [darkMode, setDarkMode] = useState(false);
const navBarItems = [
  {
    name: "Bookshelf",
    icon: <BookIcon style={{padding: '15px'}}/>,
    href: "/bookshelf"
  },
  {
    name: "Contact Me",
    icon: <ContactMailIcon style={{padding: '15px'}}/>,
    href: "/"
  },
  {
    name: "Coding Projects",
    icon: <CodeIcon style={{padding: '15px'}}/>,
    href: "/projects"
  },
  {
    name: "GitHub",
    icon: <AccountTreeIcon style={{padding: '15px'}} />,
    href: "https://github.com/patrickspafford"
  },
  {
    name: "Hobbies",
    icon: <SportsHandballIcon style={{padding: '15px'}} />,
    href: "/hobbies"
  },
  {
    name: "Resume",
    icon: <DescriptionIcon style={{padding: '15px'}} />,
    href: "/resume"
  } ]

const toggleDarkMode = () => {
  setDarkMode(!darkMode);
}
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
              <StyledIconButton onClick={() => toggleDarkMode()}>
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
              <ListItem key={navBarItem.name}>
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