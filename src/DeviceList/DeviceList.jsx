import { Checkbox } from "@mui/material";
import React from "react";
import axios from "axios";
import style from "./DeviceList.module.css";
import { useEffect, useState } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const apiUrl = "https://gps.autotracker.group/api/devices";

let token =
  "RzBFAiEA92qN8JvTQ6BIgvjSTke8iQltj3SJf9vhkqyf5zcuUL4CIF1GRd1vLuSJrzzDqv80AF_BAiF91tCWPMvlhuRNrI0DeyJ1IjozLCJlIjoiMjAyMy0xMi0zMVQyMTowMDowMC4wMDArMDA6MDAifQ";
export const DeviceList = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const appState = props.appState;
  const setAppState = props.setAppState;
  const menuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const menuClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    axios
      .get(apiUrl, { headers: { Authorization: `Bearer  ${token}` } })
      .then((resp) => {
        const allPersons = resp.data;
        setAppState(allPersons);
      });
  }, []);
  const deleteElement = (currentId) => {
    axios
      .delete(apiUrl + `/${currentId}`, {
        headers: { Authorization: `Bearer  ${token}` },
      })
      .then((response) => {
        let newAppState = appState.filter((id) => id.id !== currentId);
        setAppState(newAppState);
      })
      .catch((error) => {
        if (
          error.response.status === 400 &&
          error.response.data.includes("Write access denied")
        ) {
          alert(
            `У вас нет прав для удаления данных! Ошибка ${error.response.status}`
          );
        }
      });
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <Checkbox />
          </th>
          <th>№</th>
          <th>Иконка</th>
          <th>Фотография</th>
          <th>Имя</th>
          <th>Создатель</th>
          <th>Учетная запись</th>
          <th>Категория</th>
          <th>Тип объекта</th>
          <th className={style.ids}>ID</th>
          <th className={style.empty}></th>
        </tr>
      </thead>
      <tbody>
        {appState.map((person) => {
          return (
            <tr>
              <td>
                <Checkbox />
              </td>
              <td>{person.id}</td>
              <td>
                <LocalShippingIcon />
              </td>
              <td>
                {person.photo === undefined ? (
                  <AccountCircleIcon />
                ) : (
                  person.photo
                )}
              </td>
              <td>{person.name}</td>
              <td></td>
              <td></td>
              <td>truck</td>
              <td></td>
              <td className={style.ids}>{person.id}</td>
              <td className={style.movert + " " + style.empty}>
                <div onClick={menuOpen}>
                  <MoreVertIcon />
                </div>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={menuClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      menuClose();
                      deleteElement(person.id);
                    }}
                  >
                    Удалить
                  </MenuItem>
                </Menu>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
