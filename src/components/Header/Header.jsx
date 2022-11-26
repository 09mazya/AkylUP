import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import logo from './../../assets/img/Logo (3).png'
import Modal from './../Modal/Modal'

function Header() {
  const [isOpen, setIsOpen]= useState(false)
  return (
    <div className='header'>
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="links">
          <Link to = "/" className='home'> Главная </Link>
          <Link to = "/events" className='events'> Мероприятия </Link>
          <Link to = "/courses" className='courses'> Курсы </Link>
          <Link to = "/qa" className='qa'> Вопросы и Ответы </Link>
          <Link to = "/articles" className='articles'> Статьи </Link>
          <div>
            <button className='login' onClick={()=> setIsOpen(true)}> Вход </button>
            {isOpen && <Modal setIsOpen={setIsOpen}/>}
          </div>
        </div>
    </div>
  )
}

export default Header
