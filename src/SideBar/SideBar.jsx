import React from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import style from "./SideBar.module.css";

import { Link, NavLink } from "react-router-dom";
const setActive = ({ isActive }) => (isActive ? style.isActive : "");
export const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <nav className={style.nav}>
        <NavLink className={setActive} to={"/menu"}>
          <DensityMediumIcon />
        </NavLink>
        <NavLink className={setActive} to={"/location"}>
          <ShareLocationIcon />
        </NavLink>
        <NavLink className={setActive} to={"/"}>
          <ManageAccountsIcon />
        </NavLink>
      </nav>

      <div className={style.logout}>
        <NavLink className={setActive} to={"/logout"}>
          <LogoutIcon />
        </NavLink>
      </div>
    </div>
  );
};
