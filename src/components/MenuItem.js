import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../styles/style.scss';

function MenuItem() {
    const navStyle = {
        textDecoration : 'none',
        color : '#1D4363'
    };
    
    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct({
            name: 'PIZZA PHỞ',
            description: 'Pizza chuẩn Mỹ, đậm vị quốc dân với thịt bò, bò viên, sốt vị phở, rau ngò gai, rau quế, hành tây, phô mai Mozzarella',
            price:'50000',
            img:"https://dominos.vn/Data/Sites/1/Product/830/pizza-pho.png"
        });
    }, [])

    const addToCart = product => {
    }

    return (
        <div className="menu__item">
            <Link to="./menu/123" style={navStyle}>
                <div className="item__detail">
                    <img src={product.img} alt={product.name}/>
                    <h3 id="name" name="name">{product.name}</h3>
                    <p id="description" name="description">{product.description}</p>  
                    <p id="price" name="price">{product.price}</p>          
                </div>
            </Link>
            <div className="btn__add" onClick={addToCart(product)}>
                THÊM VÀO GIỎ HÀNG
            </div>
        </div>
    )
}

// function MenuItem({id, name, description, img, price}) {
//     const navStyle = {
//         textDecoration : 'none',
//         color : '#1D4363'
//     };

//     return (
//         <div className="menu__item">
//         <Link to={`/menu/${id}`} style={navStyle}>
//                 <div className="item__detail">
//                     <img src={img} alt=""/>
//                     <h3 id="name" name="name">{name}</h3>
//                     <p id="description" name="description">{description}</p>
//                     <p id="price" name="price">{price}</p>            
//                 </div>
//             </Link>
//             <div className="btn__add">
//                 THÊM VÀO GIỎ HÀNG
//             </div>
//         </div>
//     )
// }

export default MenuItem
