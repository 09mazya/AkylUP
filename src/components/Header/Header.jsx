import React from 'react'

function Header() {
  return (
    <div>
        <Link to = "/" className=''>Главная</Link>
        <Link to = "/events" className=''>Мероприятия</Link>
        <Link to = "/courses" className=''>Курсы</Link>
        <Link to = "/qa" className=''>Вопросы и Ответы</Link>
    </div>
  )
}

export default Header