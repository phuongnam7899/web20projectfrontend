import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 0,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 20,
  },
};

function SessionCard(props) {
  const { classes } = props;
  

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="secondary" gutterBottom>
          Session1
        </Typography>
        <Typography variant="h5" component="h2">
          10 Mar 18
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography component="p">
          8:30hrs - 9:30hrs
          
        </Typography>
      </CardContent>
      
    </Card>
  );
}

SessionCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SessionCard);