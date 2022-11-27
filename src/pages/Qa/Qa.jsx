import React from "react";
import "../Qa/Qa.css";
import Chat from "./QA-img/chat_bubble.png";
import Collegues from "../Qa/QA-img/messageguys.png";

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
        <div className="questions">
          <p className="quetions-text">
            Как изменить организацию, что бы она стала клинтоориентированной а
            сервис ориентированной на цифровые технологии?
          </p>
          <div className="message-from">
            <div>
              <div className="collegues">
                <img src={Collegues} alt="" />
                <span className="micro-answers">Сообщение от коллег</span>
              </div>
              <p className="micro-answers-data">26 ноября 2022 года </p>
            </div>
            <div className="chat-bubble">
              <img className="chat-bubble-img" src={Chat} alt="" />
              <span className="micro-answers">1 ответ</span>
            </div>
          </div>
        </div>  
      </div>
    </>
  );
}

export default Qa;
