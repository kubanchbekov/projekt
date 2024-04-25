import PropTypes from "prop-types";
import css from "./ExpenseDate.module.css";

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className={css.expenseDate}>
      <div className={css.expenseMonth}>{month}</div>
      <div className={css.expenseDay}>{year}</div>
      <div className={css.expenseYear}>{day}</div>
    </div>
  );
};

export default ExpenseDate;

ExpenseDate.propTypes = {
  date: PropTypes.instanceOf(Date),
};
