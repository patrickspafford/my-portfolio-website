import React from 'react';
import { ListItem, IconButton, withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
    overrides: {
      MuiTouchRipple: {
        root: {
          overflow: 'visible',
        }
      }
    }
  });

const StyledIconButton = withStyles({
    root: {
      color: '#eee',
      marginLeft: '65px'
    }
    })(IconButton);

export default function NavBarButton({icon, name, href, isBorderBottom}) {
    return (
        <ListItem key={name} style={{borderBottom : isBorderBottom ? '1.2px solid white' : undefined }}>
            <ThemeProvider theme={theme}>
              <StyledIconButton size="small" style={{margin: '0px'}} href={href} >
              {icon}
              <p style={{fontSize: '0.8em'}}>{name}</p>
              </StyledIconButton>
            </ThemeProvider>
        </ListItem>
    );
}