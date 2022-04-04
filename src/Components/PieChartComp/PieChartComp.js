import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import useChartData from "../../Hooks/useChartData";

const PieChartComp = () => {
	const [data] = useChartData([]);
	const { investment, revenue } = data;
	return (
		<div className="mx-auto">
			<h2 className="text-2xl text-center mb-6 text-[#4F71D0]">
				Investment VS Revenue
			</h2>

			<PieChart width={250} height={250}>
				<Pie
					data={data}
					dataKey="investment"
					cx="50%"
					cy="50%"
					outerRadius={60}
					fill="#8884d8"
				/>
				<Pie
					data={data}
					dataKey="revenue"
					cx="50%"
					cy="50%"
					innerRadius={70}
					outerRadius={90}
					fill="#82ca9d"
					label
				/>
			</PieChart>
		</div>
	);
};

export default PieChartComp;
