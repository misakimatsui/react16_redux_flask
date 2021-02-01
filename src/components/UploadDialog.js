import React from 'react';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SimpleFileUpload from "./SimpleFileUpload";

export default function UploadDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <MenuItem variant="outlined" color="primary" onClick={handleClickOpen}>
                <div style={{fontSize:20}}>Upload File</div>
            </MenuItem>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"file upload"}</DialogTitle>
                <DialogContent>
                    <SimpleFileUpload
                        onClose={handleClose}
                    />
                </DialogContent>
            </Dialog>
        </div>
    );
}
