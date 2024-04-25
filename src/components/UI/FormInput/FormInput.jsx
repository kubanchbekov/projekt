import PropTypes from "prop-types";
import css from "./FormInput.module.css";

export const FormInput = ({
  labelName,
  placeholder,
  inputType,
  id,
  value,
  onChange,
}) => {
  return (
    <div>
      <label className={css.formLabel} htmlFor={id}>
        {labelName}
      </label>
      <input
        className={css.formInput}
        type={inputType}
        placeholder={placeholder || "..."}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

FormInput.propTypes = {
  labelName: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};
