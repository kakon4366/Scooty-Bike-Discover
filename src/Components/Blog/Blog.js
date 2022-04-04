import React from "react";

const Blog = () => {
	return (
		<section className="py-20">
			<div className="container mx-auto">
				<div className="xl:w-3/4 mx-auto">
					<article className="mb-8">
						<h2 className="text-3xl italic font-semibold">
							1. What is context API?
						</h2>
						<p>
							<span className="font-semibold">Ans: </span>
							Context API হলো এমন একটি React এর Hook যেটা props ডিলিং
							থেকে একটা powerfull. যার মাধমে parent component থেকে যে কোন
							data যেমন: number, string, function, array, object and
							another data খুব সহজেই context api এর মাধ্যমে child
							component এ data পাঠানো যায়। অর্থাৎ বলতে গেলে context api
							এর মাধ্যমে যে কোন data খুই সহজেই তার child component এ
							পাঠানো সহজ হয়ে গেছে।
						</p>
					</article>
					<article className="mb-8">
						<h2 className="text-3xl italic font-semibold">
							2. What is Semantic Tag?
						</h2>
						<p>
							<span className="font-semibold">Ans: </span>
							Semantic Tag হচ্ছে এমন এক ধরনের tags যেটা browser and
							developer এর জন্য খুবই meanning full অর্থে বুঝানো হয়।
							‍Semantic Tag একটি website কে আকর্ষনীয় করে তোলে। SEO
							(Search Engine Optimization) এর জন্য ‍Semantic Tag খুবই
							গুরুত্বপূর্ণ ভূমিকা পালন করে। Semantic Tag গুলো মানুষের
							পড়তে খুবই সহজ হয়। যেমন: article, aside, details, footer,
							header, main, section ইত্যাদি এগুলোই হলো Semantic Tag।
						</p>
					</article>
					<article>
						<h2 className="text-3xl italic font-semibold">
							3. Inline, Block এবং Inline-Blick এদের মধ্যে পার্থক্য কী?
						</h2>
						<p>
							<span className="font-semibold">Ans: </span>
							<br />
							1. Inline: Inline হলো কোন একটি Element যতটুকু জায়গা তার
							দরকার ঠিক ততটুকু জায়গাই সে নিবে। যদি তার পাশে জায়গা ফাকা
							থাকে তবে অন্য একটি Element সেই জায়গায় বসবে তবে সেটা যদি সেই
							জায়গায় মধ্যে বসে তাহলে সে সেখাসে বসবে।
							<br />
							2. Block: Block হলো কোন Element যতটুকু জায়গায় থাকুক না কেন
							সে পুরা জায়গা দখল করে নিবে। অর্থাৎ Inline এর বিপরীত।
							<br />
							3. Inline-block: Inline এবং Block এর একটু একটু বৈশিষ্ট্যকে
							নিয়ে Inline-block কাজ করে। যেমন: Inline কোন Element এর
							Margin and Padding কে গুরুত্ব দেয় না। অপরদিকে Inline-block
							যে কোন Element এর margin and padding কে গুরুত্ব দেয়।
						</p>
					</article>
				</div>
			</div>
		</section>
	);
};

export default Blog;
