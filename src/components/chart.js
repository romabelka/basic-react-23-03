import React, { Component } from 'react'

class Chart extends Component {
    componentDidMount() {
        //do some charting with d3 on this.refs.container
    }

    componentWillReceiveProps() {
        //update chart
    }

    componentWillUnmount() {
        //cleanup
    }

    render() {
        return <div ref = "container" />
    }
}

export default Chart