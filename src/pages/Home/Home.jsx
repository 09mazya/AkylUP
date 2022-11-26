import React, {useState} from 'react'
import './Home.scss'
import Modal from './../../components/Modal/Modal'
import bg from './../../assets/img/images.png'

function Home() {
  const [isOpen, setIsOpen]= useState(false)
  return (
    <div className="home-main">
    
      <div className="main-headline">
        <h1>Начни свой путь к успеху</h1>
        <p>Совершенствуйте свои навыки, становитесь лучше</p>

        <div>
          <button className='login' onClick={()=> setIsOpen(true)}> Начать </button>
          {isOpen && <Modal setIsOpen={setIsOpen}/>}
        </div>
        <div className="main-text">
          <p><b>25,000 +</b>  ежедневных активных пользователей</p>
          <p><b>150,000 +</b>  курсов и мероприятий</p>
        </div>
      </div>

      <div className="bg">
        <img src={bg} alt="" />
      </div>

    </div>
  )
}

export default Home