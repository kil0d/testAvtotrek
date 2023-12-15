import React from "react";
import style from "./SearchBar.module.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";
import FilterListIcon from "@mui/icons-material/FilterList";

export const SearchBar = (props) => {
  return (
    <div className={style.searchBar}>
      <div className={style.searchBarLeft}>
        <div className={style.searchField}>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 300,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Поиск"
              inputProps={{ "aria-label": "Поиск" }}
              value={props.searchValue}
              onChange={(event) => {
                props.setSeacrhValue(event.target.value);
              }}
            />

            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <button className={style.button + " " + style.objbutton}>
          Объекты
        </button>
        <button
          className={style.button + " " + style.groupbutton}
          id={style.button + " " + style.groupbutton}
          variant="outlined"
        >
          Группы
        </button>
        <div className={style.icons}>
          <CalendarViewWeekIcon />
          <FilterListIcon />
          <DownloadIcon />
        </div>
      </div>
      <div className={style.searchBarRight}>
        <select
          onChange={(event) => {
            if (event.target.value === "Добавить данные") {
              props.handleOpen();
              event.target.value = "Действия";
            }
          }}
          className={style.buttonAction}
        >
          <option value="Действия">Действия</option>
          <option value="Добавить данные">Добавить данные</option>
        </select>
      </div>
    </div>
  );
};
