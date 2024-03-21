import React, { useState, useEffect } from 'react';

function getTime() {
    return new Date().toLocaleTimeString();
}

export default function Timer() {
    const [time, setTime] = useState(getTime());
    const [intervalId, setIntervalId] = useState(null);
 
    useEffect(() => {
        let intervalId = setInterval(() => {
            setTime(getTime());
        }, 100);
        setIntervalId(intervalId);
            
        return () => {
            clearInterval(intervalId); 
        }
    }, []);

    return (
        <div>{ time }</div>
      )
}

class Timer2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: getTime(),
            intervalId: null,
        }
    }

    componentDidMount() {
        let intervalId = setInterval(() => {
            this.setState({ time: getTime() });
        }, 100);
        this.setState({ intervalId });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    render() {
        return (
        <div>{ this.state.time }</div>
        )
    }
}
