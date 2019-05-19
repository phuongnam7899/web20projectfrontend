import React from "react";
import BigCalendar from "./BigCalendar";


class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataBigCalendar: [
                {
                    start: "2019-05-18T15:00:00.000Z",
                    end: "2019-05-18T15:00:00.000Z",
                    title: "hello"
                }
            ]
        };
    }

    getData(data) {
        // Data sau khi pick sẽ vào đây
        console.log(data);
    }

    render() {
        const { dataBigCalendar } = this.state;
        return (
            <BigCalendar
                dataFromProps={dataBigCalendar}
                getData={data => this.getData(data)}
            />
        );
    }
}

export default Calendar;