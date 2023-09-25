import React from "react";
import Home from "./Pages/Home";
import Errorpage from "./Pages/Errorpage";
import BookDetails from "./Pages/BookDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />

				<Route path="/book/:bookId" element={<BookDetails />} />
				<Route path="*" element={<Errorpage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
