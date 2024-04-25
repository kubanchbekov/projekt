import { useState } from "react";
import Button from "../UI/Button/Button";
import { FormInput } from "../UI/FormInput/FormInput";
import css from "./ExpenseForm.module.css";
import PropTypes from "prop-types";
import { generateUniqueID } from "../../utils/helpers";

export const ExpenseForm = ({ onShowForm, onAdd }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState(null);
  const cancelHandler = (event) => {
    event.preventDefault();
    onShowForm();
  };

  const titleInputChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const priceInputChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  const dateInputChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const saveHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title,
      price,
      date: new Date(date),
      id: generateUniqueID(),
    };
    onAdd(expenseData);
    setTitle("");
    setPrice("");
    setDate("");
  };
  return (
    <form>
      <div className={css.formInputContainer}>
        <FormInput
          labelName="Заголовок"
          id="title"
          inputType="text"
          value={title}
          onChange={titleInputChangeHandler}
        />
        <FormInput
          labelName="Количество"
          id="price"
          inputType="number"
          value={price}
          onChange={priceInputChangeHandler}
        />
      </div>
      <FormInput
        labelName="Датировать"
        id="date"
        inputType="date"
        value={date}
        onChange={dateInputChangeHandler}
      />
      <div className={css.formInputFooter}>
        <Button
          title="Отмена"
          styles={css.buttonSpace}
          onClick={cancelHandler}
        />
        <Button title="Добавить расход" onClick={saveHandler} />
      </div>
    </form>
  );
};

ExpenseForm.propTypes = {
  onShowForm: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};
