/**
 * Created by evechee on 2017/7/26.
 */
import React, {Component} from 'react'
import Logo from './Logo'
import Nav from './Nav'
import '../../../less/header/header.less'
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: true
        }
    }

    render() {
        // const isLogin = this.state.isLogin
        return (
            <header>
                <div className="headerBox clear">
                    <Logo/>
                    {/*{isLogin &&*/}
                    <Nav/>
                    // }
                </div>
            </header>
        )
    }
}
export default Header