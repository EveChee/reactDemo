import React, {Component} from 'react'
import logo from "../../../images/Combined Shape.png"
import '../../../less/header/logo.less'
class Logo extends Component {
    render() {
        return (
            <div className="header-logo clear left">
                <img className="left" src={logo} alt="logo"/>
                <div className="logotxt left">
                    <p className="logotxt1">科纳菲积分平台</p>
                    <p className="logotxt2">Graphene integral System</p>
                </div>
            </div>
        )
    }
}
export default Logo