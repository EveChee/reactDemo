/**
 * Created by evechee on 2017/7/26.
 */
import React, {Component} from 'react'
class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    handleClick = () => {
        console.log(this.props.bob)
    }

    render() {
        return (
            <div>
                <h1 onClick={this.handleClick}>Hello, {this.props.bob}!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}
export default Clock