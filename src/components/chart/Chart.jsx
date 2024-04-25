import css from "./Chart.module.css";
import ChartBar from "./ChartBar";
import PropTypes from "prop-types";

const Chart = ({ dataPoints }) => {
  const dataPointsValues = dataPoints.map((d) => d.value);

  const totalMax = Math.max(...dataPointsValues);

  return (
    <div className={css.chart}>
      {dataPoints.map((point) => {
        return (
          <ChartBar
            key={point.label}
            label={point.label}
            value={point.value}
            totalMax={totalMax}
          />
        );
      })}
    </div>
  );
};

export default Chart;

Chart.propTypes = {
  dataPoints: PropTypes.array.isRequired,
};
