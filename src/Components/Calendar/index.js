import React from "react";
import BigCalendar from "../BigCalendar";
import axios from "../../axios";
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstEvents: [],
            oldEvents: [],
            addEvents: [],
            subject: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateOldEvents = this.updateOldEvents.bind(this);
        this.handleSubChange_Calendar = this.handleSubChange_Calendar.bind(this);
    }
    componentDidMount() {
        const chosen_id = localStorage.role === "tutor" ? "id" : "tutor_id"
        axios.get(`/api/class/tutor/${localStorage.getItem(chosen_id)}`, {
                headers: {'X-Auth-Token': `${localStorage.token}`},
            })
            .then(data => {
                const events = data.data;
                // console.log(events);
                if (localStorage.role === "student") {
                    events.forEach(element => {
                        if (element.status !== "free_time") {
                            element.status = "booked";
                        }
                        else {
                            element.status = "free_time";
                        }
                    });

                } else{
                    events.forEach(element => {
                        if(element.status === "free_time"){
                            element.status = "free_time";
                        }else{
                            element.status = "booked";
                        }
                    });
                }
                this.setState({
                    firstEvents: events,
                    oldEvents : events
                }, () => {
                    console.log(this.state.firstEvents);
                    console.log(this.state.oldEvents);
                });
            }
            
            )
            .catch(err => console.error(err));
    }
    getAddedEvents(currentEvents) {
        const addedEvents = currentEvents.slice(this.state.firstEvents.length, currentEvents.length);
        // console.log(currentEvents);
        this.setState({
            addEvents : addedEvents,
            currentEvents : currentEvents,
        });
        // console.log(this.state.addEvents)
    }
    handleSubChange_Calendar(sub){
        this.setState({
            subject: sub
        },() => {
            console.log('calendar is updated sub')
        })
    }
    handleSubmit(){
        if(localStorage.role === "student"){
                 axios(
            {
                url:"/api/class",
                method:"post",
                data:{
                    tutor_id : localStorage.tutor_id,
                    student_id : localStorage.id,
                    hourly_rate: 323,
                    sessions : this.state.addEvents,
                    subject: this.state.subject
                },
                headers: { "X-Auth-Token": `${localStorage.token}` }
            }
        )   
        }else if(localStorage.role === "tutor" ){
            const free_time = []
            this.state.oldEvents.forEach((item) =>{
                if (item.status === "free_time") free_time.push(item)
            })
            // this.state.addEvents.forEach((item) => {
            //      if (item.status === "free_time") free_time.push(item)
            // })
            axios(
                {
                    url:`/api/user/tutor/update_free_time/${localStorage.id}`,
                    method: "put",
                    data: {
                        free_time : free_time
                    },
                    headers: {'X-Auth-Token': `${localStorage.token}`}
                }
            )
        }

    }
    updateOldEvents(currentEvents){
        this.setState({oldEvents : currentEvents});
    }
    
    render() {
        const { oldEvents} = this.state;
        console.log(oldEvents)
        return (
            <Grid>
                <Button style={{backgroundColor: '#52C1C8', color: "#FFFFFF",marginTop:20}} onClick={this.handleSubmit}>Book your class</Button>
                <BigCalendar
                    handleSubChange_Calendar= {this.handleSubChange_Calendar}
                    updateOldEvents={this.updateOldEvents}
                    dataFromProps={oldEvents}
                    getAddedEvents={currentEvents => this.getAddedEvents(currentEvents)}
                />
            </Grid>
        );
    }
}
export default Calendar;