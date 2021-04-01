import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/contacts/actions/contactsActions";
import { getFilterSelector } from "../../redux/contacts/ selectors/contactsSelectors";
import TextField from "@material-ui/core/TextField";
import styles from "./Filter.module.css";

const Filter = () => {
  const filter = useSelector(getFilterSelector);
  const dispatch = useDispatch();

  const inputHandler = ({ target }) => {
    const { value } = target;
    dispatch(changeFilter(value));
  };

  return (
    <>
      <p className={styles.title}>Find contacts by name</p>
      <label className={styles.FilterLable}>
        <TextField
          id="filter"
          variant="filled"
          onChange={inputHandler}
          type="text"
          name="filter"
          placeholder="Enter name..."
          value={filter}
        />
      </label>
    </>
  );
};

export default Filter;
