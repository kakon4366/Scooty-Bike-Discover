import React from "react";
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
} from "recharts";
import useChartData from "../../Hooks/useChartData";

const LineChartComp = () => {
	// const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];
	const [data, setData] = useChartData([]);
	const { month, sell } = data;
	return (
		<div>
			<h2 className="text-2xl text-center">Month Wise Sell</h2>
			<LineChart
				width={600}
				height={300}
				data={data}
				margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
			>
				<Line type="monotone" dataKey="sell" stroke="#8884d8" />
				<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
				<XAxis dataKey="month" />
				<YAxis />
				<Tooltip />
			</LineChart>
		</div>
	);
};

export default LineChartComp;
