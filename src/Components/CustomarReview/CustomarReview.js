import React from "react";

const CustomarReview = (props) => {
	const { name, email, image, review } = props.review;
	return (
		<div className="border border-slate-400 p-3 text-center ">
			<div className="w-[200px] overflow-hidden mx-auto mb-2">
				<img className="rounded" src={image} alt="" />
			</div>
			<h2 className="text-2xl">{name}</h2>
			<p className="text-lg">Email: {email}</p>
			<p className="text-md">Review: {review}</p>
		</div>
	);
};

export default CustomarReview;
