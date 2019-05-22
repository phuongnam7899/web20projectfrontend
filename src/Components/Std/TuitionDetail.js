import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import SessionCard from '../SessionCard';
import CancelTuition from './CancelTuition';

const styles = theme => ({
  root: {
    width: '66%',
    marginTop: 0,
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
    <div>
    <Grid container xs = {11} justify = 'space-between'>
    <Typography style = {{marginTop : 162, fontSize:18, marginLeft:400}}>
    MATHP1-20191111-00000444
    </Typography>
    <CancelTuition/>
    </Grid>
    <Grid item xs = {11}>
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
      
    </Paper>
    </Grid>
    <Grid>
    <Typography style = {{marginTop:20,fontSize:18, marginLeft:400}}>
    Course Detail
    </Typography>
    </Grid>
    <Grid>
    <Typography style = {{fontSize:14, marginLeft:400}}>
    - Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
    </Typography>
    </Grid>
    <Grid container justify = 'flexstart' xs = {11} style = {{marginBottom:20}}>
    <Typography  style = {{fontSize:14, marginLeft:400, marginTop : 10}}>
      Session 1 - Session 8
    </Typography> 
    <Button style = {{marginTop : 10,marginLeft:10,backgroundColor: '#B23B37', color: "#ffffff", width : 44, height:20, fontSize:14, paddingTop:0}}>Hold</Button>
    </Grid>
    <Grid container spacing = {8} style = {{marginLeft : 400}} xs = {8}>
      <Grid container item xs={12} spacing={24}>
        <Grid item xs={3}>
          <SessionCard />
        </Grid>
        <Grid item xs={3}>
          <SessionCard />
        </Grid>
        <Grid item xs={3}>
          <SessionCard />
        </Grid>
        <Grid item xs={3}>
          <SessionCard />
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={24}>
        <Grid item xs={3}>
          <SessionCard />
        </Grid>
        <Grid item xs={3}>
          <SessionCard />
        </Grid>
        <Grid item xs={3}>
          <SessionCard />
        </Grid>
        <Grid item xs={3}>
          <SessionCard />
        </Grid>
      </Grid>
      
    </Grid>
    <Button href = '/editmyprofile'>Edit My Profile</Button>
    </div>
  );
}

User.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(User);