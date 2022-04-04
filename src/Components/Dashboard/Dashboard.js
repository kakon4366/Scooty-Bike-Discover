import React from "react";
import AreaChartComp from "../AreaChartComp/AreaChartComp";
import BarChartComp from "../BarChartComp/BarChartComp";
import LineChartComp from "../LineChartComp/LineChart";
import PieChartComp from "../PieChartComp/PieChartComp";

const Dashboard = () => {
	return (
		<div>
			<h1>This is Dashboard page</h1>
			<LineChartComp></LineChartComp>
			<AreaChartComp></AreaChartComp>
			<BarChartComp></BarChartComp>
			<PieChartComp></PieChartComp>
		</div>
	);
};

export default Dashboard;
