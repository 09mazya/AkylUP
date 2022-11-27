import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import "./Modal.css"

const Modal = ({ setIsOpen }) => {

    return (

        <div className='modal-container'>
            <div className='modal-wrapper'>
                <div className='cancel-button'>
                    <button onClick={() => setIsOpen(false)}>
                        X
                    </button>
                </div>
                <h1 className='main-title'>Добро пожаловать!</h1>
                <div className='email-container'>
                    <span className='email-name'>Электронная почта</span>
                    <br />
                    <div>
                        <input type="email" name="input-email" id="input-email" className='input-email' />
                    </div>
                </div>
                <br />
                <div className='password-container'>
                    <span className='password-name'>Пароль</span>
                    <div>
                        <input type="password" name="input-password" id="input-password" className='input-password' />
                    </div>
                </div>
                <div className='forget-container'>
                    <span>Забыли пароль?</span></div>
                <div className='button-container'>
                    <Link to='/my-profile' className='button-auth'>Войти</Link>
                </div>
                <div className='account-container'>
                    <span>У вас нет аккаунта?</span>
                </div>
                <div className='auth-container'>
                    <a href="">Авторизация</a>
                </div>

            </div>
        </div>

    )
}

export default Modal