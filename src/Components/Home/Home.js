import React from "react";
import ScootyPhoto from "../../images/scooty.png";

const Home = () => {
	return (
		<section className="py-24 bg-[#A3E4DB]">
			<div className="container mx-auto">
				<div className="grid grid-cols-2 gap-4">
					<div>
						<h1 className="text-6xl lg:text-8xl">Scooty Bike Discover</h1>
						<p className="text-justify my-4">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Fugit laborum nihil quidem tempora commodi, eos labore
							porro sunt minima deleniti numquam exercitationem quia,
							modi a facere! Possimus cumque unde itaque!
						</p>
						<button className="border text-white bg-[#1C6DD0] py-2 px-8 rounded">
							Learn More
						</button>
					</div>
					<div className="mx-auto">
						<img src={ScootyPhoto} alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
