import React from 'react';
import '../styles/style.scss';
import logo from '../assets/logo.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src={logo} alt="logo"/>
            </div>

            <div className="header__right">
                <div className="login__status">
                    <a href="/">ĐĂNG NHẬP</a>
                    <a href="/">ĐĂNG KÝ</a>
                </div>
                <ShoppingCartIcon/>
            </div>
        </div>
    )
}

export default Header
