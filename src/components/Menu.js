import React from 'react';
import MenuItem from './MenuItem';
import '../styles/style.scss';

function Menu() {
    return (
        <div className="menu">
            <div className="menu__left">                   
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
            </div>
            <div className="menu__right"></div>
        </div>
    )
}

export default Menu
