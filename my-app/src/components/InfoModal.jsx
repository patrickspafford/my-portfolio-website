import { Modal, Paper } from '@material-ui/core';
import React from 'react';
import { PinDropSharp } from '@material-ui/icons';

export default function InfoModal({open, close,...props}) {

return(
    <Modal open={open} onBackdropClick={props.close}><Paper><p>Yep</p></Paper></Modal>
)

}