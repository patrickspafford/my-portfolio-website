import { Modal, Paper, withStyles } from '@material-ui/core';
import React from 'react';
import './InfoModal.css';
import ReactPicture from '../../assets/reactPicture.png';

const StyledPaper = withStyles({
root: {
    background: 'linear-gradient(#253741, #000000)',
    color: 'white'
}
})(Paper);

export default function InfoModal({open, close}) {
return(
    <Modal className='modal' open={open} onEscapeKeyDown={close} keepMounted={true} onBackdropClick={close}>
        <StyledPaper className='paper'>
                <h3 className='infoModalTitle'>
                    <b>Welcome, stranger</b>
                </h3>
            <img alt="React logo" src={ReactPicture} style={{height: '25%', width: '25%'}} draggable={false} />
            <p className='paragraph'>Hello, my name is Patrick Spafford and welcome to my portfolio website built with React. Feel free to contact me through
             my <a href="mailto:admin@patrickspafford.com">email</a> to schedule an interview or ask any questions that you might have.</p>
        </StyledPaper>
    </Modal>
)

}