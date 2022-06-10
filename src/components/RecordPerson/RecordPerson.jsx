import React from "react";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";

import Button from "../Button";

import "./RecordPerson.scss";

const RecordPerson = ({
  date,
  id,
  className,
  onRemove,
  img,
  hospitalName,
  hospitalAdress,
  doctorName,
  department,
  
}) => {



  const notVisit = () => {
    onRemove(id);
  };

  return (
    <>
      <div className="record">
        <div className="record__wrapper">
          <div className="record__top">
            <span className="record__time">
              {format(new Date(date), "EEEE dd.MM.yyyy | HH:mm", {
              locale: ru,
            })}
            </span>
            <span className="record__name">{hospitalName}</span>
            <span className="record__name">{hospitalAdress}</span>
          </div>
          <div className="record__botom">
            <div className="record__doctor">
              <div>
                <img
                  className="record__avatar"
                  src={img}
                  alt={"аватар врача"}
                />
              </div>
              <div>
                <div className="record__namedoctor">{doctorName}</div>
                <div className="record__department">{department}</div>
              </div>
            </div>
            <Button
              onClick={notVisit}
              className={"record__button"}
              text="Отменить"
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecordPerson;
