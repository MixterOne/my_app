

import Snackbar from '@mui/material/Snackbar';

import MuiAlert from '@mui/material/Alert';

const Toasty = ({ open, text, severity, onClose }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    onClose()
  };

  const action = (
    <>
      <MuiAlert elevation={6} variant="filled" severity={severity}>
        {text}
      </MuiAlert>
    </>
  );

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
      />
    </>
  );
}

export default Toasty;
