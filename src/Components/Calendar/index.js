import React from "react";
import BigCalendar from "./BigCalendar";
import axios from "../../axios";
import Grid from '@material-ui/core/Grid'

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newEvents: [],
            oldEvents: []
        };
    }
    componentDidMount() {
        axios.get("/api/class/tutor/5ce3a5c42480ca0eec0d0cae", {
                headers: {'X-Auth-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRoYW9ucDA0MTA5OUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTU1ODMyOTI1NX0.lkqx-o-14-saMoKmbEJQKWqIUSyTgyMZtdv5QLjQ-1c'},
            })
            .then(data => {
                // lịch thằng tutor nhé cả rảnh cả lớp của n
                const events = data.data;
                console.log(events);
                if (this.props.role === "student") {
                    events.forEach(element => {
                        if (element.title !== "free time") {
                            element.status = "booked";
                        }
                        else {
                            element.status = "free_time";
                        }
                    });

                } else{
                    events.forEach(element => {
                        if(element.title === "free time"){
                            element.status = "free_time";
                        }else{
                            element.status = "booked";
                        }
                    })
                }
                this.setState({
                    oldEvents: events
                })
<<<<<<< HEAD
            })
            .catch(err => console.error(err));


=======
                .catch(err => console.error(err))
        }else{
            
        }
>>>>>>> 68b522a35c391b68d4248a0e70e0582c4b506360
    }
    getAddedEvents(currentEvents) {
        const addedEvents = currentEvents.slice(this.state.oldEvents.length, currentEvents.length);
        console.log(addedEvents);
    }

    render() {
        const { newEvents } = this.state;
        const events = this.state.oldEvents.concat(newEvents);
        return (
            <Grid style={{ marginTop: 100 }}>
                <BigCalendar
                    dataFromProps={events}
                    getAddedEvents={currentEvents => this.getAddedEvents(currentEvents)}
                />
            </Grid>
        );
    }
}
export default Calendar;