import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '66%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    marginLeft:  400
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(tuitionsubject, lessonnum, recurring, hourlyrate) {
  id += 1;
  return { id, tuitionsubject, lessonnum, recurring, hourlyrate };
}

const rows = [
  createData('Tuition Subject','Indonesia Primary 1 - Mathematics','Hourly Rate', 'SGD 1 per hour'),
  createData('Number of Lessons', 8, "Recurring", 3),

];

function User(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} border = {0}>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.tuitionsubject}
              </TableCell>
              <TableCell align="right">{row.lessonnum}</TableCell>
              <TableCell align="right">{row.recurring}</TableCell>
              <TableCell align="right">{row.hourlyrate}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography></Typography>
    </Paper>
  );
}

User.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(User);