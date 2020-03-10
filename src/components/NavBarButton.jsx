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
      borderRadius: '0%',
      color: '#eee',
      marginLeft: '65px',
      marginVertical: '20px'
    }
    })(IconButton);

export default function NavBarButton({icon, name, href, isBorderBottom}) {
    return (
        <ListItem key={name} style={{borderBottom : isBorderBottom ? '1.5px solid white' : undefined }}>
            <ThemeProvider theme={theme}>
            <StyledIconButton size="small" style={{margin: '0px'}} href={href} >
            {icon}
            {name}
            </StyledIconButton>
            </ThemeProvider>
        </ListItem>
    );
}