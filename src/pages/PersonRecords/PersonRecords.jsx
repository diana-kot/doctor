import React from "react";
import { NavLink } from "react-router-dom";

import SimpleBarReact from "simplebar-react";

import "simplebar/src/simplebar.css";
import cn from "classnames";

import Records from "@components/Records";
import CalendarPerson from "@components/CalendarPerson";

import arrow from "@assets/img/arrow.svg";

import "./PersonRecords.scss";

const PersonRecords = () => {
  return (
    <>
      <NavLink to={"/"}>
        <div className="personrecords__btn">
          {/* <img className="personrecords__img" src={arrow} alt="arrow" /> */}
          <h2 className="titlemodif">Мои записи</h2>
        </div>
      </NavLink>
      <div className="personrecords">
        <div className="personrecords__wrapper">
          <SimpleBarReact scrollbarMaxSize={174} style={{ maxHeight: 645 }}>
            <div className="personrecords__content">
              <Records totalCountRecords={5} />
            </div>
          </SimpleBarReact>
        </div>
        <div className="personrecords__calendar">
          <CalendarPerson/>
        </div>
      </div>
    </>
  );
};

export default PersonRecords;
