import css from "./ExpenseFilter.module.css";
import PropTypes from "prop-types";

export const ExpenseFilter = ({ value, onChange }) => {
  return (
    <div className={css.expenseFilter}>
      <div className={css.expenseFilterControl}>
        <select className={css.filter_date} value={value} onChange={onChange}>
          <option value="All">All</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
        </select>
      </div>
    </div>
  );
};

ExpenseFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
