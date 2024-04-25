import PropTypes from "prop-types";
import css from "./Button.module.css";

const Button = ({ title, styles, onClick }) => {
  return (
    <button className={`${css.button} ${styles}`} onClick={onClick}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
