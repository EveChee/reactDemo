
import React, {Component} from 'react'
class Cmain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: true
        }
    }

    render() {
        const isLogin = this.state.isLogin
        return (
            <div>
                this is main!!!
            </div>
        )
    }
}
export default Cmain