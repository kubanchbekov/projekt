import css from "./ChartBar.module.css";
import PropTypes from "prop-types";

const ChartBar = ({ label, value, totalMax }) => {
  let barFillHeight = "0%";
  if (totalMax > 0) {
    barFillHeight = Math.round((value / totalMax) * 100) + "%";
  }

  return (
    <div className={css.chartBar}>
      <div className={css.chartBarInner}>
        <div
          className={css.chartBarFill}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={css.chartBarLabel}>{label}</div>
    </div>
  );
};

export default ChartBar;
ChartBar.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  totalMax: PropTypes.number.isRequired,
};
