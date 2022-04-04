import React from "react";
import { useNavigate } from "react-router-dom";
import useReview from "../../Hooks/useReview";
import ScootyPhoto from "../../images/scooty.png";
import CustomarReview from "../CustomarReview/CustomarReview";
import { ArrowRightIcon } from "@heroicons/react/solid";

const Home = () => {
	const [reviews, setReviews] = useReview([]);
	const navigate = useNavigate();
	return (
		<section>
			<div className="bg-[#cbebe7] py-24">
				<div className="container mx-auto">
					<div className="grid grid-cols-2 gap-4">
						<div>
							<h1 className="text-6xl lg:text-8xl">
								Scooty Bike Discover
							</h1>
							<p className="text-justify my-4">
								Lorem ipsum, dolor sit amet consectetur adipisicing
								elit. Fugit laborum nihil quidem tempora commodi, eos
								labore porro sunt minima deleniti numquam exercitationem
								quia, modi a facere! Possimus cumque unde itaque!
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
			</div>
			{/* customar review part */}
			<div className="my-24">
				<h3 className="text-center text-3xl font-semibold">
					Customar Reviews (3)
				</h3>
				<div className="flex justify-center py-12 container mx-auto gap-8">
					{reviews.slice(0, 3).map((review) => (
						<CustomarReview
							key={review._id}
							review={review}
						></CustomarReview>
					))}
				</div>
				<div className="flex justify-center">
					<button
						onClick={() => navigate("/review")}
						className="bg-[#1C6DD0] flex items-center justify-center py-1 px-12 rounded text-white"
					>
						<span>See All Reviews</span>
						<ArrowRightIcon className="w-4 mt-1"></ArrowRightIcon>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Home;
