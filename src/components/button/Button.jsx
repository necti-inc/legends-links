import React from "react";
import style from "./button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button(props) {
  return (
    <a className={style.button} target={"_blank"} href={props.link}>
      <div className={style.container}>
        <FontAwesomeIcon className={style.buttonIcon} icon={props.icon} />
        <p className={style.title}>{props.title}</p>
      </div>
    </a>
  );
}

export default Button;
