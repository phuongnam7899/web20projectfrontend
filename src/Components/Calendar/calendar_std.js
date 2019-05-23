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
      axios.get(`api/class/student/${localStorage.id}?token=${localStorage.token}`)  
          .then(data => {
            let allClasses = [];
            for(let i = 0; i < data.data.length; i++) {
              for (let j = 0; j < data.data[i].sessions.length; j++) {
                  allClasses.push(data.data[i].sessions[j])     
              }
            }
            this.setState(
              {events: allClasses},
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