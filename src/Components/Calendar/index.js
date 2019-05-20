import React from "react";
import BigCalendar from "./BigCalendar";


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
      
    getAddedEvents(currentEvents) {
      // Data sau khi pick sẽ vào đây
      const addedEvents = currentEvents.slice(this.state.oldEvents.length,currentEvents.length);
      console.log(addedEvents);
    }
    
    render() {
      const { newEvents } = this.state;
      const events = this.state.oldEvents.concat(newEvents);
      return (
        <BigCalendar
          dataFromProps={events}
          getAddedEvents={currentEvents => this.getAddedEvents(currentEvents)}
        />
      );
    }
  }
export default Calendar;