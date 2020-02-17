import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default function NavBar() {

    return (
            <div>
                <Drawer>
                    <List>
                       <ListItem></ListItem>
                       <ListItem></ListItem>
                    </List>
                </Drawer>
            </div>
    );
}