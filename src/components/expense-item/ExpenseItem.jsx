import PropTypes from "prop-types";
import css from "./ExpenseItem.module.css";
import ExpenseDate from "../expense-date/ExpenseDate";

export const ExpenseItem = ({ title, date, price }) => {
  return (
    <div className={css.expenseItemContainer}>
      <ExpenseDate date={date} />
      <div className={css.expenseItemTitle}>{title}</div>
      <div className={css.expenseItemPrice}>{price}</div>
    </div>
  );
};

ExpenseItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  price: PropTypes.number,
};
