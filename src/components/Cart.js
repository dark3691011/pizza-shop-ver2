import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/style.scss';
import CartItem from './CartItem';

function Cart() {
    const navStyle = {
        textDecoration : 'none'
    };

    return (
        <div className="cart">
            <div className="cart__table">
                <div className="cart__header">
                    <h4>CHI TIẾT ĐƠN HÀNG</h4>
                </div>
                <CartItem/>
                <div className="cart__checkout">
                    <div className="amount">
                        <p>TỔNG CỘNG</p>
                        <p>298.000 ₫</p>
                    </div>
                    <Link to="./checkout" style={navStyle}>
                        <div className="btn__checkout">
                            THANH TOÁN
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart
