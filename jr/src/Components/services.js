import {Link} from 'react-router-dom'; 
import 'bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react'
export default function Services() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const [data, setData] = useState(null);
    // useEffect(() => {
    //     fetch("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
    //         .then((res) => res.json())
    //         .then((data) => setData(data));
    // }, []);
    // if (!data) return "Loading...";
    // console.log(data);
    // return (
    //     <div>
    //         <h1>Services</h1>
    //     </div>
    // )

    // send an email to the admin using the emailjs API
    // emailjs.sendForm('service_id', 'template_id', 'form_id', 'user_id')
    //     .then(function (response) {
    //         console.log('SUCCESS!', response.status, response.text);
    //     }

    // async function handleSelect(e, service) {
    //     e.preventDefault();
    //     const res = await fetch('/api/email', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             service: service
    //         })
    //     });
    //     const data = await res.json();
    //     console.log(data);
    
    // }

    // $('#bookingModal').on('shown.bs.modal', function () {
    //     $('#myInput').trigger('focus')
    //   })

    // useScript('https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js');
    // useScript();
    // useScript();

    console.log("Services");
    return (
        <div>
            <h1 className="my-3">Services</h1>
            <div className="row mx-4">
            {/* moving, assembly, disassembly, SEO, development, plumbing, electrical installation */}
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                    <div className="card bg-success text-light">
                        <div className="card-body">
                            <h5 className="card-title">Moving Help</h5>
                            <p className="card-text">Professional moving help with floor dollies, blankets, and moving straps to get your belongings from A to B safely.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-success text-light"><p className="h4 pt-3">$55/hr</p><p className="h6 pt-0">$45/hr <font style={{fontWeight: 300}}>after first hour</font></p></li>
                                <li className="list-group-item bg-success text-light">        <Link to="../Contact" className="btn btn-secondary"  state={{service: "Moving Help"}}>Get a Quote</Link>
                                </li>
                                <li className="list-group-item bg-success text-light pb-3">        
                                <Link to="https://jamison-rubino.bookafy.com/category/moving-help-1803b3?locale=en" className="btn btn-dark"  state={{service: "Moving Help"}} target="_blank">Book Now</Link>
                                </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                    <div className="card bg-success text-light">
                        <div className="card-body">
                            <h5 className="card-title">Furniture Assembly</h5>
                            <p className="card-text">Professional assembly and disassembly with a comprehensive tool kit to help you perfect your home or office.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-success text-light"><p className="h4 pt-3">$60/hr</p><p className="h6 pt-0">$50/hr <font style={{fontWeight: 300}}>after first hour</font></p></li>
                                <li className="list-group-item bg-success text-light">        
                                <Link to="../Contact" className="btn btn-secondary" state={{service: "Furniture Assembly"}}>Get a Quote</Link>
                                </li>
                                <li className="list-group-item bg-success text-light pb-3">        
                                <Link to="https://jamison-rubino.bookafy.com/category/furniture-assembly-8d3332?locale=en" className="btn btn-dark"  state={{service: "Moving Help"}} target="_blank">Book Now</Link>
                                </li>

                        </ul>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                    <div className="card bg-dark text-light">
                        {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                        <div className="card-body">
                            <h5 className="card-title">Web Development</h5>
                            <p className="card-text">Build or improve your personal or business website with website builders or code.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-dark text-light"><p className="h4 pt-3">$52/hr</p></li>
                                <li className="list-group-item bg-dark text-light">        
                                <Link to="../Contact" className="btn btn-secondary"  state={{service: "Web Development"}}>Get a Quote</Link>
                                </li>
                                <li className="list-group-item bg-dark text-light pb-3">        
                                <Link to="https://jamison-rubino.bookafy.com/service/web-development-meeting?locale=en" className="btn btn-success" target="_blank">Book Now</Link>
                                </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                    <div className="card bg-dark text-light">
                        <div className="card-body">
                            <h5 className="card-title">Search Engine Optimization</h5>
                            <p className="card-text">Improve your website's search engine ranking with a few basic tips and practices.</p>
                        </div>
                        <ul className="list-group list-group-flush ">
                                <li className="list-group-item bg-dark text-light"><p className="h4 pt-3">$46/hr</p></li>
                                <li className="list-group-item bg-dark text-light">        
                                <Link to="../Contact" className="btn btn-secondary"  state={{service: "Search Engine Optimization"}}>Get a Quote</Link>
                                </li>
                                <li className="list-group-item bg-dark text-light pb-3">        
                                <Link to="https://jamison-rubino.bookafy.com/service/seo-meeting?locale=en" className="btn btn-success" target="_blank">Book Now</Link>
                                </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Plumbing</h5>
                            <p className="card-text">Coming soon!</p>
                            <Link to="../Contact" className="btn btn-primary disabled" state={{service: "Plumbing"}}>Get a Quote</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Electrical</h5>
                            <p className="card-text">Coming soon!</p>
                            <Link to="../Contact" className="btn btn-primary disabled"  state={{service: "Electrical"}}>Get a Quote</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Book Your Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <center>                    
                        <iframe src="https://jamison-rubino.bookafy.com/schedule?type=iframe&locale=en" height="800" style={{width: "100% !important", overflow: "auto !important"}} frameBorder="0" title="bookingIframe"> </iframe>
                        </center>
                        </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )

}