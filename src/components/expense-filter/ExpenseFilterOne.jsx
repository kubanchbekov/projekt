import css from "./ExpenseFilter.module.css";
import PropTypes from "prop-types";



export const ExpenseFilterOne = ({ value, onChange }) => {
  return (
    <div className={css.conteiner}>
      <div className={css.myDiv}>
        <select className={css.mySelekt} value={value} onChange={onChange}>
          <option value="По убыванию">По убыванию</option>
          <option value="По возрастанию">По возрастанию</option>
          <option value="По новизне">По новизне</option>
          <option value="По названию">По названию</option>
        </select>
        <button value="По новизне" onClick={(e) => onChange(e.target.value)}>
          По новизне
        </button>
        <button value="По названию" onClick={(e) => onChange(e.target.value)}>
          По названию
        </button>
      </div>
    </div>
  );
};

ExpenseFilterOne.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

