import React from "react";
import { NavLink } from "react-router-dom";

import Cards from "@components/CardsInfo";
import Records from "@components/Records";
import "./Profile.scss";

const Profile = () => {
  return (
    <>
      <h2 className="title">Записи на прием</h2>
      <div className="wrapper__records">
        <div className="records">
          <Records totalCountRecords={2} />
        </div>
        <div className="records__more">
          <div>Еще 3 записи</div>
          <div>
            <NavLink className="records__link" to={"/profile/visits"}>
              Подробнее
            </NavLink>
          </div>
        </div>
      </div>

      <Cards />
    </>
  );
};

export default Profile;
