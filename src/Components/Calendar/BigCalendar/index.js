import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import PropTypes from "prop-types";
import _ from "lodash";
import FormDialog from "./dialog";
import "./react-big-calendar.css";
import moment from "moment";

const localizer = BigCalendar.momentLocalizer(moment);

class CalendarApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabledEdit: props.disabledEdit,
      editState: false,
      open: false,
      events: [],
      event: {},
      subject: ""
    };
    this.onSelectSlot = this.onSelectSlot.bind(this);
    this.closeDialogHandle = this.closeDialogHandle.bind(this);
    this.submitDialogHandle = this.submitDialogHandle.bind(this);
    this.onClickSlot = this.onClickSlot.bind(this);
    this.deleteHandle = this.deleteHandle.bind(this);
    this.convertToICT = this.convertToICT.bind(this);
  }

  componentDidMount() {
    const { dataFromProps } = this.props;
    const events = _.map(dataFromProps, el => ({
      ...el,
      start: this.convertToICT(el.start),
      end: this.convertToICT(el.end)
    }));
    this.setState({
      // eslint-disable-next-line react/prop-types
      events: events
    });
  }

  // Edit State để biết được là nó đang add New Hay Edit
  // EditState = False khi ấn cancel và => True khi ấn trực tiếp
  // Event là cái thằng chứa các thông tin để truyền qua Dialog,
  // khi Edit thì sẽ setState lại thằng này.
  // Open đơn giản là đóng hoặc mở modal
  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      const events = _.map(nextProps.dataFromProps, el => ({
        ...el,
        start: this.convertToICT(el.start),
        end: this.convertToICT(el.end)
      }));
      this.setState({
        events
      });
    }
  }
  componentDidUpdate() {
    console.log(this.state.events);
   }
  onSelectSlot(e) {
    const { events ,disabledEdit} = this.state;
    if (!disabledEdit) {
      const event = {
        start: e.start,
        end: e.end,
        title: "",
        status : localStorage.getItem("role") === "tutor" ? "free_time" : "student_book"
      };
      this.setState({
        open: true,
        event,
        events: [...events, event]
      });
      
    }
  }

  onClickSlot(event, e) {
    e.preventDefault();
    this.setState({
      open: true,
      disabledEdit: ((localStorage.role === "tutor") || ((event.status !== "free_time") && (event.status !== "booked")) ) ? false : true,
      editState: true,
      event
    });
    console.log(this.state);
  }

  deleteHandle(event) {
    let { events } = this.state;
    const { getAddedEvents, updateOldEvents } = this.props;
    const indexEventChoose = _.findIndex(events, el => _.isEqual(event, el));
    events = _.filter(
      events,
      (el, index) => !_.isEqual(event, el) && index !== indexEventChoose
    );
    getAddedEvents(events);
    updateOldEvents(events)
    this.setState({
      events,
      open: false,
      disabledEdit: false
    });
  }

  closeDialogHandle() {
    const { events, editState } = this.state;
    if (!editState) {
      events.pop();
      this.setState({
        open: false,
        events
      });
    }
    console.log(this.state)
    this.setState({
      open: false,
      editState: false,
      disabledEdit: false
    });
    
  }

  submitDialogHandle(pack) {
    const { event, events, editState, disabledEdit } = this.state;
    const { getAddedEvents, updateOldEvents} = this.props;
    if (!disabledEdit) {
      if (!editState) {
        events.pop();
        const title = this.state.subject;
        const status = localStorage.getItem("role") === "tutor" ? "free_time" : "student_book"
        const start = this.convertToICT(pack.dateTimeStart);
        const end = this.convertToICT(pack.dateTimeEnd);
        const packaged = [
          ...events,
          {
            ...event,
            title,
            start,
            end,
            status
          }
        ];
        getAddedEvents(packaged);
        updateOldEvents(packaged);
        this.setState({
          open: false,
          events: [
            ...events,
            {
              ...event,
              title,
              start,
              end,
              status
            }
          ]
        });
      } else {
        const indexEventChoose = _.findIndex(events, el =>
          _.isEqual(event, el)
        );
        const title = pack.notes;
        const status = localStorage.getItem("role") === "tutor" ? "free_time" : "student_book"
        const start = this.convertToICT(pack.dateTimeStart);
        const end = this.convertToICT(pack.dateTimeEnd);
        const eventAfterEdit = {
          ...event,
          title,
          start,
          end,
          status
        };
        events[indexEventChoose] = eventAfterEdit;
        const packaged = events;
        console.log(packaged);
        getAddedEvents(packaged);
        updateOldEvents(packaged)
        this.setState({
          events,
          event: eventAfterEdit,
          open: false
        });
      }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  convertToICT(value) {
    return moment(value).toDate();
  }
  handleSubChange = (e) => {
    this.setState(
      { subject: e.target.value },
      () => {
        console.log(this.state.subject)
      }
    )
  }

  render() {
    const { open, event, events, editState, disabledEdit} = this.state;
    return (
      <div style={{ height: "100vh" }}>
        <BigCalendar
          length={120}
          localizer={localizer} 
          events={events}
          startAccessor="start"
          endAccessor="end"
          eventPropGetter={
            (event, start, end, isSelected) => {
              if (event.status === "free_time") {
                return {
                  style: {
                    backgroundColor: "#27e820",
                    borderRadius: '10px'
                  }
                }
              }
              else if (event.status === "booked") {
                return {
                  style: {
                    backgroundColor: "#e23f1b"
                  }
                }
              }
              else {
                return {
                  style: {
                    backgroundColor: "#0b3be8"
                  }
                }
              }
            }
          }
          selectable
          // toolbar={MyToolBar}
          onSelectSlot={this.onSelectSlot}
          onSelectEvent={this.onClickSlot}
        />
        <input type="text" onChange={this.handleSubChange} />
        {
          <FormDialog
            open={open}
            event={event}
            editState={editState}
            closeDialogHandle={this.closeDialogHandle}
            deleteHandle={this.deleteHandle}
            submitDialogHandle={this.submitDialogHandle}
            disabledEdit={disabledEdit}
          />
        }
      </div>
    );
  }
}

// Props disabled - show will disable actions
CalendarApp.defaultProps = {
  disabledEdit: false,
  dataFromProps: []
  // MyToolBar: undefined,
};

CalendarApp.propTypes = {
  getAddedEvents: PropTypes.func.isRequired,
  disabledEdit: PropTypes.bool,
  dataFromProps: PropTypes.arrayOf(PropTypes.shape({}))
  // MyToolBar: PropTypes.bool,
};

export default CalendarApp;
