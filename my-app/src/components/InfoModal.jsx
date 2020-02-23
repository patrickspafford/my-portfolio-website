import { Modal, Paper, withStyles } from '@material-ui/core';
import React from 'react';
import './InfoModal.css';

const StyledPaper = withStyles({
root: {
    backgroundColor: '#142630',
    color: 'white'
}
})(Paper);

export default function InfoModal({open, close}) {
return(
    <Modal className='modal' open={open} onBackdropClick={close}>
        <StyledPaper className='paper'>
            <h3><b>Welcome, stranger</b></h3>
            <p className='paragraph'>Hello, my name is Patrick Spafford and welcome to my portfolio website. Feel free to contact me through
             my <a href="mailto:patrickspafford1@gmail.com">email</a> to schedule an interview or ask any questions that you might have.</p>
        </StyledPaper>
    </Modal>
)

}