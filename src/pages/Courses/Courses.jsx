import React from "react";
import "../Courses/Courses.css";
import Circle from "../Courses/courses-img/circle.png";
import ImgFor from "../Courses/courses-img/imgfor.png";

function Courses() {
  return (
    <>
      <div className="courses-title-block">
        <h1 className="courses-title">Навыки для правительств 21 века</h1>
        <p className="courses-text">
          Интерактивные онлайн-курсы для государственных служащих 21 века.
          Освойте основные навыки и получите сертификат об окончании.
        </p>
      </div>
      <div className="courses-list">
        <div className="courses-list-title">
          <img className="courses-list-title-img" src={Circle} alt="" />
          <p className="courses-list-title-text">
            ПОДХОДЫ К РАЗРАБОТКЕ ПОЛИТИКИ
          </p>
        </div>
        <div className="courses-list-wrap">
          <div className="courses-list-content">
            <img src={ImgFor} alt="" />
            <p>Бесплатные курсы</p>
            <p>Экономическая справедливость и права</p>
            <button>Узнать больше</button>
          </div>
          <div className="courses-list-content">
            <img src={ImgFor} alt="" />
            <p>Бесплатные курсы</p>
            <p>Экономическая справедливость и права</p>
            <button>Узнать больше</button>
          </div>
          <div className="courses-list-content">
            <img src={ImgFor} alt="" />
            <p>Бесплатные курсы</p>
            <p>Экономическая справедливость и права</p>
            <button>Узнать больше</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
