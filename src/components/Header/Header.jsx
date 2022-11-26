import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <Link to="/" className='' > Главная </Link>
      <Link to="/events" className='events' > Мероприятия </Link>
      <Link to="/courses" className='courses' > Курсы </Link>
      <Link to="/qa" className='q-a' > Вопросы и ответы  </Link>
    </div>
  )
}

export default Header