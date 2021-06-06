import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbar({message,setMessage}) {
  //const classes = useStyles();
  const handleClose = () => {
   setMessage(false);
  };

  return (
    <div >
      <Snackbar open={message} autoHideDuration={2000} onClose={handleClose}>
        <Alert open={message} autoHideDuration={2000} onClose={handleClose} severity="success"> Thanks i will reply ASAP!     
        </Alert>
      </Snackbar>
    </div>
  );
}
