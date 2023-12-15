import React from "react";
import { NavLink } from "react-router-dom";
import { Sidebar } from "../SideBar/SideBar";
import { AppBar } from "../AppBar/AppBar";
import style from "./NotFound.module.css";
export const NotFound = () => {
  return (
    <div>
      <div>
        {" "}
        <Sidebar />
      </div>

      <div>
        <AppBar />
        <div className={style.getBack}>
          <NavLink to={"/"}>Такой страницы нет. Вернуться обратно</NavLink>
        </div>
      </div>
    </div>
  );
};
