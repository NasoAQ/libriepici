/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import { React, useContext } from "react";
import { Navbar, Nav, Col, Button } from "react-bootstrap";
import { nanoid } from "nanoid";
import { ThemeProvider } from "../Contexts/ThemeContext";
import { PostProvider } from "../Contexts/provaContext";
import Container from "react-bootstrap/Container";

const MyNav = ({ links }) => {
	const { theme, toggleTheme } = useContext(ThemeProvider);
	const { searchText, setSearchText } = useContext(PostProvider);

	const handleSearchChange = e => {
		const searchText = e.target.value;
		setSearchText(searchText);
	};

	const navbarClasses = `navbar navbar-expand-lg ${
		theme === "dark" ? "bg-dark" : "bg-warning"
	}`;
	const buttonClasses = `btn-sm ${
		theme === "dark" ? "btn-warning" : "btn-dark"
	}`;

	const dataBsTheme = theme === "dark" ? "dark" : "warning";

	return (
		<Navbar expand="lg" className={navbarClasses} data-bs-theme={dataBsTheme}>
			<Container>
				<Navbar.Brand href="/">LibriEpici</Navbar.Brand>
				<Col className="col-6">
					<input
						type="text"
						placeholder="Search by title..."
						//value={searchText}
						onChange={handleSearchChange}
						className="form-control my-3 text-center"
					/>
				</Col>
				<Button onClick={toggleTheme} className={`mx-2 ${buttonClasses}`}>
					Theme
				</Button>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						{links.map(link => {
							return (
								<Nav.Link key={nanoid()} href={link.href}>
									{link.name}
								</Nav.Link>
							);
						})}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default MyNav;
