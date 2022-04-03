import React from "react";

const Cards = (props) => {
	return (
		<div className="row row-cols-1 row-cols-md-4 g-4 pb-3">
			<div className="col d-flex">
				<div className="card h-100">
					<img
						src="https://loremflickr.com/500/325/dog"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title d-flex justify-content-center">
							Card title
						</h5>
						<p className="card-text d-flex justify-content-center">
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This content
							is a little bit longer.
						</p>
					</div>
					<div className="card-footer d-flex justify-content-center">
						<small className="text-muted">
							<button type="button" className="btn btn-primary">
								Find Out More!
							</button>
						</small>
					</div>
				</div>
			</div>
			<div className="col d-flex ">
				<div className="card h-100 ">
					<img
						src="https://loremflickr.com/500/325/dog"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title d-flex justify-content-center">
							Card title
						</h5>
						<p className="card-text d-flex justify-content-center">
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This content
							is a little bit longer.
						</p>
					</div>
					<div className="card-footer d-flex justify-content-center">
						<small className="text-muted">
							<button type="button" className="btn btn-primary">
								Find Out More!
							</button>
						</small>
					</div>
				</div>
			</div>
			<div className="col d-flex ">
				<div className="card h-100 ">
					<img
						src="https://loremflickr.com/500/325/kitten"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title d-flex justify-content-center">
							Card title
						</h5>
						<p className="card-text d-flex justify-content-center">
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This content
							is a little bit longer.
						</p>
					</div>
					<div className="card-footer d-flex justify-content-center">
						<small className="text-muted">
							<button type="button" className="btn btn-primary">
								Find Out More!
							</button>
						</small>
					</div>
				</div>
			</div>
			<div className="col d-flex ">
				<div className="card h-100 ">
					<img
						src="https://loremflickr.com/500/325/girl"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title d-flex justify-content-center">
							Card title
						</h5>
						<p className="card-text d-flex justify-content-center">
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This content
							is a little bit longer.
						</p>
					</div>
					<div className="card-footer d-flex justify-content-center">
						<small className="text-muted">
							<button type="button" className="btn btn-primary">
								Find Out More!
							</button>
						</small>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
