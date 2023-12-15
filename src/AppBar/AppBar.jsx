import React from "react";
import { Link, NavLink } from "react-router-dom";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PortraitIcon from "@mui/icons-material/Portrait";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import style from "./AppBar.module.css";
const setActive = ({ isActive }) => (isActive ? style.isActive : "");

export const AppBar = (props) => {
  return (
    <div className={style.navigation}>
      <nav className={style.links}>
        <NavLink className={setActive} to="/records">
          Учетные записи
        </NavLink>
        <NavLink className={setActive} to="/users">
          Пользователи
        </NavLink>
        <NavLink className={setActive} to="/">
          Объекты
        </NavLink>
        <NavLink className={setActive} to="/drivers">
          Водители
        </NavLink>
        <NavLink className={setActive} to="/noftifications">
          Уведомления
        </NavLink>
        <NavLink className={setActive} to="/objectsInDevelopment">
          Задания в разработке
        </NavLink>
      </nav>

      <div className={style.user}>
        <NotificationsNoneIcon />
        <div>{props.logo === undefined ? <PortraitIcon /> : props.logo}</div>
        <div className={style.email}>
          {props.name === undefined ? "gogoleffc@yandex.ru" : props.name}
        </div>
        <KeyboardArrowDownIcon />
      </div>
    </div>
  );
};
