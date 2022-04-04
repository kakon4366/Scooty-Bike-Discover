import React from "react";
import AreaChartComp from "../AreaChartComp/AreaChartComp";
import BarChartComp from "../BarChartComp/BarChartComp";
import LineChartComp from "../LineChartComp/LineChart";
import PieChartComp from "../PieChartComp/PieChartComp";

const Dashboard = () => {
	return (
		<section className="container mx-auto py-24">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mx-auto">
				<LineChartComp></LineChartComp>
				<AreaChartComp></AreaChartComp>
				<BarChartComp></BarChartComp>
				<PieChartComp></PieChartComp>
			</div>
		</section>
	);
};

export default Dashboard;
