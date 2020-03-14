import { Modal, Paper, withStyles } from '@material-ui/core';
import React from 'react';
import './InfoModal.css';
import ReactPicture from '../../assets/reactPicture.png';

const StyledPaper = withStyles({
root: {
    background: 'linear-gradient(rgba(20,38,48, 1), rgba(5, 5, 5, 0.6))',
    color: 'white'
}
})(Paper);

export default function InfoModal({open, close}) {
return(
    <Modal className='modal' open={open} onEscapeKeyDown={close} keepMounted={true} onBackdropClick={close}>
        <StyledPaper className='paper'>
            <img alt="React logo" src={ReactPicture} style={{height: '25%', width: '25%', paddingTop: '20px'}} draggable={false} />
            <p className='paragraph'>Hello, my name is Patrick Spafford and welcome to my portfolio website built with React. Feel free to contact me through
             my <a href="mailto:pas0037@auburn.edu">email</a> to schedule an interview or ask any questions that you might have.</p>
        </StyledPaper>
    </Modal>
)

}