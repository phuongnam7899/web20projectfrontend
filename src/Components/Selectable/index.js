import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from "moment";
import PropTypes from "prop-types";
import _ from "lodash";
import FormDialog from "./dialog";

const localizer = BigCalendar.momentLocalizer(moment);

class Selectable extends React.Component {
    constructor(...args) {
        super(...args)

        this.state = {
            event: {},
            editState: false,
            open: false,
            events: [
                {
                    start: "2019-05-18T15:00:00.000Z",
                    end: "2019-05-18T15:00:00.000Z",
                    title: "hello"
                }
            ]
        }
        this.onSelectSlot = this.onSelectSlot.bind(this);
        this.closeDialogHandle = this.closeDialogHandle.bind(this);
        this.submitDialogHandle = this.submitDialogHandle.bind(this);
        this.onClickSlot = this.onClickSlot.bind(this);
        this.deleteHandle = this.deleteHandle.bind(this);
        this.convertToICT = this.convertToICT.bind(this);
    }
    getData(data) {
        // Data sau khi pick sẽ vào đây
        console.log(data);
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
            events
        });
    }
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
        const { getData } = this.props;
        const indexEventChoose = _.findIndex(events, el => _.isEqual(event, el));
        events = _.filter(
            events,
            (el, index) => !_.isEqual(event, el) && index !== indexEventChoose
        );
        getData(events);
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
        const { getData, disabledEdit } = this.props;
        if (!disabledEdit) {
            if (!editState) {
                events.pop();
                const title = pack.notes;
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
                getData(packaged);
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
                getData(packaged);
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

    // Function Older
    // combine(d1, d2) {
    //   const m1 = moment(d1);
    //   const m2 = moment(d2);
    //   const m3 = m1.set('hour', m2.get('hour')).set('minute', m2.get('minute'));
    //   return m3.toDate();
    // }

    render() {
        const { open, event, events, editState } = this.state;
        const { disabledEdit } = this.props;
        return (
            <div style={{ height: "100vh" }}>
                <BigCalendar
                    selectable
                    events={this.state.events}
                    scrollToTime={new Date(1970, 1, 1, 6)}
                    defaultDate={new Date(2015, 3, 12)}
                    length={120}
                    localizer={localizer}
                    startAccessor="start"
                    endAccessor="end"
                    onSelectSlot={this.onSelectSlot}
                    onSelectEvent={this.onClickSlot}
                    getData={data => this.getData(data)}
                />
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

Selectable.propTypes = {
    getData: PropTypes.func.isRequired,
    disabledEdit: PropTypes.bool,
    dataFromProps: PropTypes.arrayOf(PropTypes.shape({}))
    // MyToolBar: PropTypes.bool,
  };


export default Selectable;