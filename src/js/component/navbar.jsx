import React from "react";

const NavBar = (props) => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
				<div
					className="container-fluid d-flex justify-content-between "
					style={{ width: "82rem" }}>
					<a className="navbar-brand" href="#">
						Start Bootstrap
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse d-flex flex-row-reverse"
						id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a
									className="nav-link active"
									aria-current="page"
									href="#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Services
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
