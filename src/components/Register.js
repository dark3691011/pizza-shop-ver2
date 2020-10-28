import React from 'react'

function Register() {
    return (
        <div className="register__container">
            <form className="register" id="register__form">
                <h1>ĐĂNG Ký</h1>
                <div className="form__group">
                    <label htmlFor="email">EMAIL</label>
                    <input type="email" name="email" id="email"/>
                </div>
                <div className="form__group">
                    <label htmlFor="password">MẬT KHẨU</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="form__group">
                    <label htmlFor="password">NHẬP LẠI MẬT KHẨU</label>
                    <input type="password" name="re-password" id="re-password" />
                </div>
                <button type="submit">ĐĂNG KÝ</button>
            </form>
        </div>
    )
}

export default Register
