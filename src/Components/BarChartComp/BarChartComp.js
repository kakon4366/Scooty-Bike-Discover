import React from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	LabelList,
} from "recharts";
import useChartData from "../../Hooks/useChartData";

const renderCustomizedLabel = (props) => {
	const { x, y, width, height, value } = props;
	const radius = 10;

	return (
		<g>
			<circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
			<text
				x={x + width / 2}
				y={y - radius}
				fill="#fff"
				textAnchor="middle"
				dominantBaseline="middle"
			>
				{value[0]}
			</text>
		</g>
	);
};

const BarChartComp = () => {
	const [data] = useChartData([]);
	const { month, investment, revenue } = data;
	return (
		<div>
			<h2>Bar Chart Investment VS Revenue</h2>
			<BarChart
				width={500}
				height={300}
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="month" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="investment" fill="#8884d8" minPointSize={5}>
					<LabelList dataKey="month" content={renderCustomizedLabel} />
				</Bar>
				<Bar dataKey="revenue" fill="#82ca9d" minPointSize={10} />
			</BarChart>
		</div>
	);
};

export default BarChartComp;
