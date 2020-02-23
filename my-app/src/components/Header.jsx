import React, { useState } from 'react';
import InfoModal from './InfoModal';
import { IconButton, AppBar, Drawer, Tooltip, List, ListItem, FormControlLabel, Switch, withStyles } from '@material-ui/core';
import './Header.css'
import { Info, GitHub, Book, ContactMail, Code, SportsHandball,
  AccountTree, Description, Home, LinkedIn, Menu} from '@material-ui/icons'

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
  color: '#eee',
  marginLeft: '65px'
}
})(IconButton)


const StyledDrawer = withStyles({
  paper: {
    backgroundColor: '#142630',
    color: '#eee'
  }
})(Drawer);

const StyledSwitch = withStyles({
  thumb: {
    backgroundColor: '#92dff0'
  },
  track: {
    backgroundColor: '#fff'
  }
})(Switch);


export default function Header() {
const [open, setOpen] = useState(false);
const [darkMode, setDarkMode] = useState(false);
const [infoModal, setInfoModal] = useState(false);
const navBarItems = [
  {
    name: "Home",
    icon: <Home style={{padding: '15px'}} />,
    href: "/"
  },
  {
    name: "Bookshelf",
    icon: <Book style={{padding: '15px'}}/>,
    href: "/bookshelf"
  },
  {
    name: "Contact Me",
    icon: <ContactMail style={{padding: '15px'}}/>,
    href: "mailto:patrickspafford1@gmail.com"
  },
  {
    name: "Coding Projects",
    icon: <Code style={{padding: '15px'}}/>,
    href: "/projects"
  },
  {
    name: "GitHub",
    icon: <AccountTree style={{padding: '15px'}} />,
    href: "https://github.com/patrickspafford"
  },
  {
    name: "Hobbies",
    icon: <SportsHandball style={{padding: '15px'}} />,
    href: "/hobbies"
  },
  {
    name: "LinkedIn",
    icon: <LinkedIn style={{padding: '15px'}} />,
    href: "https://www.linkedin.com/in/patrickspafford/"
  },
  {
    name: "Resume",
    icon: <Description style={{padding: '15px'}} />,
    href: "/resume"
  } ]

const toggleDarkMode = () => {
  setDarkMode(!darkMode);
}
return ([
      <header>
          <StyledAppBar position='fixed'>
            <div className='appBar'>
              <Tooltip title='Menu'>
                <StyledIconButton onClick={() => setOpen(true)}>
                  <Menu/>
                </StyledIconButton>
              </Tooltip>
              <Tooltip title='GitHub'>
                <StyledIconButton href="https://github.com/patrickspafford" target="_blank" rel="noopener noreferrer">
                    <GitHub />
                  </StyledIconButton>
              </Tooltip>
                  <StyledIconButton size="small" href="/">
                    <p>Patrick Spafford's Portfolio</p>
                  </StyledIconButton>
              <Tooltip title='Info'>
                <StyledIconButton onClick={() => setInfoModal(!infoModal)}>
                  <Info />
                </StyledIconButton>
              </Tooltip>
              <StyledIconButton size="small">
              <FormControlLabel label="Dark Mode" control={<StyledSwitch onChange={() => toggleDarkMode} />} />
              </StyledIconButton>
            </div>
          </StyledAppBar>  
      </ header>,
      <InfoModal open={infoModal} close={() => setInfoModal(false)} />,
      <div>
      <StyledDrawer open={open} onBackdropClick={(e) => setOpen(false)} transitionDuration={300}>
          <List>
            {Object.values(navBarItems).map((navBarItem, i) => {
              return (
              <ListItem key={navBarItem.name} style={{borderBottom: i === 0 ? '2px solid white' : undefined}}>
                 <StyledIconButton size="small" style={{margin: '0px'}} href={navBarItem.href}>
                 {navBarItem.icon}
                 {navBarItem.name}
                 </StyledIconButton>
              </ListItem>)
            })}
          </List>
      </StyledDrawer>
      </div>
])}