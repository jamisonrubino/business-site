import { Link } from "react-router-dom";
import "bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import linkIcon from "../link_icon.png";
import cors from "cors";
import inNewTabIcon from "../in_new_tab_icon.svg";
// import GoogleAds from 'googleads';

export default function Services() {
	const [show, setShow] = useState(false);
	// const [serviceImages, setServiceImages] = useState({}); const
	// [selectedService, setSelectedService] = useState(); function importAll(r) {
	//   let images = {};         r.keys().forEach((item, index) => {
	// images[item.replace('./', '')] = r(item); });         console.log('images',
	// images)     return images }
	const [rating, setRating] = useState();

	const handleClose = () => {
		setShow(false);
		// setServiceImages({});
	};
	const handleShow = (selectedService) => {
		setShow(true);
		// const images = importAll(require.context('../assets/'+selectedService+'/',
		// false, /\.(png|jpe?g)$/)); setServiceImages(images);
	};

	const ratingFetch = async () => {
		// scrape https://www.taskrabbit.com/profile/jamison-r--5?ref=TRYBX6ON&utm_medium=tryprofile&invitation_source=url&utm_source=trycode and extract an html element and set rating the html element value
		try {
			const response = await fetch(
				"https://www.taskrabbit.com/profile/jamison-r--5",
				{
					method: "GET",
					headers: {
						"Content-Type": "text/html",
						"Access-Control-Allow-Origin": "*",
					},
				}
			);
			const data = await response.text();
			const parser = new DOMParser();
			const doc = parser.parseFromString(data, "text/html");
			const ratingElement = doc.querySelector(".sc-dAbbOL.fSiGRF span");
			setRating(ratingElement.textContent);
			console.log(ratingElement.textContent, doc, data, response, rating);
		} catch (e) {
			console.log(e);
		}
		//     fetch('', { method: "GET", // *GET, POST, PUT, DELETE, etc.
		//     headers: {
		//       "Content-Type": "text/html",
		//       "Access-Control-Allow-Origin": '*'
		//     } })
		//         .then(function(response) {
		//             // When the page is loaded convert it to text
		//             console.log(response.text());

		//             return response.text()
		//         })
		//         .then(function(html) {
		//             var parser = new DOMParser();
		//             var doc = parser.parseFromString(html, "text/html");
		//             console.log(doc);
		//             rating = doc.querySelector('.sc-dAbbOL.fSiGRF span').innerHTML;
		//             setRating(rating);
		//             console.log(doc, rating);
		//         })
		//         .catch(function(err) {
		//             console.log('Failed to fetch page: ', err);
		//         });
	};

	// // ratingFetch.use(cors());
	ratingFetch();

	console.log("Services");
	return (
		<div>
			{/* <GoogleAds /> */}
			<div className="row m-0 px-1">
				<div className="col-12 mx-0 px-2">
					<div className="selected-service alert alert-info mx-4 mt-4 mb-0 py-0">
						<p className="py-2 m-0 h5">10% OFF IN FEBRUARY</p>
					</div>
				</div>
			</div>
			<h1
				className="mt-3 mb-4 pb-2"
				style={{
					display: "none",
				}}
			>
				Services
			</h1>
			<div className="row mx-4 mt-4 pt-3">
				<div className="col-sm-12 col-md-6 col-lg-4 mb-4 pb-3">
					<div className="card bg-light text-dark border shadow-sm">
						<div className="card-body p-4" style={{ textAlign: "left" }}>
							<div className="row d-flex justify-content-left flex-wrap">
								<div className="col-md-6 col-sm-6 col-6">
									<h4 className="card-title pb-1 mb-0">Moving Help</h4>
									<h6
										className="text-muted mb-0 pb-1"
										style={{
											fontSize: "14px",
										}}
									>
										LOCAL &bull; SEATTLE, WA
									</h6>
									<h6
										className="text-muted mb-3"
										style={{
											fontSize: "14px",
										}}
									>
										<a
											href="https://www.taskrabbit.com/profile/jamison-r--5?ref=TRYBX6ON&utm_medium=tryprofile&invitation_source=url&utm_source=trycode"
											alt=""
											style={{ textDecoration: "none" }}
											target="_blank"
										>
											4.7 &#9733;&#9733;&#9733;&#9733;&#9733;&nbsp;
											<svg
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="#76a4d9"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M20 14a1 1 0 0 0-1 1v3.077c0 .459-.022.57-.082.684a.363.363 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.571-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684L4.999 5.5a.5.5 0 0 1 .5-.5l3.5.005a1 1 0 1 0 .002-2L5.501 3a2.5 2.5 0 0 0-2.502 2.5v12.577c0 .76.083 1.185.32 1.627.223.419.558.753.977.977.442.237.866.319 1.627.319h12.154c.76 0 1.185-.082 1.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1 1 0 0 0-1-1zm-2-9.055v-.291l-.39.09A10 10 0 0 1 15.36 5H14a1 1 0 1 1 0-2l5.5.003a1.5 1.5 0 0 1 1.5 1.5V10a1 1 0 1 1-2 0V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10 10 0 0 1-1.411 1.775l-5.933 5.932a1 1 0 0 1-1.414-1.414l5.944-5.944A10 10 0 0 1 18 4.945z"
													fill="currentColor"
													style={{ fill: "#76a4d9" }}
												/>
											</svg>
										</a>
									</h6>
								</div>
								<div className="col-md-6 col-sm-6 col-6">
									<ul style={{ padding: 0, margin: 0 }}>
										<li
											className="list-group-item bg-light text-dark"
											style={{ textAlign: "right" }}
										>
											<p className="h4">$55/hr</p>
											<p className="h6 pt-0">
												$45/hr
												<font
													style={{
														fontWeight: 300,
													}}
												>
													&nbsp;after first hour&nbsp;
												</font>
											</p>
										</li>
									</ul>
								</div>
								<div
									className="col mt-2"
									style={{ borderTop: "1px solid lightgray" }}
								>
									<p className="px-0 py-3" style={{ textAlign: "left de" }}>
										Professional moving help with floor dollies, blankets, and
										moving straps to get your belongings from A to B safely.
									</p>
								</div>

								<div className="d-flex justify-content-between flex-wrap">
									<Link
										to="../Contact"
										className="btn btn-secondary col-5"
										state={{
											service: "Moving Help",
										}}
									>
										Get a Quote
									</Link>
									<Link
										to="https://jamison-rubino.bookafy.com/category/moving-help-1803b3?locale=en"
										className="btn btn-dark col-5"
										state={{
											service: "Moving Help",
										}}
										target="_blank"
									>
										Book Now
									</Link>
								</div>
								{/* <ul className="list-group list-group-flush p-4"> */}
								{/* <li className="list-group-item bg-light text-dark">
                                <p className="h4">$55/hr</p>
                                <p className="h6 pt-0">$45/hr
                                    <font
                                        style={{
                                        fontWeight: 300
                                    }}>&nbsp;after first hour&nbsp;</font>
                                </p>
                            </li> */}
								{/* <li className="list-group-item bg-light text-dark">
                                <Link
                                    to="../Contact"
                                    className="btn btn-secondary"
                                    state={{
                                    service: "Moving Help"
                                }}>Get a Quote</Link>
                            </li> */}
								{/* <li className="list-group-item bg-light text-success pb-3"> */}
								{/* https://book.housecallpro.com/book/Jamison-Rubino/991a7bc836674660a42c3cfabd4c64e6?v2=true */}
								{/* <Link
                                    to="https://jamison-rubino.bookafy.com/category/moving-help-1803b3?locale=en"
                                    className="btn btn-dark"
                                    state={{
                                    service: "Moving Help"
                                }}
                                    target="_blank">Book Now</Link>
                            </li> */}
								{/* </ul> */}
							</div>
						</div>
					</div>
				</div>

				<div className="col-sm-12 col-md-6 col-lg-4 mb-4 pb-3">
					<div className="card bg-light text-dark border shadow-sm">
						<div className="card-body p-4" style={{ textAlign: "left" }}>
							<div className="row d-flex justify-content-left flex-wrap">
								
								<div className="col-md-6 col-sm-6 col-6">
									<Link
										to="/FurnitureAssembly"
										style={{
											textDecoration: "none",
										}}
										className="text-dark"
									>
										<h4 className="card-title pb-1 mb-0">
											Furniture Assembly&nbsp;
											<svg
												width="18"
												height="18"
												fill="#76a4d9"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M20 14a1 1 0 0 0-1 1v3.077c0 .459-.022.57-.082.684a.363.363 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.571-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684L4.999 5.5a.5.5 0 0 1 .5-.5l3.5.005a1 1 0 1 0 .002-2L5.501 3a2.5 2.5 0 0 0-2.502 2.5v12.577c0 .76.083 1.185.32 1.627.223.419.558.753.977.977.442.237.866.319 1.627.319h12.154c.76 0 1.185-.082 1.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1 1 0 0 0-1-1zm-2-9.055v-.291l-.39.09A10 10 0 0 1 15.36 5H14a1 1 0 1 1 0-2l5.5.003a1.5 1.5 0 0 1 1.5 1.5V10a1 1 0 1 1-2 0V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10 10 0 0 1-1.411 1.775l-5.933 5.932a1 1 0 0 1-1.414-1.414l5.944-5.944A10 10 0 0 1 18 4.945z"
													fill="currentColor"
													style={{ fill: "#212529" }}
												/>
											</svg>
										</h4>
									</Link>
									<h6
										className="text-muted mb-0 pb-1"
										style={{
											fontSize: "14px",
										}}
									>
										LOCAL &bull; SEATTLE, WA
									</h6>
									<h6
										className="text-muted mb-3"
										style={{
											fontSize: "14px",
										}}
									>
										<a
											href="https://www.taskrabbit.com/profile/jamison-r--5?ref=TRYBX6ON&utm_medium=tryprofile&invitation_source=url&utm_source=trycode"
											style={{ textDecoration: "none" }}
											alt=""
											target="_blank"
										>
											{rating}4.9 &#9733;&#9733;&#9733;&#9733;&#9733;&nbsp;
											<svg
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="#76a4d9"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M20 14a1 1 0 0 0-1 1v3.077c0 .459-.022.57-.082.684a.363.363 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.571-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684L4.999 5.5a.5.5 0 0 1 .5-.5l3.5.005a1 1 0 1 0 .002-2L5.501 3a2.5 2.5 0 0 0-2.502 2.5v12.577c0 .76.083 1.185.32 1.627.223.419.558.753.977.977.442.237.866.319 1.627.319h12.154c.76 0 1.185-.082 1.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1 1 0 0 0-1-1zm-2-9.055v-.291l-.39.09A10 10 0 0 1 15.36 5H14a1 1 0 1 1 0-2l5.5.003a1.5 1.5 0 0 1 1.5 1.5V10a1 1 0 1 1-2 0V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10 10 0 0 1-1.411 1.775l-5.933 5.932a1 1 0 0 1-1.414-1.414l5.944-5.944A10 10 0 0 1 18 4.945z"
													fill="currentColor"
													style={{ fill: "#76a4d9" }}
												/>
											</svg>
										</a>
									</h6>
								</div>
								<div className="col-md-6 col-sm-6 col-6">
									<ul style={{ padding: 0, margin: 0 }}>
										<li
											className="list-group-item bg-light text-dark"
											style={{ textAlign: "right" }}
										>
											<p className="h4">$55/hr</p>
											<p className="h6 pt-0">
												$45/hr
												<font
													style={{
														fontWeight: 300,
													}}
												>
													&nbsp;after first hour&nbsp;
												</font>
											</p>
										</li>
									</ul>
								</div>
								<div
									className="col mt-2"
									style={{ borderTop: "1px solid lightgray" }}
								>
									<p className="px-0 py-3" style={{ textAlign: "left de" }}>
										Professional assembly and disassembly with a comprehensive
										tool kit to help you perfect your home or office.
									</p>
								</div>

								<div className="d-flex justify-content-between flex-wrap">
									<Link
										to="../Contact"
										className="btn btn-secondary col-5"
										state={{
											service: "Moving Help",
										}}
									>
										Get a Quote
									</Link>
									<Link
										to="https://jamison-rubino.bookafy.com/category/moving-help-1803b3?locale=en"
										className="btn btn-dark col-5"
										state={{
											service: "Moving Help",
										}}
										target="_blank"
									>
										Book Now
									</Link>
								</div>
								{/* <ul className="list-group list-group-flush p-4"> */}
								{/* <li className="list-group-item bg-light text-dark">
                                <p className="h4">$55/hr</p>
                                <p className="h6 pt-0">$45/hr
                                    <font
                                        style={{
                                        fontWeight: 300
                                    }}>&nbsp;after first hour&nbsp;</font>
                                </p>
                            </li> */}
								{/* <li className="list-group-item bg-light text-dark">
                                <Link
                                    to="../Contact"
                                    className="btn btn-secondary"
                                    state={{
                                    service: "Moving Help"
                                }}>Get a Quote</Link>
                            </li> */}
								{/* <li className="list-group-item bg-light text-success pb-3"> */}
								{/* https://book.housecallpro.com/book/Jamison-Rubino/991a7bc836674660a42c3cfabd4c64e6?v2=true */}
								{/* <Link
                                    to="https://jamison-rubino.bookafy.com/category/moving-help-1803b3?locale=en"
                                    className="btn btn-dark"
                                    state={{
                                    service: "Moving Help"
                                }}
                                    target="_blank">Book Now</Link>
                            </li> */}
								{/* </ul> */}
							</div>
						</div>
					</div>
				</div>


				<div className="col-sm-12 col-md-6 col-lg-4 mb-4 pb-3">
					<div className="card bg-light text-dark border shadow-sm">
						<div className="card-body p-4" style={{ textAlign: "left" }}>
							<div className="row d-flex justify-content-left flex-wrap">
								
								<div className="col-md-6 col-sm-6 col-6">
									<Link
										to="/FurnitureAssembly"
										style={{
											textDecoration: "none",
										}}
										className="text-dark"
									>
										<h4 className="card-title pb-1 mb-0">
											Furniture Assembly&nbsp;
											<svg
												width="18"
												height="18"
												fill="#76a4d9"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M20 14a1 1 0 0 0-1 1v3.077c0 .459-.022.57-.082.684a.363.363 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.571-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684L4.999 5.5a.5.5 0 0 1 .5-.5l3.5.005a1 1 0 1 0 .002-2L5.501 3a2.5 2.5 0 0 0-2.502 2.5v12.577c0 .76.083 1.185.32 1.627.223.419.558.753.977.977.442.237.866.319 1.627.319h12.154c.76 0 1.185-.082 1.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1 1 0 0 0-1-1zm-2-9.055v-.291l-.39.09A10 10 0 0 1 15.36 5H14a1 1 0 1 1 0-2l5.5.003a1.5 1.5 0 0 1 1.5 1.5V10a1 1 0 1 1-2 0V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10 10 0 0 1-1.411 1.775l-5.933 5.932a1 1 0 0 1-1.414-1.414l5.944-5.944A10 10 0 0 1 18 4.945z"
													fill="currentColor"
													style={{ fill: "#212529" }}
												/>
											</svg>
										</h4>
									</Link>
									<h6
										className="text-muted mb-0 pb-1"
										style={{
											fontSize: "14px",
										}}
									>
										LOCAL &bull; SEATTLE, WA
									</h6>
									<h6
										className="text-muted mb-3"
										style={{
											fontSize: "14px",
										}}
									>
										<a
											href="https://www.taskrabbit.com/profile/jamison-r--5?ref=TRYBX6ON&utm_medium=tryprofile&invitation_source=url&utm_source=trycode"
											style={{ textDecoration: "none" }}
											alt=""
											target="_blank"
										>
											{rating}4.9 &#9733;&#9733;&#9733;&#9733;&#9733;&nbsp;
											<svg
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="#76a4d9"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M20 14a1 1 0 0 0-1 1v3.077c0 .459-.022.57-.082.684a.363.363 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.571-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684L4.999 5.5a.5.5 0 0 1 .5-.5l3.5.005a1 1 0 1 0 .002-2L5.501 3a2.5 2.5 0 0 0-2.502 2.5v12.577c0 .76.083 1.185.32 1.627.223.419.558.753.977.977.442.237.866.319 1.627.319h12.154c.76 0 1.185-.082 1.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1 1 0 0 0-1-1zm-2-9.055v-.291l-.39.09A10 10 0 0 1 15.36 5H14a1 1 0 1 1 0-2l5.5.003a1.5 1.5 0 0 1 1.5 1.5V10a1 1 0 1 1-2 0V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10 10 0 0 1-1.411 1.775l-5.933 5.932a1 1 0 0 1-1.414-1.414l5.944-5.944A10 10 0 0 1 18 4.945z"
													fill="currentColor"
													style={{ fill: "#76a4d9" }}
												/>
											</svg>
										</a>
									</h6>
								</div>
								<div className="col-md-6 col-sm-6 col-6">
									<ul style={{ padding: 0, margin: 0 }}>
										<li
											className="list-group-item bg-light text-dark"
											style={{ textAlign: "right" }}
										>
											<p className="h4">$55/hr</p>
											<p className="h6 pt-0">
												$45/hr
												<font
													style={{
														fontWeight: 300,
													}}
												>
													&nbsp;after first hour&nbsp;
												</font>
											</p>
										</li>
									</ul>
								</div>
								<div
									className="col mt-2"
									style={{ borderTop: "1px solid lightgray" }}
								>
									<p className="px-0 py-3" style={{ textAlign: "left de" }}>
										Professional assembly and disassembly with a comprehensive
										tool kit to help you perfect your home or office.
									</p>
								</div>

								<div className="d-flex justify-content-between flex-wrap">
									<Link
										to="../Contact"
										className="btn btn-secondary col-5"
										state={{
											service: "Moving Help",
										}}
									>
										Get a Quote
									</Link>
									<Link
										to="https://jamison-rubino.bookafy.com/category/moving-help-1803b3?locale=en"
										className="btn btn-dark col-5"
										state={{
											service: "Moving Help",
										}}
										target="_blank"
									>
										Book Now
									</Link>
								</div>
								{/* <ul className="list-group list-group-flush p-4"> */}
								{/* <li className="list-group-item bg-light text-dark">
                                <p className="h4">$55/hr</p>
                                <p className="h6 pt-0">$45/hr
                                    <font
                                        style={{
                                        fontWeight: 300
                                    }}>&nbsp;after first hour&nbsp;</font>
                                </p>
                            </li> */}
								{/* <li className="list-group-item bg-light text-dark">
                                <Link
                                    to="../Contact"
                                    className="btn btn-secondary"
                                    state={{
                                    service: "Moving Help"
                                }}>Get a Quote</Link>
                            </li> */}
								{/* <li className="list-group-item bg-light text-success pb-3"> */}
								{/* https://book.housecallpro.com/book/Jamison-Rubino/991a7bc836674660a42c3cfabd4c64e6?v2=true */}
								{/* <Link
                                    to="https://jamison-rubino.bookafy.com/category/moving-help-1803b3?locale=en"
                                    className="btn btn-dark"
                                    state={{
                                    service: "Moving Help"
                                }}
                                    target="_blank">Book Now</Link>
                            </li> */}
								{/* </ul> */}
							</div>
						</div>
					</div>
				</div>




				{/* <div className="col-sm-6 col-md-4 col-lg-3 mb-4 pb-3">
					<div className="card bg-light text-dark border shadow-sm">
						<div className="card-body p-4">
							<Link
								to="/FurnitureAssembly"
								style={{
									textDecoration: "none",
								}}
								className="text-dark"
							>
								<h4 className="card-title pb-1 mb-0">
									Furniture assembly&nbsp;
									<svg
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="#76a4d9"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M20 14a1 1 0 0 0-1 1v3.077c0 .459-.022.57-.082.684a.363.363 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.571-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684L4.999 5.5a.5.5 0 0 1 .5-.5l3.5.005a1 1 0 1 0 .002-2L5.501 3a2.5 2.5 0 0 0-2.502 2.5v12.577c0 .76.083 1.185.32 1.627.223.419.558.753.977.977.442.237.866.319 1.627.319h12.154c.76 0 1.185-.082 1.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1 1 0 0 0-1-1zm-2-9.055v-.291l-.39.09A10 10 0 0 1 15.36 5H14a1 1 0 1 1 0-2l5.5.003a1.5 1.5 0 0 1 1.5 1.5V10a1 1 0 1 1-2 0V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10 10 0 0 1-1.411 1.775l-5.933 5.932a1 1 0 0 1-1.414-1.414l5.944-5.944A10 10 0 0 1 18 4.945z"
											fill="currentColor"
											style={{ fill: "#212529" }}
										/>
									</svg>
								</h4>
							</Link>
							<h6
								className="text-muted mb-0 pb-1"
								style={{
									fontSize: "14px",
								}}
							>
								LOCAL &bull; SEATTLE, WA
							</h6>
							<h6
								className="text-muted mb-3"
								style={{
									fontSize: "14px",
								}}
							>
								<a
									href="https://www.taskrabbit.com/profile/jamison-r--5?ref=TRYBX6ON&utm_medium=tryprofile&invitation_source=url&utm_source=trycode"
									style={{ textDecoration: "none" }}
									alt=""
									target="_blank"
								>
									{rating}4.9 &#9733;&#9733;&#9733;&#9733;&#9733;&nbsp;
									<svg
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="#76a4d9"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M20 14a1 1 0 0 0-1 1v3.077c0 .459-.022.57-.082.684a.363.363 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.571-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684L4.999 5.5a.5.5 0 0 1 .5-.5l3.5.005a1 1 0 1 0 .002-2L5.501 3a2.5 2.5 0 0 0-2.502 2.5v12.577c0 .76.083 1.185.32 1.627.223.419.558.753.977.977.442.237.866.319 1.627.319h12.154c.76 0 1.185-.082 1.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1 1 0 0 0-1-1zm-2-9.055v-.291l-.39.09A10 10 0 0 1 15.36 5H14a1 1 0 1 1 0-2l5.5.003a1.5 1.5 0 0 1 1.5 1.5V10a1 1 0 1 1-2 0V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10 10 0 0 1-1.411 1.775l-5.933 5.932a1 1 0 0 1-1.414-1.414l5.944-5.944A10 10 0 0 1 18 4.945z"
											fill="currentColor"
											style={{ fill: "#76a4d9" }}
										/>
									</svg>
								</a>
							</h6>
							<p className="card-text">
								Professional assembly and disassembly with a comprehensive tool
								kit to help you perfect your home or office.
							</p>
						</div>
						<ul className="list-group list-group-flush p-4">
							<li className="list-group-item bg-light text-dark">
								<p className="h4">$60/hr</p>
								<p className="h6 pt-0">
									$50/hr
									<font
										style={{
											fontWeight: 300,
										}}
									>
										&nbsp;after first hour&nbsp;
									</font>
								</p>
							</li>
							<li className="list-group-item bg-light text-success">
								<Link
									to="../Contact"
									className="btn btn-secondary"
									state={{
										service: "Furniture Assembly",
									}}
								>
									Get a Quote
								</Link>
							</li>
							<li className="list-group-item bg-light text-success pb-3">
								{/* https://book.housecallpro.com/book/Jamison-Rubino/991a7bc836674660a42c3cfabd4c64e6?v2=true */}
								{/* <Link
									to="https://jamison-rubino.bookafy.com/category/furniture-assembly-8d3332?locale=en"
									className="btn btn-dark"
									target="_blank"
								>
									Book Now
								</Link>
							</li>
						</ul>
					</div> 
				</div> */}

				<div className="col-sm-12 col-md-6 col-lg-4 mb-4 pb-3">
					<div className="card bg-dark text-light border shadow-sm">
						{/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
						<div className="card-body p-4">
							<h4 className="card-title pb-1 mb-0">Web Development</h4>
							<h6
								className="text-light mb-0 pb-1"
								style={{
									fontSize: "14px",
								}}
							>
								ONLINE
							</h6>
							<h6
								className="text-muted mb-3"
								style={{
									fontSize: "14px",
								}}
							>
								<a
									href="https://upwork.com/freelancers/~0180302a9d35e1993e"
									target="_blank"
									style={{ textDecoration: "none", lineHeight: "18px" }}
									alt=""
								>
									<div
										style={{
											width: "24px",
											height: "24px",
											borderRadius: "50%",
											border: "2px solid #76a4d9",
											display: "inline-block",
										}}
									>
										<div className="air3-icon md">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												aria-hidden="true"
												viewBox="0 0 24 24"
												role="img"
											>
												<path
													fill="#76a4d9"
													fill-rule="evenodd"
													d="M18.37 19.002H5.63v-1.867h12.74v1.867zm.02-3.736H5.608L3 8.314l4.992 1.664L12 5l4.008 4.978L21 8.314l-2.61 6.952z"
													clip-rule="evenodd"
												></path>
											</svg>
										</div>
									</div>
									&nbsp;&nbsp;100% Job Success&nbsp;
									<svg
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="#76a4d9"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M20 14a1 1 0 0 0-1 1v3.077c0 .459-.022.57-.082.684a.363.363 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.571-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684L4.999 5.5a.5.5 0 0 1 .5-.5l3.5.005a1 1 0 1 0 .002-2L5.501 3a2.5 2.5 0 0 0-2.502 2.5v12.577c0 .76.083 1.185.32 1.627.223.419.558.753.977.977.442.237.866.319 1.627.319h12.154c.76 0 1.185-.082 1.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1 1 0 0 0-1-1zm-2-9.055v-.291l-.39.09A10 10 0 0 1 15.36 5H14a1 1 0 1 1 0-2l5.5.003a1.5 1.5 0 0 1 1.5 1.5V10a1 1 0 1 1-2 0V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10 10 0 0 1-1.411 1.775l-5.933 5.932a1 1 0 0 1-1.414-1.414l5.944-5.944A10 10 0 0 1 18 4.945z"
											fill="currentColor"
											style={{ fill: "#76a4d9" }}
										/>
									</svg>
								</a>
							</h6>

							<p className="card-text">
								Build or improve your personal or business website with website
								builders or code.
							</p>
							<p className="card-text">
								&bull;&nbsp;WordPress, Bubble.io, Adalo, Shopify
								<br />
								&bull;&nbsp;Email campaign development
								<br />
								&bull;&nbsp;Full stack Node apps
							</p>
						</div>
						<ul
							className="list-group list-group-flush p-4"
							style={{
								borderTopColor: "rgba(255,255,255,0.26)",
							}}
						>
							<li className="list-group-item bg-dark text-light">
								<p className="h4">$42/hr</p>
							</li>
							<li className="list-group-item bg-dark text-light">
								<Link
									to="../Contact"
									className="btn btn-secondary"
									state={{
										service: "Web Development",
									}}
								>
									Get a Quote
								</Link>
							</li>
							<li className="list-group-item bg-dark text-light pb-3">
								<Link
									to="https://jamison-rubino.bookafy.com/service/web-development-meeting?locale=en"
									className="btn btn-light"
									target="_blank"
								>
									Book Now
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3 mb-4 pb-3">
					<div className="card bg-dark text-light border shadow-sm">
						<div className="card-body p-4">
							{/* onClick={()=>{setSelectedService('Search Engine Optimization'); handleShow() }}*/}
							<h4 className="card-title pb-1 mb-0">
								Search Engine Optimization
							</h4>
							<h6
								className="text-light mb-3"
								style={{
									fontSize: "14px",
								}}
							>
								ONLINE
							</h6>
							<p className="card-text">
								Improve your website's search engine ranking with a few basic
								tips and practices.
							</p>
						</div>
						<ul
							className="list-group list-group-flush p-4"
							style={{
								borderTopColor: "rgba(255,255,255,0.26)",
							}}
						>
							<li className="list-group-item bg-dark text-light">
								<p className="h4">$42/hr</p>
							</li>
							<li className="list-group-item bg-dark text-light">
								<Link
									to="../Contact"
									className="btn btn-secondary"
									state={{
										service: "Search Engine Optimization",
									}}
								>
									Get a Quote
								</Link>
							</li>
							<li className="list-group-item bg-dark text-light pb-3">
								<Link
									to="https://jamison-rubino.bookafy.com/service/seo-meeting?locale=en"
									className="btn btn-light"
									target="_blank"
								>
									Book Now
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3 mb-4 pb-3">
					<div className="card text-dark">
						<div className="card-body p-4">
							<h4 className="card-title pb-1">Electrical Installation</h4>
							{/* <p className="card-text">Light fixture and electrical outlet installations. <strong>First 20 bookings discounted 20%</strong>.</p> */}
							<p className="card-text">Coming soon!</p>
							<Link
								to="../Contact"
								className="btn btn-primary disabled"
								state={{
									service: "Electrical Installation",
								}}
							>
								Get a Quote
							</Link>
						</div>
						{/* <ul className="list-group list-group-flush p-4">
                                <li className="list-group-item bg-light text-success"><p className="h4"><s className="text-dark">$52/hr</s> <strong>$42/hr</strong></p><p className="h6 pt-0"><s className="text-dark">$42/hr</s> <strong>$34/hr</strong> <font style={{fontWeight: 300}}>after first hour</font></p></li>
                                <li className="list-group-item bg-light text-success">
                                <Link to="../Contact" className="btn btn-secondary disabled"  state={{service: "Electrical Installation"}}>Get a Quote</Link>
                                </li>
                                <li className="list-group-item bg-light text-success pb-3">
                                <Link to="https://jamison-rubino.bookafy.com/category/moving-help-1803b3?locale=en" className="btn btn-dark disabled"  state={{service: "Moving Help"}} target="_blank">Book Now</Link>
                                </li>
                        </ul> */}
					</div>
				</div>

				<div className="col-sm-6 col-md-4 col-lg-3 mb-4 pb-3">
					<div className="card">
						<div className="card-body p-4">
							<h4 className="card-title pb-1">Plumbing</h4>
							<p className="card-text">Coming soon!</p>
							<Link
								to="../Contact"
								className="btn btn-primary disabled"
								state={{
									service: "Plumbing",
								}}
							>
								Get a Quote
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/* Service object: {title: "", body: "", images: [], } */}
			{/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{service.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {Object.keys(serviceImages).map((image, i)=>(<img src={.src} alt={image.alt} />))}
                    {service.body}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal> */}
			{/* <div className="row align-bottom m-0 p-0">
                <div className="col">
                    <p
                        style={{
                        fontSize: "8px",
                        color: "#888"
                    }}>Link Icon by
                        <a href="https://www.danilodemarco.com/">https://www.danilodemarco.com/</a>
                    </p>
                </div>
            </div> */}
		</div>
	);
}
