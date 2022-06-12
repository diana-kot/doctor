import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import logo from "@assets/img/logo.png";
import cn from "classnames";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav__logo">Логотип</div>
        <nav className="nav__wrapper">
          <div className="nav__top">
            <ul className="nav__list">
              <NavLink
                className="nav__link"
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "#7761FF" : "#FFFFFF",
                  borderLeft: isActive ? "solid 2.5px #7761FF" : "",
                  background: isActive ? "#fcfcfc" : "",
                  // svg: isActive ? "" : "",
                })}
                children={({ isActive }) => (
                  <>
                    <li className="nav__item">
                      <img
                        alt="heart"
                        src={`assets/img/heart-${
                          isActive ? "active" : "default"
                        }.svg`}
                        width={18}
                      />
                      Профиль
                    </li>
                  </>
                )}
              ></NavLink>
              <NavLink
                className="nav__link"
                to="/doctors"
                style={({ isActive }) => ({
                  color: isActive ? "#7761FF" : "#FFFFFF",
                  borderLeft: isActive ? "solid 2.5px #7761FF" : "",
                  background: isActive ? "#fcfcfc" : "",
                  // svg: isActive ? "" : "",
                })}
                children={({ isActive }) => (
                  <>
                    <li className="nav__item">
                      <img
                        alt="heart"
                        src={`assets/img/doctor-${
                          isActive ? "active" : "default"
                        }.svg`}
                        width={18}
                      />
                      Врачи и клиники
                    </li>
                  </>
                )}
              ></NavLink>
               <NavLink
                className="nav__link"
                to="/messages"
                style={({ isActive }) => ({
                  color: isActive ? "#7761FF" : "#FFFFFF",
                  borderLeft: isActive ? "solid 2.5px #7761FF" : "",
                  background: isActive ? "#fcfcfc" : "",
                  // svg: isActive ? "" : "",
                })}
                children={({ isActive }) => (
                  <>
                    <li className="nav__item">
                      <img
                        alt="heart"
                        src={`assets/img/speak-${
                          isActive ? "active" : "default"
                        }.svg`}
                        width={18}
                      />
                      Сообщения
                    </li>
                  </>
                )}
              ></NavLink>
                <NavLink
                className="nav__link"
                to="/test"
                style={({ isActive }) => ({
                  color: isActive ? "#7761FF" : "#FFFFFF",
                  borderLeft: isActive ? "solid 2.5px #7761FF" : "",
                  background: isActive ? "#fcfcfc" : "",
                  // svg: isActive ? "" : "",
                })}
                children={({ isActive }) => (
                  <>
                    <li className="nav__item">
                      <img
                        alt="heart"
                        src={`assets/img/test-${
                          isActive ? "active" : "default"
                        }.svg`}
                        width={18}
                      />
                      Тестирование
                    </li>
                  </>
                )}
              ></NavLink>
              <NavLink
                className="nav__link"
                to="/important"
                style={({ isActive }) => ({
                  color: isActive ? "#7761FF" : "#FFFFFF",
                  borderLeft: isActive ? "solid 2.5px #7761FF" : "",
                  background: isActive ? "#fcfcfc" : "",
                  // svg: isActive ? "" : "",
                })}
                children={({ isActive }) => (
                  <>
                    <li className="nav__item">
                      <img
                        alt="heart"
                        src={`assets/img/book-${
                          isActive ? "active" : "default"
                        }.svg`}
                        width={18}
                      />
                      Полезно знать
                    </li>
                  </>
                )}
              ></NavLink>
              <Button
                text="Подать заявку"
                //  onClick={handleCreateVisit}
              />
                <NavLink
                className="nav__link"
                to="/help"
                style={({ isActive }) => ({
                  color: isActive ? "#7761FF" : "#FFFFFF",
                  borderLeft: isActive ? "solid 2.5px #7761FF" : "",
                  background: isActive ? "#fcfcfc" : "",
                  // svg: isActive ? "" : "",
                })}
                children={({ isActive }) => (
                  <>
                    <li className="nav__item">
                      <img
                        alt="heart"
                        src={`assets/img/help-${
                          isActive ? "active" : "default"
                        }.svg`}
                        width={18}
                      />
                   Помощь
                    </li>
                  </>
                )}
              ></NavLink>
            </ul>
          </div>
          <div>
            <img
              className="nav__img"
              width="113"
              height="20"
              src={logo}
              alt="logo"
            />
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
