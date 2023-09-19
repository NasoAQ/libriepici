import React, { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyCard from "./myCard";
import { nanoid } from "nanoid";
import { ThemeProvider } from "../Contexts/ThemeContext";
import { PostProvider } from "../Contexts/provaContext";
import CommentArea from "../Recensioni/CommentArea";

const LatestRelease = () => {
	const { libriFiltrati } = useContext(PostProvider);
	const { theme } = useContext(ThemeProvider);

	const [selectedBook, setSelectedBook] = useState(null);

	const containerClasses = `${theme === "dark" ? "bg-dark" : ""}`;

	const handleClickImg = bookId => {
		setSelectedBook(bookId);
	};
	return (
		<Container className={containerClasses}>
			{libriFiltrati.length === 0 ? (
				<p className="text-danger">'No matching books found.</p>
			) : (
				<Row>
					<Col className="d-flex flex-wrap">
						{libriFiltrati.map(book => (
							<MyCard
								key={nanoid()}
								book={book}
								isSelected={book.asin === selectedBook}
								onImgClick={handleClickImg}
								asin={book.asin}
							/>
						))}
					</Col>
					<Col xs lg="3">
						<CommentArea asin={selectedBook} />
					</Col>
				</Row>
			)}
		</Container>
	);
};

export default LatestRelease;
