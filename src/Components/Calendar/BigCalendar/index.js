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
        // eslint-disable-next-line react/prop-types
        events
      });
    }
  }
  componentDidUpdate() { }
  onSelectSlot(e) {
    const { events } = this.state;
    const { disabledEdit } = this.props;
    if (!disabledEdit) {
      const event = {
        start: e.start,
        end: e.end,
        title: ""
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
      editState: true,
      event
    });
  }

  deleteHandle(event) {
    let { events } = this.state;
    const { getAddedEvents } = this.props;
    const indexEventChoose = _.findIndex(events, el => _.isEqual(event, el));
    events = _.filter(
      events,
      (el, index) => !_.isEqual(event, el) && index !== indexEventChoose
    );
    getAddedEvents(events);
    this.setState({
      events,
      open: false
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
    this.setState({
      open: false,
      editState: false
    });
  }

  submitDialogHandle(pack) {
    const { event, events, editState } = this.state;
    const { getAddedEvents, disabledEdit } = this.props;
    if (!disabledEdit) {
      if (!editState) {
        events.pop();
        const title = this.state.subject;
        const start = this.convertToICT(pack.dateTimeStart);
        const end = this.convertToICT(pack.dateTimeEnd);
        const packaged = [
          ...events,
          {
            ...event,
            title,
            start,
            end
          }
        ];
        getAddedEvents(packaged);
        this.setState({
          open: false,
          events: [
            ...events,
            {
              ...event,
              title,
              start,
              end
            }
          ]
        });
      } else {
        const indexEventChoose = _.findIndex(events, el =>
          _.isEqual(event, el)
        );
        const title = pack.notes;
        const start = this.convertToICT(pack.dateTimeStart);
        const end = this.convertToICT(pack.dateTimeEnd);
        const eventAfterEdit = {
          ...event,
          title,
          start,
          end
        };
        events[indexEventChoose] = eventAfterEdit;
        const packaged = events;
        getAddedEvents(packaged);
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
    const { open, event, events, editState } = this.state;
    const { disabledEdit } = this.props;
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
                    backgroundColor: "#123456",
                    borderRadius: '10px'
                  }
                }
              }
              else if (event.status === "booked") {
                return {
                  style: {
                    backgroundColor: "#654321"
                  }
                }
              }
              else {
                return {
                  style: {
                    backgroundColor: "#000000"
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
