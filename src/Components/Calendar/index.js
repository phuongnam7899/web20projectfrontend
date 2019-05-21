import React from "react";
import BigCalendar from "./BigCalendar";
import axios from "../../axios";
import Grid from '@material-ui/core/Grid'

class Calendar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        newEvents: [],
        oldEvents: [
          {
            start: "2019-05-18T15:00:00.000Z",
            end: "2019-05-18T15:00:00.000Z",
            title: "busy",
            status:"unchangable"
          },
          {
            start: "2019-05-17T15:00:00.000Z",
            end: "2019-05-17T15:00:00.000Z",
            title: "busy",
            status:"unchangable"
          }
        ]
      };
    }
    componentDidMount(){
      axios.get("api/class/tutor/5cde90dc1ffe4c181c88f7f2?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRoYW9ucDA0MTA5OUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTU1ODMyOTI1NX0.lkqx-o-14-saMoKmbEJQKWqIUSyTgyMZtdv5QLjQ-1c")  
          .then(data => {
            //lịch thằng tutor nhé cả rảnh cả lớp của n
              console.log(data.data)
            })
          .catch(err => console.error(err))
    }
    getAddedEvents(currentEvents) {
      // Data sau khi pick sẽ vào đây
      const addedEvents = currentEvents.slice(this.state.oldEvents.length,currentEvents.length);
      console.log(addedEvents);
    }
    
    render() {  
      const { newEvents } = this.state;
      const events = this.state.oldEvents.concat(newEvents);
      return (
        <Grid style = {{marginTop : 100}}>
        <BigCalendar
          dataFromProps={events}
          getAddedEvents={currentEvents => this.getAddedEvents(currentEvents)}
        />
        </Grid>
      );
    }
  }
export default Calendar;