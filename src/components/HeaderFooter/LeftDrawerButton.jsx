import React from 'react';
import { ListItem, IconButton, createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core';

const theme = createMuiTheme({
    overrides: {
      MuiTouchRipple: {
        root: {
          overflow: 'visible',
        }
      }
    }
  });
const useStyles = makeStyles(theme => ({
iconButton: {
  color: '#eee',
  marginLeft: '65px'
},
listItem: {
  paddingTop: '0px'
}
}))
export default function LeftDrawerButton({icon, name, href, isBorderBottom}) {
  const classes = useStyles();
    return (
        <ListItem key={name} classes={{root: classes.listItem }} style={{borderBottom : isBorderBottom ? '1.2px solid white' : undefined }}>
            <ThemeProvider theme={theme}>
              <IconButton classes={{root: classes.iconButton }} size="small" style={{margin: '0px'}} href={href} >
              {icon}
              <p style={{fontSize: '0.8em'}}>{name}</p>
              </IconButton>
            </ThemeProvider>
        </ListItem>
    );
}