import React from "react";
import "../Articles/Articles.css";

function Articles() {
  return (
    <>
      <div>
        <h1>Статьи</h1>
        <p className="article-text">Учитесь на опыте и знаниях своих коллег</p>
        <button className="article-btn">Начать обучение</button>
        <div className="articles-list">
          <img src="" alt="" />
          <p className="articles-list-p">
            Основые советы по переходу из частного сектора в государственный{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Articles;
