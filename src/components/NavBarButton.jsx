import React from 'react';
import { ListItem, IconButton, withStyles } from '@material-ui/core';

const StyledIconButton = withStyles({
    root: {
      borderRadius: '0%',
      color: '#eee',
      marginLeft: '65px'
    }
    })(IconButton);

export default function NavBarButton({icon, name, href, isBorderBottom}) {
    return (
        <ListItem key={name} style={{borderBottom : isBorderBottom ? '1.5px solid white' : undefined }}>
            <StyledIconButton size="small" style={{margin: '0px'}} href={href} >
            {icon}
            {name}
            </StyledIconButton>
        </ListItem>
    );
}