import { React, useParams } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyDetails = ({ book }) => {
	return (
		<Container className="d-flex justify-content-center flex-column align-items-center h-100">
			<Card className={`col-3 m-3`}>
				<Card.Img variant="top" src={book.img} className={`rounded-start`} />
				<Card.Body>
					<Card.Subtitle>{book.title}</Card.Subtitle>
					<Card.Text>
						<strong>Price:</strong>
						<span className="text-primary"> € {book.price}</span>
						<Card.Text>{book.category}</Card.Text>
						<Card.Text>
							<strong>Plot:</strong>
						</Card.Text>
						<Card.Text>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
							nemo, nam velit distinctio debitis amet minima delectus rerum?
							Quibusdam, iusto.
						</Card.Text>
					</Card.Text>
				</Card.Body>
			</Card>
			<Button className="btn-warning mb-3">
				<Link to="/">HOME</Link>
			</Button>
		</Container>
	);
};

export default MyDetails;
