import React from 'react'

function CartItem() {
    return (
        <div className="cart__item">
            <p id="name" name="name">9" HANDTOSSED PIZZA PHO</p>
            <div className="quantity">
                <div className="btn__dec">-</div>
                <div className="value">1</div>
                <div className="btn__dec">+</div>
            </div>
            <div className="btn__remove"> Bỏ chọn </div>
        </div>
    )
}

export default CartItem
