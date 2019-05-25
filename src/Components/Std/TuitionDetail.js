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
import axios from '../../axios';
import _ from "lodash";

const styles = theme => ({
  root: {
    width: '66%',
    marginTop: 0,
    overflowX: 'auto',
    marginLeft: 400
  },
  table: {
    minWidth: 700,
  },
  listSession: {
    marginLeft: -14,
    "& > div > div > div": {
      padding: 8
    },
    "& > div > div": {
      padding: 8
    }
  }
});
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: []
    }
  }
  componentDidMount() {
    // console.log(localStorage.id)
    axios.get(`/api/class/student/${localStorage.id}`, {
      headers: { 'X-Auth-Token': `${localStorage.token}` },
    }).then((data) => this.setState({classes : data.data}))
  };

  render() {
    const { classes } = this.props;
    console.log(this.state.classes)
    if (_.isEmpty(this.state.classes)) {
      return `loading`
    }
    return (
      <div>
        {this.state.classes.map((one_class) => {
          console.log(this.state.classes)
          return(
            <div>
              <Grid container xs={11} justify='space-between'>
                <Typography style={{ marginTop: 162, fontSize: 18, marginLeft: 400 }}>
                {one_class.subject}
                </Typography>
                <CancelTuition />
              </Grid>
              <Grid item xs={11}>
              <Paper className={classes.root}>
                <Table className={classes.table} border={0}>
                  <TableBody>
                    <TableRow>
                      <TableCell align="left" scope="row" >Fee : {one_class.hourly_rate}$/hour </TableCell>
                      <TableCell align="left" scope="row" > Number of lessons: {one_class.sessions.length} </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Paper>
              </Grid> 
              <Grid container justify='flexstart' xs={11} style={{ marginBottom: 20 }}>
                <Typography style={{ fontSize: 14, marginLeft: 400, marginTop: 10 }}>
                  Session 1 - Session {one_class.sessions.length}
                </Typography>
                <Button style={{ marginTop: 10, marginLeft: 10, backgroundColor: '#B23B37', color: "#ffffff", width: 44, height: 20, fontSize: 14, paddingTop: 0 }}>Hold</Button>
              </Grid>
              <Grid container spacing={8} style={{ marginLeft: 400 }} xs={8}>
                <Grid container item xs={12} spacing={24} className={classes.listSession}>
                {one_class.sessions.map((session,index) => {
                  return(
                    <div>
                      <Grid item>
                        <SessionCard ss_name={`Session ${index + 1}`} date={session.start.slice(0,10)} time={session.start.slice(10,16)} />
                      </Grid>
                    </div>
                  )
                })}
                </Grid>
              </Grid>
            </div>
          )
        })} 
      </div>
    );

  }
}

User.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(User);