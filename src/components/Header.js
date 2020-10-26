import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/style.scss';
import logo from '../assets/logo.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


function Header() {
    const navStyle = {
        textDecoration : 'none',
        color : '#ffffff'
    };

    return (
        <div className="header">
            <div className="header__left">
                <Link to="./"> <img src={logo} alt="logo"/> </Link>              
            </div>

            <div className="header__right">
                <div className="login__status">
                    <a href="/">ĐĂNG NHẬP</a>
                    <a href="/">ĐĂNG KÝ</a>
                </div>
                <Link to="./cart" style={navStyle}> <ShoppingCartIcon/> </Link>              
            </div>
        </div>
    )
}

export default Header
