import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import "../Main/border.css";
import { ThemeProvider } from "../Contexts/ThemeContext";
import { Button, Card, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Eye } from "react-bootstrap-icons";

const MyCard = ({ book, onImgClick, isSelected, selectedBookId }) => {
	const { theme } = useContext(ThemeProvider);

	const bordoRosso = isSelected && "selected";
	const borderClasses = theme === "dark" ? "border-success" : "border-warning";
	const cardBgClasses =
		theme === "dark" ? "bg-body-tertiary" : "bg-success-subtle";

	const handleClickImg = () => {
		if (isSelected) {
			onImgClick(null);
		} else {
			onImgClick(selectedBookId);
		}
	};

	return (
		<Col xs lg="3" key={nanoid()} className="my-4 mx-2">
			<Card className={`h-100 ${borderClasses}`}>
				<Card.Img
					variant="top"
					src={book.img}
					className={`${bordoRosso} myImg`}
					onClick={handleClickImg}
				/>
				<Card.Body className={cardBgClasses}>
					<Card.Subtitle>{book.title}</Card.Subtitle>
					<Card.Text className="d-flex justify-content-center">
						<strong>Price:</strong>
						<span className="text-primary"> € {book.price}</span>
						<Button className="btn-warning btn-sm m-2">
							<Link to={`/book/${selectedBookId}`}>
								<Eye size={20} />
								<Badge bg="warning" className="badge text-primary">
									Details
								</Badge>
							</Link>
						</Button>
					</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default MyCard;
