import React, { Component } from 'react';

// Clock will be responsible for holding state
class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
        };
    };

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        return (
            <div>
                Clock: <Ticker date={this.state.date} />
            </div>    
        );
    }
};

// Functional component which receives in the date and displays it only
const Ticker = ({ date }) => <p>{ date.toLocaleTimeString() }</p>;

export default Clock;