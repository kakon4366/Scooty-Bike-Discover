import React from "react";
import useReview from "../../Hooks/useReview";
import CustomarReview from "../CustomarReview/CustomarReview";

const Review = () => {
	const [reviews] = useReview([]);

	return (
		<div className="container mx-auto py-20">
			<h3 className="text-center text-3xl font-semibold mb-6">
				All Customar Reviews ({reviews.length})
			</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
				{reviews.map((review) => (
					<CustomarReview
						key={review._id}
						review={review}
					></CustomarReview>
				))}
			</div>
		</div>
	);
};

export default Review;
