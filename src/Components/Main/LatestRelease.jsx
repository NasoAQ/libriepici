import { React, useContext, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { nanoid } from "nanoid";
import { ThemeProvider } from "../Contexts/ThemeContext";
import { PostProvider } from "../Contexts/provaContext";
import MyCard from "./myCard";
import CommentArea from "../Recensioni/CommentArea";

const LatestRelease = () => {
	const { libriFiltrati } = useContext(PostProvider);
	const { theme } = useContext(ThemeProvider);

	const [selectedBook, setSelectedBook] = useState(null);

	const containerClasses = `${theme === "dark" ? "bg-dark" : ""}`;

	const commentAreaRef = useRef(null);

	const handleClickImg = bookId => {
		setSelectedBook(bookId);

		commentAreaRef.current.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
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
								selectedBookId={book.asin}
							/>
						))}
					</Col>
					<Col xs lg="3" ref={commentAreaRef}>
						<CommentArea selectedBookId={selectedBook} />
					</Col>
				</Row>
			)}
		</Container>
	);
};

export default LatestRelease;
