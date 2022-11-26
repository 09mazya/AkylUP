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
              <img src={Banner} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home