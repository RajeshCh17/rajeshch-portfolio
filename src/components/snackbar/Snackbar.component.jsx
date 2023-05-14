import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CustomizedSnackbar({open,setOpen}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <Snackbar open={open}
        autoHideDuration={2000}
        onClose={handleClose}>
        <Alert open={open} autoHideDuration={2000} onClose={handleClose} severity="success">
            Thanks will reply ASAP!     
        </Alert>
      </Snackbar>
    </div>
  );
}
