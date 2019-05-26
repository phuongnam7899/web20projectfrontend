import React from 'react';

import Paper from '@material-ui/core/Paper'



import BookingButton from './BookingButton'
import LText from './LText'
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  paperContainer: {
    height: 1356,
    width : '100%',
    backgroundImage: `url(${"https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1082&q=80"})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover",
    position : 'fixed',
    top: 0
  }
})


const LandingPage = (props) => {
  const { classes } = props;
  return (
    <div fullWidth>
      {/* <Paper style={styles.paperContainer}> */}
      <LText/>
      <BookingButton/>
        {/* </Paper> */}
      


    </div>
  );
}

export default withStyles(styles)(LandingPage);
