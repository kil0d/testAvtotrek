import "./App.css";
import { AppBar } from "./AppBar/AppBar";
import { Sidebar } from "./SideBar/SideBar";
import { SearchBar } from "./SearchBar/SearchBar";
import { DeviceList } from "./DeviceList/DeviceList";
import * as React from "react";
import { ModalDialog } from "./ModalDialog/ModalDialog";

function App() {
  const [appState, setAppState] = React.useState([]);
  const [searchValue, setSeacrhValue] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const filtredAppState = appState.filter((spisok) => {
    let filterWord = Math.abs(spisok.id).toString();
    return filterWord.includes(searchValue);
  });
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <AppBar />
        <SearchBar
          searchValue={searchValue}
          handleOpen={handleOpen}
          setSeacrhValue={setSeacrhValue}
        />
        <div className="modal">
          <ModalDialog handleClose={handleClose} open={open} />
        </div>
        <DeviceList appState={filtredAppState} setAppState={setAppState} />
      </div>
    </div>
  );
}

export default App;
