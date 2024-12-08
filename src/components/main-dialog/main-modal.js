import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

import "./main-modal.css";
import "./main-modal-mobile.css";
import close from "./closeImg.svg"
import telegram from "../../pages/main/image-main/telega.svg"


export default function FormDialogModal({ className }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button className={className} variant="outlined" onClick={handleClickOpen}>
                Связаться
            </Button>
            <Dialog
    className='dialog__modal'
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
>
    <DialogTitle id="alert-dialog-title" className='close__dialog-container'>
        <Button className="close__dialog" variant="text" onClick={handleClose}>
            <img src={close} alt="Закрыть" />
        </Button>
    </DialogTitle>
    <DialogContent>
        <h2 className='title__form'>Оставьте <span> свои данные</span>, и мы с вами свяжемся</h2>
        <div className='dialog__container'>
            <img src={telegram} alt="Telegram" />
            <div className="main__dialog-inputGroup">
                <TextField
                    id="outlined-name"
                    label="Имя"
                    variant="outlined"
                    className="main__dialog-input"
                />
                <TextField
                    id="outlined-phone"
                    label="Телефон"
                    type="tel"
                    className="main__dialog-input"
                />
            </div>
        </div>
    </DialogContent>
    <DialogActions className='dialog__button-container'>
        <Button className='dialog__button' onClick={handleClose} autoFocus>
            Отправить
        </Button>
    </DialogActions>
</Dialog>

        </React.Fragment>
    );
}