import React from "react";
import useReview from "../../Hooks/useReview";
import CustomarReview from "../CustomarReview/CustomarReview";

const Review = () => {
	const [reviews, setReviews] = useReview([]);

	return (
		<div className="container mx-auto">
			<div className="grid grid-cols-3 gap-6 py-20">
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
