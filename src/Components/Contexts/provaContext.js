import React, { createContext, useState, useEffect } from "react";
import Pippo from "../../data/booksCategory/romance.json";

export const PostProvider = createContext();

const MyContext = ({ children }) => {
	const [booksOriginal, setBooksOriginal] = useState(Pippo);
	const [libriFiltrati, setLibriFiltrati] = useState(Pippo);
	const [searchText, setSearchText] = useState("");

	useEffect(() => {
		const filteredBooks = booksOriginal.filter(book =>
			book.title.toLowerCase().includes(searchText.toLowerCase())
		);
		setLibriFiltrati(filteredBooks);
	}, [searchText]);

	return (
		<PostProvider.Provider value={{ searchText, libriFiltrati, setSearchText }}>
			{children}
		</PostProvider.Provider>
	);
};

export default MyContext;
