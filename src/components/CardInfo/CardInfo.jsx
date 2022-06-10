import cn from "classnames";

import "./CardInfo.scss";

const Card = ({
  title,
  className,
  outline,
  onClick,
  img,
  text,
  text_two,
  text_three,
}) => {
  return (
    <>
      <div className="card">
        <div className="card__wrapper">
          <div className="card__img">
            <img src={img} alt={"cardInfo"} />
          </div>
          <div className="card__content">
            <h3 className="card__title">{title}</h3>
            <hr className="card__line"></hr>
            <ul className="card__list">
              <li
                className={cn("card__text", className, {
                  "card__text-modif": outline,
                })}
              >
                {text}
              </li>
              <li
                className={cn("card__text", className, {
                  "card__text-modif": outline,
                })}
              >
                {text_two}
              </li>
              <li
                className={cn("card__text", className, {
                  "card__text-modif": outline,
                })}
              >
                {text_three}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
