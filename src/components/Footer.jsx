import React from 'react';
import { AppBar, withStyles, IconButton } from '@material-ui/core';

const StyledAppBar = withStyles({
    colorPrimary: 
    {
      backgroundColor: '#142630',
      color: '#eee'
    },
    positionFixed: {
        bottom: 0,
        top: 'auto'
    }
  })(AppBar);

export default function Footer() {

return (
    <StyledAppBar position='sticky'>
        <br />
        <br />
        <br />
    </StyledAppBar>
)


}
