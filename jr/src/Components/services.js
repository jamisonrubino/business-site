import {Link} from 'react-router-dom';
import 'bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react'
import linkIcon from '../link_icon.png';
import cors from 'cors';

export default function Services() {
    const [show,
        setShow] = useState(false);
    // const [serviceImages, setServiceImages] = useState({}); const
    // [selectedService, setSelectedService] = useState(); function importAll(r) {
    //   let images = {};         r.keys().forEach((item, index) => {
    // images[item.replace('./', '')] = r(item); });         console.log('images',
    // images)     return images }
    const [rating, setRating] = useState();


    const handleClose = () => {
        setShow(false);
        // setServiceImages({});
    }
    const handleShow = (selectedService) => {
        setShow(true);
        // const images = importAll(require.context('../assets/'+selectedService+'/',
        // false, /\.(png|jpe?g)$/)); setServiceImages(images);
    }

    
    const ratingFetch = async () => {
        // scrape https://www.taskrabbit.com/profile/jamison-r--5?ref=TRYBX6ON&utm_medium=tryprofile&invitation_source=url&utm_source=trycode and extract an html element and set rating the html element value
        const response = await fetch('https://www.taskrabbit.com/profile/jamison-r--5', { method: "GET", headers: {
            "Content-Type": "text/html",
            "Access-Control-Allow-Origin": '*'
        }});
        const data = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        const ratingElement = doc.querySelector(".sc-dAbbOL.fSiGRF span");
        setRating(ratingElement.textContent);
        console.log(ratingElement.textContent);
        console.log(doc);
        console.log(data);
        console.log(response);
        console.log(rating);
        
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
    
    }

    // // ratingFetch.use(cors());
    ratingFetch();

    console.log("Services");
    return (
        <div>
            <h1
                className="mt-3 mb-4 pb-2"
                style={{
                display: "none"
            }}>Services</h1>
            <div className="row mx-4 mt-4 pt-3">
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4 pb-3">
                    <div className="card bg-light text-dark border shadow-sm">
                        <div className="card-body p-4">
                            <h4 className="card-title pb-1 mb-0">Moving Help</h4>
                            <h6
                                className='text-muted mb-0 pb-1'
                                style={{
                                fontSize: "14px"
                            }}>LOCAL &bull; SEATTLE, WA</h6>
                            <h6
                                className='text-muted mb-3'
                                style={{
                                fontSize: "14px"
                            }}><a href="https://www.taskrabbit.com/profile/jamison-r--5?ref=TRYBX6ON&utm_medium=tryprofile&invitation_source=url&utm_source=trycode" alt="" style={{textDecoration: 'none'}}>4.7 &#9733;&#9733;&#9733;&#9733;&#9733;</a></h6>
                            <p className="card-text">Professional moving help with floor dollies, blankets,
                                and moving straps to get your belongings from A to B safely.</p>
                        </div>
                        <ul className="list-group list-group-flush p-4">
                            <li className="list-group-item bg-light text-dark">
                                <p className="h4">$55/hr</p>
                                <p className="h6 pt-0">$45/hr
                                    <font
                                        style={{
                                        fontWeight: 300
                                    }}>&nbsp;after first hour&nbsp;</font>
                                </p>
                            </li>
                            <li className="list-group-item bg-light text-dark">
                                <Link
                                    to="../Contact"
                                    className="btn btn-secondary"
                                    state={{
                                    service: "Moving Help"
                                }}>Get a Quote</Link>
                            </li>
                            <li className="list-group-item bg-light text-success pb-3">
                            {/* https://jamison-rubino.bookafy.com/category/moving-help-1803b3?locale=en */}
                                <Link
                                    to="https://book.housecallpro.com/book/Jamison-Rubino/991a7bc836674660a42c3cfabd4c64e6?v2=true"
                                    className="btn btn-dark"
                                    state={{
                                    service: "Moving Help"
                                }}
                                    target="_blank">Book Now</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4 pb-3">
                    <div className="card bg-light text-dark border shadow-sm">
                        <div className="card-body p-4">
                            <Link
                                to="/FurnitureAssembly"
                                style={{
                                textDecoration: "none"
                            }}
                                className="text-dark">
                                <h4 className="card-title pb-1 mb-0">Furniture Assembly<img
                                    src={linkIcon}
                                    width="14"
                                    height="14"
                                    style={{
            marginLeft: "3px"
        }}/></h4>
                            </Link>
                            <h6
                                className='text-muted mb-0 pb-1'
                                style={{
                                fontSize: "14px"
                            }}>LOCAL &bull; SEATTLE, WA</h6>
                            <h6
                                className='text-muted mb-3'
                                style={{
                                fontSize: "14px"
                            }}><a href="https://www.taskrabbit.com/profile/jamison-r--5?ref=TRYBX6ON&utm_medium=tryprofile&invitation_source=url&utm_source=trycode" style={{textDecoration: 'none'}} alt="">{rating}4.9 &#9733;&#9733;&#9733;&#9733;&#9733;</a></h6>
                            <p className="card-text">Professional assembly and disassembly with a
                                comprehensive tool kit to help you perfect your home or office.</p>
                        </div>
                        <ul className="list-group list-group-flush p-4">
                            <li className="list-group-item bg-light text-dark">
                                <p className="h4">$60/hr</p>
                                <p className="h6 pt-0">$50/hr
                                    <font
                                        style={{
                                        fontWeight: 300
                                    }}>&nbsp;after first hour&nbsp;</font>
                                </p>
                            </li>
                            <li className="list-group-item bg-light text-success">
                                <Link
                                    to="../Contact"
                                    className="btn btn-secondary"
                                    state={{
                                    service: "Furniture Assembly"
                                }}>Get a Quote</Link>
                            </li>
                            <li className="list-group-item bg-light text-success pb-3">
                            {/* https://jamison-rubino.bookafy.com/category/furniture-assembly-8d3332?locale=en */}
                                <Link
                                    to="https://book.housecallpro.com/book/Jamison-Rubino/991a7bc836674660a42c3cfabd4c64e6?v2=true"
                                    className="btn btn-dark"
                                    target="_blank">Book Now</Link>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-3 mb-4 pb-3">
                    <div className="card bg-dark text-light border shadow-sm">
                        {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                        <div className="card-body p-4">
                            <h4 className="card-title pb-1 mb-0">Web Development</h4>
                            <h6
                                className='text-light mb-3'
                                style={{
                                fontSize: "14px"
                            }}>ONLINE</h6>

                            <p className="card-text">Build or improve your personal or business website with
                                website builders or code.</p>
                        </div>
                        <ul
                            className="list-group list-group-flush p-4"
                            style={{
                            borderTopColor: "rgba(255,255,255,0.26)"
                        }}>
                            <li className="list-group-item bg-dark text-light">
                                <p className="h4">$52/hr</p>
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <Link
                                    to="../Contact"
                                    className="btn btn-secondary"
                                    state={{
                                    service: "Web Development"
                                }}>Get a Quote</Link>
                            </li>
                            <li className="list-group-item bg-dark text-light pb-3">
                                <Link
                                    to="https://jamison-rubino.bookafy.com/service/web-development-meeting?locale=en"
                                    className="btn btn-light"
                                    target="_blank">Book Now</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4 pb-3">
                    <div className="card bg-dark text-light border shadow-sm">
                        <div className="card-body p-4">
                            {/* onClick={()=>{setSelectedService('Search Engine Optimization'); handleShow() }}*/}
                            <h4 className="card-title pb-1 mb-0">Search Engine Optimization</h4>
                            <h6
                                className='text-light mb-3'
                                style={{
                                fontSize: "14px"
                            }}>ONLINE</h6>
                            <p className="card-text">Improve your website's search engine ranking with a few
                                basic tips and practices.</p>
                        </div>
                        <ul
                            className="list-group list-group-flush p-4"
                            style={{
                            borderTopColor: "rgba(255,255,255,0.26)"
                        }}>
                            <li className="list-group-item bg-dark text-light">
                                <p className="h4">$46/hr</p>
                            </li>
                            <li className="list-group-item bg-dark text-light">
                                <Link
                                    to="../Contact"
                                    className="btn btn-secondary"
                                    state={{
                                    service: "Search Engine Optimization"
                                }}>Get a Quote</Link>
                            </li>
                            <li className="list-group-item bg-dark text-light pb-3">
                                <Link
                                    to="https://jamison-rubino.bookafy.com/service/seo-meeting?locale=en"
                                    className="btn btn-light"
                                    target="_blank">Book Now</Link>
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
                                service: "Electrical Installation"
                            }}>Get a Quote</Link>
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
                                service: "Plumbing"
                            }}>Get a Quote</Link>
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
            <div className="row align-bottom m-0 p-0">
                <div className="col">
                    <p
                        style={{
                        fontSize: "8px",
                        color: "#888"
                    }}>Link Icon by
                        <a href="https://www.danilodemarco.com/">https://www.danilodemarco.com/</a>
                    </p>
                </div>
            </div>
            
        </div>
    )

}