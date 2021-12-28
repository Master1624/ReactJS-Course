import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
	const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
	const totalMaximum = Math.max(...dataPointValues);
	const chart = props.dataPoints.map((dataPoint) => {
		return (
			<ChartBar
				key={dataPoint.label}
				value={dataPoint.value}
				maxValue={totalMaximum}
				label={dataPoint.label}
			/>
		);
	});
	return <div className="chart">{chart}</div>;
};

export default Chart;
