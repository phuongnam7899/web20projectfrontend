import BigCalendar from "react-big-calendar";
import React from "react";
import axios from "../../axios";
import "./BigCalendar/react-big-calendar.css"
import moment from "moment";

const localizer = BigCalendar.momentLocalizer(moment);

class  StdCalendar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        events: [],
        demo_events:[
            {
                start: "2019-05-18T15:00:00.000Z",
                end: "2019-05-18T15:00:00.000Z",
                title: "history"
            }
        ]
      };
    }
    componentDidMount(){
      axios.get("api/class/student/5ce16d258f4ad720dc491ff6?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRoYW9ucDA0MTA5OUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTU1ODMyOTI1NX0.lkqx-o-14-saMoKmbEJQKWqIUSyTgyMZtdv5QLjQ-1c")  
          .then(data => {
              this.setState(
                  {events: data.data},
                  () => {
                      console.log(data.data)
                  }
              )
            })
          .catch(err => console.error(err))
    }
    
    render() {  
      return (
        <div style={{ height: "100vh" }}>
        <BigCalendar
        length={120}
        localizer={localizer} 
        events={this.state.events}
        startAccessor="start"
        endAccessor="end"
        eventPropGetter={
          (event) => {
              if(event.status === "unchangable"){
                return{
                  style :{ backgroundColor: "#123456",
                  borderRadius: '10px'
                }
                }
              }else{
                return{
                  style :{
                   backgroundColor: "#000000"
                  }  
                }
              }
        }
        }
      />
      </div>
      );
    }
  }
export default StdCalendar;