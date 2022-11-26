import React, {useState} from 'react'
import './Home.scss'
import Modal from './../../components/Modal/Modal'
import bg from './../../assets/img/images.png'

import courses from './../../assets/icons/interaction.png'
import articles from './../../assets/icons/interaction (1).png'
import events from './../../assets/icons/share setting.png'
import qa from './../../assets/icons/place  storage.png'
import avatar from './../../assets/img/Исманкулов1.jpg'

import data from './data.json'

function Home() {
  const [isOpen, setIsOpen]= useState(false)
  return (
    <div className='home-wrapper'> 
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

      <div className='home-main-icons'>

        <div className='courses item'>
          <img src={courses} alt="" />
          <h4>Курсы</h4>
          <p>Навыки, адаптированные к потребностям 21 века</p>
        </div>

        <div className='articles item'>
          <img src={articles} alt="" />
          <h4>Статьи</h4>
          <p>Делитесь своими мыслями и учитесь у коллег</p>
        </div>

        <div className='events item'>
          <img src={events} alt="" />
          <h4>Мероприятия</h4>
          <p>Интерактивные онлайн-семинары и офлайн-семинары</p>
        </div>

        <div className='qa item'>
          <img src={qa} alt="" />
          <h4>Вопросы и ответы</h4>
          <p>Найдите коллег, решающих те же вопросы</p>
        </div>
      </div>

      <div className="home-courses-events">
          <h2>Курсы</h2>
          <div className="home-courses">
            {data.map((item) => (
            <div className="home-courses-content">
              <img src={item.image} alt="" />
              <p className="home-courses-content-title">{item.title}</p>
              <p className="home-courses-content-description">
                {item.description}
              </p>
            </div>
          ))}
            
          </div>
          <a href='/'>Посмотреть все</a>

          </div>
          <div className="testimonial">
                <div className="left">
                  <div className="test-text">
                    <p>“</p>
                    <h4>Я считаю, что akylup постоянно имеет представление об авангарде инновационного правительства и потенциале государственного сектора для трансформационных изменений".
                    </h4>
                  </div>

                  <div className="feedback">
                    <img src={avatar} alt="" />
                    <div className="feedback-author">
                      <h6>Исманкулов Алмазбек Осмоналиевич</h6>
                      <p>Офтальмолог-хирург, доктор медицинских наук</p>
                    </div>
                  </div>
                </div>

                <div className="right">
                  <button>Присоединиться</button>
                </div>
                
                
              </div>
          <div className="home-courses-events">
              <h2>Мероприятия</h2>
              <div className="home-events">
                {data.map((item) => (
                <div className="home-courses-content">
                  <img src={item.image} alt="" />
                  <p className="home-courses-content-title">{item.title}</p>
                  <p className="home-courses-content-description">
                    {item.description}
                  </p>
                </div>
              ))}
                
              </div>
              <a href='/'>Посмотреть все</a>
              </div>

              
      </div>
  )
}

export default Home