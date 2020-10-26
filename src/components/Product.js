import React,{useState, useEffect} from 'react';
import axios from 'axios';
import '../config';
import '../styles/style.scss';

function Product() {
    return (
        <div className="product">
            <div className="product__left">
                <h1>1/2 PIZZA HẢI SẢN XỐT MAYO + 1/2 PIZZA GÀ PHÔ MAI</h1>
                <p>Vừa có gà phô mai lại có thêm thịt heo muối. Vừa có tôm tươi, mực ống kết hợp thanh cua ngon ngọt không thể chối từ.Phủ lên bởi lớp sốt Mayonnaise và phô mai thơm béo - Ăn một miếng là ghiền một đời.------------------------- Pizza ngon sao không thưởng thức cùng Coca-Cola mát lạnh, đã phải biết!</p>
                <img src="https://dominos.vn/Data/Sites/1/Product/830/pizza-pho.png" alt=""/>
                <h2>149.000 ₫</h2>
            </div>
            <div className="product__right">
                <div className="btn__add">
                    THÊM VÀO GIỎ HÀNG
                </div>
            </div>
        </div>
    )
}

// function Product({match}) {
//     const [product, setProduct] = useState({});

//     useEffect(() => {
//         fetchItem();
//     }, [])

//     const fetchItem = async => {
//         axios.get(`${global.config.server.link}/product/${match.params.id}`)
//         .then(res =>{
//             setProduct(res.data);
//         })
//     }

//     return (
//         <div className="product">
//             <div className="product__left">
//                 <h1 id="name" name="name">{product.name}</h1>
//                 <p id="description" name="description">{product.description}</p>
//                 <img src={product.img} alt={product.name}/>
//                 <h2 id="price" name="price">{product.price}</h2>
//             </div>
//             <div className="product__right">
//                 <div className="btn__add">
//                     THÊM VÀO GIỎ HÀNG
//                 </div>
//             </div>
//         </div>
//     )
// }

export default Product
