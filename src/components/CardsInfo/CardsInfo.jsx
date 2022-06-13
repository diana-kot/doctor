import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import cn from "classnames";

import { fetchCards } from "@store/CardsInfo/actions";
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

