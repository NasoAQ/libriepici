import React from "react";
import Pippo from "../data/booksCategory/romance.json";
import ThemeContext from "../Components/Contexts/ThemeContext";
import MyContext from "../Components/Contexts/provaContext";
import MainLayout from "../Layouts/MainLayout";
import MyDetails from "../Components/DetailsCard/MyDetails";
import { useParams } from "react-router-dom";

const BookDetails = () => {
	const { bookId } = useParams();
	console.log(bookId);

	const book = Pippo.find(book => book.asin === bookId);

	return (
		<ThemeContext>
			<MyContext>
				<MainLayout>
					<MyDetails book={book} />
				</MainLayout>
			</MyContext>
		</ThemeContext>
	);
};

export default BookDetails;
