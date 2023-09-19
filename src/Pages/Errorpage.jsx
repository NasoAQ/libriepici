import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HouseFill } from "react-bootstrap-icons";

const Errorpage = () => {
	return (
		<div>
			<h1>OOOOPS LA PAGINA NON ESISTE!</h1>
			<Button className="btn-warning">
				<Link to="/">
					<HouseFill size={50} />
				</Link>
			</Button>
		</div>
	);
};

export default Errorpage;
