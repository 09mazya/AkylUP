import React from "react";
import "../Courses/Courses.css";
import Circle from "../Courses/courses-img/circle.png";
import DataList from "../../courses.json";

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
          {DataList.map((item) => (
            <div className="courses-list-content">
              <img src={item.image} alt="" />
              <p className="courses-list-content-title">{item.title}</p>
              <p className="courses-list-content-description">
                {item.description}
              </p>
              <button className="courses-list-content-btn">
                Узнать больше
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;
