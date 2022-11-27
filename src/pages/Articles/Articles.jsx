import React from "react";
import "../Articles/Articles.css";
import DataArticles from "../../dataArticles.json";
import Author from "../Articles/Articles-img/author.png";

function Articles() {
  return (
    <>
      <div>
        <div className="article-head">
          <div className="article-header-box">
            <h1 className="article-title">Статьи</h1>
            <p className="article-text">
              Учитесь на опыте и знаниях своих коллег
            </p>
            <button className="article-btn">Начать обучение</button>
          </div>
        </div>
        {DataArticles.map((item) => (
          <div className="articles-list">
            <img className="articles-img" src={item.image} alt="" />
            <div>
              <p className="articles-list-p">{item.title}</p>
              <div className="autor-block">
                <img className="autor-block-img" src={Author} alt="" />
                <p className="autor">Асанов Усон</p>
                <p className="autor">26.11.2022</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Articles;