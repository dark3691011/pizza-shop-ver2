import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/style.scss';

// function MenuItem() {
//     const navStyle = {
//         textDecoration : 'none',
//         color : '#1D4363'
//     };

//     return (
//         <div className="menu__item">
//             <Link to="./product" style={navStyle}>
//                 <div className="item__detail">
//                     <img src="https://dominos.vn/Data/Sites/1/Product/830/pizza-pho.png" alt=""/>
//                     <h3 id="name" name="name">PIZZA PHỞ</h3>
//                     <p id="description" name="description">Pizza chuẩn Mỹ, đậm vị quốc dân với thịt bò, bò viên, sốt vị phở, rau ngò gai, rau quế, hành tây, phô mai Mozzarella</p>  
//                     <p id="price" name="price">50000</p>          
//                 </div>
//             </Link>
//             <div className="btn__add">
//                 THÊM VÀO GIỎ HÀNG
//             </div>
//         </div>
//     )
// }

function MenuItem({id, name, description, img, price}) {
    const navStyle = {
        textDecoration : 'none',
        color : '#1D4363'
    };

    return (
        <div className="menu__item">
        <Link to={`/category/${id}`} style={navStyle}>
                <div className="item__detail">
                    <img src={img} alt=""/>
                    <h3 id="name" name="name">{name}</h3>
                    <p id="description" name="description">{description}</p>
                    <p id="price" name="price">{price}</p>            
                </div>
            </Link>
            <div className="btn__add">
                THÊM VÀO GIỎ HÀNG
            </div>
        </div>
    )
}

export default MenuItem
