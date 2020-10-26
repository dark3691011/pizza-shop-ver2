import React from 'react';
import '../styles/style.scss';

function MenuItem() {
    return (
        <div className="menu__item">
            <img src="https://dominos.vn/Data/Sites/1/Product/830/pizza-pho.png" alt=""/>
            <h3 id="name" name="name">PIZZA PHỞ</h3>
            <p>Pizza chuẩn Mỹ, đậm vị quốc dân với thịt bò, bò viên, sốt vị phở, rau ngò gai, rau quế, hành tây, phô mai Mozzarella</p>
            <div className="btn__add">
                THÊM VÀO GIỎ HÀNG
            </div>
        </div>
    )
}

export default MenuItem
