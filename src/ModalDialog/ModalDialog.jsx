import * as React from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styles from "./ModalDialog.module.css";
import { useSpring, animated } from "@react-spring/web";
import axios from "axios";

const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export const ModalDialog = (props) => {
  const [id, setId] = React.useState("");
  const [name, setName] = React.useState("");
  const [uniqueId, setUniqueId] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [disabled, setDisabled] = React.useState(false);
  const [lastUpdate, setLastUpdate] = React.useState("");
  const [positionId, setPositionId] = React.useState("");
  const [groupId, setGroupId] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [model, setModel] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [category, setCategory] = React.useState("");
  const apiUrl = "https://gps.autotracker.group/api/devices";
  let token =
    "RzBFAiEA92qN8JvTQ6BIgvjSTke8iQltj3SJf9vhkqyf5zcuUL4CIF1GRd1vLuSJrzzDqv80AF_BAiF91tCWPMvlhuRNrI0DeyJ1IjozLCJlIjoiMjAyMy0xMi0zMVQyMTowMDowMC4wMDArMDA6MDAifQ";
  const createObj = () => {
    axios
      .post(
        apiUrl,

        {
          id,
          name,
          uniqueId,
          status,
          disabled,
          lastUpdate,
          positionId,
          groupId,
          phone,
          model,
          contact,
          category,
        },
        { headers: { Authorization: `Bearer  ${token}` } }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        if (
          error.response.status === 400 &&
          error.response.data.includes("Write access denied")
        ) {
          alert(
            `У вас нет прав для отправки данных! Ошибка ${error.response.status}`
          );
          props.handleClose();
        }
      });
  };
  return (
    <>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            <div className="item">
              <p>Заполните данные</p>
              <div className="item_datepicker">
                <p className="item_datepicker_title">id</p>
                <input
                  value={id}
                  onChange={(event) => {
                    setId(event.target.value);
                  }}
                  type="number"
                ></input>
              </div>
              <div className="item_datepicker">
                <p className="item_datepicker_title">name</p>
                <input
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  type="text"
                ></input>
              </div>
              <div className="item_datepicker">
                <p className="item_datepicker_title">Unique Id</p>
                <input
                  value={uniqueId}
                  onChange={(event) => {
                    setUniqueId(event.target.value);
                  }}
                  type="text"
                ></input>
              </div>
              <div className="item_datepicker">
                <p className="item_datepicker_title">status</p>
                <input
                  value={status}
                  onChange={(event) => {
                    setStatus(event.target.value);
                  }}
                  type="text"
                ></input>
              </div>
              <p className="item_datepicker_title">disabled</p>
              <input
                value={disabled}
                onChange={() => {
                  setDisabled(!disabled);
                }}
                type="checkbox"
                className="text_new_mess_header"
              />
              <p className="item_datepicker_title">lastUpdate</p>
              <input
                value={lastUpdate}
                onChange={(event) => {
                  setLastUpdate(event.target.value);
                }}
                type="date"
                className="text_new_mess"
              />
              <div className="item_datepicker">
                <p className="item_datepicker_title">positionId</p>
                <input
                  value={positionId}
                  onChange={(event) => {
                    setPositionId(event.target.value);
                  }}
                  type="number"
                ></input>
              </div>
              <div className="item_datepicker">
                <p className="item_datepicker_title">groupId</p>
                <input
                  value={groupId}
                  onChange={(event) => {
                    setGroupId(event.target.value);
                  }}
                  type="number"
                ></input>
              </div>
              <div className="item_datepicker">
                <p className="item_datepicker_title">phone</p>
                <input
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value);
                  }}
                  type="text"
                ></input>
              </div>
              <div className="item_datepicker">
                <p className="item_datepicker_title">model</p>
                <input
                  value={model}
                  onChange={(event) => {
                    setModel(event.target.value);
                  }}
                  type="text"
                ></input>
              </div>
              <div className="item_datepicker">
                <p className="item_datepicker_title">contact</p>
                <input
                  value={contact}
                  onChange={(event) => {
                    setContact(event.target.value);
                  }}
                  type="text"
                ></input>
              </div>
              <div className="item_datepicker">
                <p className="item_datepicker_title">category</p>
                <input
                  value={category}
                  onChange={(event) => {
                    setCategory(event.target.value);
                  }}
                  type="text"
                ></input>
                <button
                  onClick={() => {
                    createObj();
                  }}
                  className={styles.submitButton}
                  type="submit"
                >
                  Отправить данные
                </button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
