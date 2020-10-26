import React from 'react'

function CheckOut() {
    return (
        <div className="checkout">
            <div className="checkout__table">
                <div className="checkout__header">
                    <h4>THANH TOÁN</h4>
                </div>
                <div className="checkout__info">
                    <div className="info__item">
                        <label htmlFor="name">TÊN</label>
                        <input type="text" value="Nguyễn Văn A"/>
                    </div>
                    <div className="info__item">
                        <label htmlFor="phone-number">SỐ ĐIỆN THOẠI</label>
                        <input type="text" value="0123456789"/>
                    </div>
                    <div className="info__item">
                        <label htmlFor="address">ĐỊA CHỈ</label>
                        <input type="text" value="Số 1, đường 1"/>
                    </div>
                </div>
                <div className="checkout__detail">
                    <div className="amount">
                        <p>TỔNG CỘNG</p>
                        <p>298.000 ₫</p>
                    </div>
                    <div className="btn__checkout">
                        THANH TOÁN
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut
