import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import Cards from "@components/CardsInfo";
import Records from "@components/Records";

import "./Profile.scss";

const Profile = () => {
  const visits = useSelector(({ visits }) => visits.visits);

  console.log(visits.length);
  return (
    <>
      <h2 className="title">Записи на прием</h2>
      <div className="wrapper__records">
        <div className="records">
          <Records totalCountRecords={2} />
        </div>
        <div className="records__more">
          {visits.length === 0 || visits.length === 1 ? (
            <div>Еще 0 записей</div>
          ) : (
            <div>Еще {visits.length - 2} записи</div>
          )}

          <div>
            <NavLink className="records__link" to={"/visits"}>
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
