import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import cn from "classnames";

import { fetchCards } from "@store/CardsInfo/actions";

import addinform from "@assets/img/addinform.svg";
import history from "@assets/img/history.svg";
// import inform from "@assets/img/inform.svg";
import result from "@assets/img/result.svg";

import Card from "../CardInfo/CardInfo";

import "./CardsInfo.scss";

const Cards = ({}) => {
  const [activeitem, setactiveitem] = useState(null);

  const dispatch = useDispatch();
  const cards = useSelector(({ cards }) => cards.cards);

  React.useEffect(() => {
    dispatch(fetchCards());
  }, []);

  return (
    <>
      <h2 className="title">Электронная карта</h2>
      <ul className="cards">
        {cards &&
          cards.map((obj, index) => (
            <li className="cards__item" key={obj.id}>
              <Card
                activeitem={activeitem}
                className={cn(obj.className, {
                  hover: obj.hover
                    ? obj.hover
                    : activeitem && activeitem.id === obj.id,
                })}
                key={obj.id}
                {...obj}
                className={obj.text_two ? "card__text-modif" : null}
              />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Cards;

// <ul className="cards">
// <li className="cards__item">
//   <Card
//     className="card__text-modif"
//     // img={inform}
//     title="Информация о пациенте"
//     text="Ваши личные данные"
//     text_two="Рекомендации врачей"
//     text_three="История болезней"
//   />
// </li>

// <li className="cards__item">
//   <Card
//     img={result}
//     title="Результаты анализов"
//     text="Вы можете узнать здесь результаты своих анализов"
//   />
// </li>
// <li className="cards__item">
//   <Card
//     img={addinform}
//     title="Добавить  информацию"
//     text="Добавляйте в свою электронную медицинскую карту новые данные"
//   />
// </li>
// <li className="cards__item">
//   <Card
//     img={history}
//     title="История приемов"
//     text="Вся информация о полученных услугах за все время хранится здесь"
//   />
// </li>
// </ul>
