import React, {Component} from 'react'
import {
    Link
} from 'react-router-dom';
import head from './tou.jpeg'
import '../../../less/header/nav.less'
class Nav extends Component {
    render() {
        const names = ['首页', '我的资产', '我的团队', '会员注册']
        const listItems = names.map((name, index) =>
            <li className="left" key={index}>
                <Link to="/main">{name}</Link>
                <i></i>
            </li>
        )
        return (
            <ul className="header-nav clear right">
                {listItems}
                <li className="clear left">
                    <img className="userImg left" src={head}/>
                    <span className="headerName">用户名</span>
                    <i></i>
                </li>
            </ul>
        )
    }
}
export default Nav