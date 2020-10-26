import React from 'react';
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

export default Product
