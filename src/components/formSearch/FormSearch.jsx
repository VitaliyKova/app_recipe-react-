import React from "react";
import clases from "./FormSearch.module.css";
import { FaSearch } from "react-icons/fa";

function FormSearch(...props) {
  return (
    <div className={clases.form}>
      <input
        className={clases.form__input}
        type="text"
        placeholder="enter the recipe "
      />
      <button onClick={props.onClick} className={clases.form__button}>
        <FaSearch className={clases.form__button_icon} />
      </button>
    </div>
  );
}

export default FormSearch;
