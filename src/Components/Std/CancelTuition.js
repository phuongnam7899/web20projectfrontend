import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen} style = {{marginTop :50, backgroundColor: "#c85452", marginRight: 75}}>
          Cancel Tuition
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Cancel Tuition</DialogTitle>
          <DialogContent>
            <DialogContentText>
            You are about to cancel the whole tuition session, teacher XXX will be notified.
Please note that no refund will be given if you cancel the tuition.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Cancel Reason"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary" >
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary" style = {{backgroundColor: "#B23B37"}}>
              I'd like to cancel this tuition
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}