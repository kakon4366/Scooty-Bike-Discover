import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import ContactUs from "./Components/ContactUs/ContactUs";
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound404 from "./Components/NotFound404/NotFound404";
import Review from "./Components/Review/Review";

function App() {
	return (
		<div>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/home" element={<Home />}></Route>
				<Route path="/review" element={<Review />}></Route>
				<Route path="/dashboard" element={<Dashboard />}></Route>
				<Route path="/blog" element={<Blog />}></Route>
				<Route path="/contact-us" element={<ContactUs />}></Route>
				<Route path="*" element={<NotFound404 />}></Route>
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
