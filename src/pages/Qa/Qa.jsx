import React from "react";
import "../Qa/Qa.css";

function Qa() {
  return (
    <>
      <div>
        <h1>Вопросы и ответы</h1>
      </div>
      <div className="qa-form-wrap">
        <div className="qa-form">
          <h2 className="question-for-colleagues">Задать вопрос коллегам</h2>
          <h3 className="your-question">Ваш вопрос:</h3>
          <input className="qa-input" type="text" placeholder="Текст" />
          <p className="qa-input-undertext">
            Нужна помощь на работе? Ваши дружелюбные, умные коллеги здесь, чтобы
            дать совет.
          </p>
          <button className="qa-button">Отправить свой вопрос</button>
        </div>
      </div>
    </>
  );
}

export default Qa;
