import { Modal, Paper } from '@material-ui/core';
import React from 'react';
import './InfoModal.css';

export default function InfoModal({open, close}) {
return(
    <Modal className='modal' open={open} onBackdropClick={close}>
        <Paper>
            <p>Yep</p>
        </Paper>
    </Modal>
)

}