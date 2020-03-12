import React, { useState } from 'react';
import InfoModal from '../components/HomePage/InfoModal';
import LeftDrawer from './LeftDrawer';
import { IconButton, AppBar, Tooltip, FormControlLabel, Switch, withStyles } from '@material-ui/core';
import './Header.css'
import { Info, GitHub, Menu} from '@material-ui/icons'

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
  paddingHorizontal: '36px',
  marginHorizontal: '24px'
}
})(IconButton)

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
const toggleDarkMode = () => {
  setDarkMode(!darkMode);
}
return ([
          <StyledAppBar key='appBar' position='sticky'>
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
          </StyledAppBar>,
      <InfoModal key='InfoModal' open={infoModal} close={() => setInfoModal(false)} />,
      <LeftDrawer key='LeftDrawer' drawerOpen={open} handleDrawerClose={() => setOpen(false)} />
])};