import React from 'react'

import Banner from '../../assets/banner.png'

import './Home.css'


function Home() {
  return (
    <div className="home">
      <div className='blockOne'>
      <div className="home-container">
        <div className="home-container__title">
          <div className="title">
            Приобретайте знания, навыки и связи, необходимые для успеха на государственной службе.
          </div>
          <div className="button">
            <button>
              Начать
            </button>
          </div>
          <div className="discription">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 40.3333C32.1252 40.3333 40.3334 32.1252 40.3334 22C40.3334 11.8747 32.1252 3.66663 22 3.66663C11.8748 3.66663 3.66669 11.8747 3.66669 22C3.66669 32.1252 11.8748 40.3333 22 40.3333Z" stroke="#25282B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3.66669 22H40.3334" stroke="#25282B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22 3.66663C26.5857 8.68694 29.1917 15.202 29.3334 22C29.1917 28.7979 26.5857 35.313 22 40.3333C17.4143 35.313 14.8083 28.7979 14.6667 22C14.8083 15.202 17.4143 8.68694 22 3.66663V3.66663Z" stroke="#25282B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>
              Используется более чем 150 000 государственных служащих и политиков
            </p>
          </div>
        </div>

        <div className="home-container__banner">
          <div className="banner-background">
            <div className="img">
              <img src={Banner} alt="an image"/>
            </div>
          </div>
        </div>

        <div className='four_main_elements'>
          <div className=''>
            <div>
              <svg width="57" height="54" viewBox="0 0 57 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.16669 6.75H19.1667C21.642 6.75 24.016 7.69821 25.7664 9.38604C27.5167 11.0739 28.5 13.3631 28.5 15.75V47.25C28.5 45.4598 27.7625 43.7429 26.4498 42.477C25.137 41.2112 23.3565 40.5 21.5 40.5H5.16669V6.75Z" stroke="#2F5AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M51.8333 6.75H37.8333C35.358 6.75 32.984 7.69821 31.2337 9.38604C29.4833 11.0739 28.5 13.3631 28.5 15.75V47.25C28.5 45.4598 29.2375 43.7429 30.5503 42.477C31.863 41.2112 33.6435 40.5 35.5 40.5H51.8333V6.75Z" stroke="#2F5AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span>Курсы</span>
            <p>Навыки, адаптированные к потребностям государственными служащими 21 века</p>
          </div>
          <div className=''>
            <div>
              <svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 4.5H14C12.8065 4.5 11.6619 4.97411 10.818 5.81802C9.97411 6.66193 9.5 7.80653 9.5 9V45C9.5 46.1935 9.97411 47.3381 10.818 48.182C11.6619 49.0259 12.8065 49.5 14 49.5H41C42.1935 49.5 43.3381 49.0259 44.182 48.182C45.0259 47.3381 45.5 46.1935 45.5 45V18L32 4.5Z" stroke="#2F5AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M32 4.5V18H45.5" stroke="#2F5AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M36.5 29.25H18.5" stroke="#2F5AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M36.5 38.25H18.5" stroke="#2F5AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M23 20.25H20.75H18.5" stroke="#2F5AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

            </div>
            <span>Статьи</span>
            <p>Делитесь своими мыслями и учитесь у коллег</p>
          </div>
          <div className=''>
            <div>
              <svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.25 9H11.75C9.26472 9 7.25 11.0147 7.25 13.5V45C7.25 47.4853 9.26472 49.5 11.75 49.5H43.25C45.7353 49.5 47.75 47.4853 47.75 45V13.5C47.75 11.0147 45.7353 9 43.25 9Z" stroke="#2F5AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M36.5 4.5V13.5" stroke="#2F5AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.5 4.5V13.5" stroke="#2F5AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.25 22.5H47.75" stroke="#2F5AA8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

            </div>
            <span>События</span>
            <p>Интерактивные онлайн-семинары с государственными служащими по всему миру</p>
          </div>
          <div className=''>
            <div>
              <svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M47.75 33.75C47.75 34.9435 47.2759 36.0881 46.432 36.932C45.5881 37.7759 44.4435 38.25 43.25 38.25H16.25L7.25 47.25V11.25C7.25 10.0565 7.72411 8.91193 8.56802 8.06802C9.41193 7.22411 10.5565 6.75 11.75 6.75H43.25C44.4435 6.75 45.5881 7.22411 46.432 8.06802C47.2759 8.91193 47.75 10.0565 47.75 11.25V33.75Z" stroke="#2F5AA8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span>Вопросы и ответы</span>
            <p>Найдите государственных служащих, решающих те же вопросы</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home