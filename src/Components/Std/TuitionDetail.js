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
import SessionCard from '../SessionCard';
import CancelTuition from './CancelTuition';
import axios from '../../axios';
import _ from "lodash";
import Circle from '../Circle'
import Empty from '../Empty'

const styles = theme => ({
  root: {
    width: '66%',
    overflowX: 'auto',
    marginLeft: 80
  },
  table: {
    minWidth: '60%',
    
  },
  body: {
    fontSize: 16
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
      classes: [],
      fetching: false,
    }
    this.handleCancelTuition = this.handleCancelTuition.bind(this);
  }
  componentDidMount() {
    // console.log(localStorage.id)
    this.setState({
      fetching: true
    })
    axios.get(`/api/class/student/${localStorage.id}`, {
      headers: { 'X-Auth-Token': `${localStorage.token}` },
    }).then((data) => this.setState({classes : data.data, fetching: false}))
  };
  handleCancelTuition(index){
    let classes = this.state.classes;
    classes.splice(index,1);
    this.setState({classes : classes,});
  }

  render() {
    const { classes } = this.props;
    const { fetching } = this.state;
    console.log(this.state.classes)
    if (fetching) {
      return <Circle />
    }else{
      console.log(fetching)
    if (_.isEmpty(this.state.classes)) {
      return <Empty />
    }
    return (
      <div>
        {this.state.classes.map((one_class,index) => {
          console.log(this.state.classes)
          return(
            <div>
              <Grid container spacing = {2}>
                <Grid item>
                  <Typography variant = 'h4' style={{ marginTop: 50, marginLeft: 80, marginRight: 20 }}>
                  {one_class.subject}
                  </Typography>
                </Grid>
                <Grid item>
                  <CancelTuition class_id = {one_class._id} index={index} onCancelTuition={() => this.handleCancelTuition()} style = {{marginLeft:30}}/>
                </Grid>
              </Grid>
              <Grid item style ={{marginTop:20}}>
              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableBody>
                    <TableRow>
                      <TableCell align="left" scope="row" className = {classes.body}>Fee : {one_class.hourly_rate}$/hour </TableCell>
                      <TableCell align="left" scope="row" className = {classes.body}> Number of lessons: {one_class.sessions.length} </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Paper>
              </Grid> 
              <Grid container justify='flexstart' xs={11} style={{ marginBottom: 20 }}>
                <Typography style={{ fontSize: 18, marginLeft: 80, marginTop: 10 }}>
                  Session 1 / {one_class.sessions.length}
                </Typography>
              </Grid>
              <Grid container spacing={8} style={{ marginLeft: 80 }} xs={8}>
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
}

User.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(User);