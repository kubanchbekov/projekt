import PropTypes from "prop-types";

const Input = ({ label, id, type }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
