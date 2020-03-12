import React from 'react';
import { Drawer, List, withStyles } from '@material-ui/core';
import LeftDrawerButton from './LeftDrawerButton';
import { Book, ContactMail, Code, SportsHandball,
AccountTree, Description, Home, LinkedIn, GitHub } from '@material-ui/icons';

const StyledDrawer = withStyles({
    paper: {
      backgroundColor: '#142630',
      color: '#eee'
    }
  })(Drawer);

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
      icon: <GitHub style={{padding: '15px'}} />,
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

export default function LeftDrawer({drawerOpen, handleDrawerClose}) {
const navBarData = navBarItems;
return (
    <div>
    <StyledDrawer open={drawerOpen} onBackdropClick={(e) => handleDrawerClose()} transitionDuration={300}>
        <List>
          {navBarData.map((navBarItem, i) => {
            return (
              <LeftDrawerButton icon={navBarItem.icon} key={navBarItem.name} name={navBarItem.name} href={navBarItem.href} isBorderBottom={i === 0} />
            )
          })}
        </List>
    </StyledDrawer>
    </div>
)

}