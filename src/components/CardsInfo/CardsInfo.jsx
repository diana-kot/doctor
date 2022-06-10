import addinform from "@assets/img/addinform.svg";
import history from "@assets/img/history.svg";
import inform from "@assets/img/inform.svg";
import result from "@assets/img/result.svg";

import Card from "../CardInfo/CardInfo";

import "./CardsInfo.scss";

const Cards = () => {
  return (
    <>
      <h2 className="title">Электронная карта</h2>

      <ul className="cards">
        <li className="cards__item">
          <Card
            className="card__text-modif"
            img={inform}
            title="Информация о пациенте"
            text="Ваши личные данные"
            text_two="Рекомендации врачей"
            text_three="История болезней"
          />
        </li>

        <li className="cards__item">
          <Card
            img={result}
            title="Результаты анализов"
            text="Вы можете узнать здесь результаты своих анализов"
          />
        </li>
        <li className="cards__item">
          <Card
            img={addinform}
            title="Добавить  информацию"
            text="Добавляйте в свою электронную медицинскую карту новые данные"
          />
        </li>
        <li className="cards__item">
          <Card
            img={history}
            title="История приемов"
            text="Вся информация о полученных услугах за все время хранится здесь"
          />
        </li>
      </ul>
    </>
  );
};

export default Cards;
