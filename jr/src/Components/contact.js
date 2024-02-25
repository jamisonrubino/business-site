// #29344f, #f7fcfe, #76a4d9
import {useState, useRef, useEffect} from "react"
import {useLocation} from 'react-router-dom'
import emailjs from "@emailjs/browser";
import taskrabbitIcon from "../taskrabbit.jpeg";
import thumbtackIcon from "../thumbtack.jpeg";
import fiverrIcon from "../fiverr.jpg";
import upworkIcon from "../upwork.jpg";
import linkedinIcon from "../linkedin.png"
import yelpIcon from "../yelp.png"
import angiIcon from "../angi.png"
// import GoogleAds from 'googleads';

function AlertMessage(props) {
    if (props.submitted === true && props.error === false) {
        // return success message
        return (
            <div className="row m-0">
                <div className="col-lg-3 col-sm-0 m-0 p-0"></div>
                <div className="col-sm-12 col-lg-6 m-0 p-0 pt-3">
                    <div className="alert alert-info mx-3 mt-4 pt-3 pb-1 mt-3 mx-4" role="alert">
                        <h4 className="alert-heading">Success!</h4>
                        <p>Your message has been sent.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-0 m-0 p-0"></div>
            </div>
        )
    } else if (props.submitted === false && props.error === true) {
        return (
            <div className="row mx-0">

                <div className="col-lg-3 col-sm-0 m-0 p-0"></div>
                <div className="col-sm-12 col-lg-6 m-0 p-0 pt-3">
                    <div className="alert alert-warning mx-3 mt-4 pt-3 pb-1 mt-3 mx-4" role="alert">
                        <h4 className="alert-heading">Warning!</h4>
                        <p>Please fill out all fields before submitting.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-0 m-0 p-0"></div>
            </div>
        )
    }
}

function SelectedService(props) {
    if (props.service !== null) {
        console.log(props.service)
        return (
            <div className="row m-0">
                <div className="col-lg-3 col-sm-0 m-0 p-0"></div>
                <div className="col-sm-12 col-lg-6 m-0 p-0">
                    <div className="selected-service alert alert-info mx-3 mt-4 py-0">
                        <p className="py-2 m-0">You have selected the
                            <strong>&nbsp;{props.service}&nbsp;</strong>
                            service.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-0 m-0 p-0"></div>
            </div>
        )
    }
}

export default function Contact() {
    useEffect(() => emailjs.init("zkU-2f38aCFEWMoLW"), []);

    const [loading,
        setLoading] = useState(false);

    console.log("Contact")

    const [contact,
        setContact] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
        submitted: false,
        error: false,
        resetService: null
    });

    const location = useLocation();
    var service = null;
    if (location.state) {
        if (location.state.service) {
            service = location.state.service;
            if (contact.message.length === 0 && contact.resetService !== true) 
                setContact({
                    ...contact,
                    message: "Hello! I am interested in your " + service + " service."
                });
            }
        }

    console.log('location', location)

    // console.log(service); send contact form as email to admin
    const handleSubmit = async(e) => {
        e.preventDefault();
        var successful = false,
            error = false;
        console.log(contact);
        try {
            if (contact.firstName.length === 0 || contact.lastName.length === 0 || contact.phone.length === 0 || contact.email.length === 0 || contact.message.length === 0) {
                console.log('error');
                throw new Error("Please fill out all fields before submitting.");
            }
            //from_email, from_name, message
            const serviceId = "service_q3ixfxk";
            const templateId = "template_wzqz139";
            try {
                setLoading(true);
                await emailjs.send(serviceId, templateId, {
                    from_name: `${contact.firstName} ${contact.lastName}`,
                    from_email: contact.email,
                    message: `${contact.message}&nbsp;&nbsp;&nbsp;Phone: ${contact.phone}`
                });
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }

            successful = true;
            error = false;
            setContact({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                message: "",
                submitted: successful,
                error: error,
                resetService: true
            });

        } catch (error) {
            console.log('catch');
            successful = false;
            error = true;
            setContact({
                ...contact,
                submitted: successful,
                error: error
            });
        }

        console.log(contact);

    }

    return (
        <div className="mx-auto">
            {/* <GoogleAds /> */}
            <AlertMessage submitted={contact.submitted} error={contact.error}/>
            <div className="contact-info my-3 pb-4">
                <h2>Contact Info</h2>
                <div className="pt-4 pb-1">
                    <p className="p-0 m-1">Phone: +1 541-970-4404</p>
                    <p className="p-0 m-1">Email: jamison.rubino@gmail.com</p>
                    <p className="p-0 m-1">Locale: Seattle, WA</p>
                </div>
                <div className="row m-0">
                    <div className="col pt-3 m-1">
                        <a
                            href="https://www.taskrabbit.com/profile/jamison-r--5"
                            target="_blank"
                            alt="My Taskrabbit Profile"
                            className="px-2"><img
                            src={taskrabbitIcon}
                            width="34"
                            height="34"
                            className="rounded"
                            alt="Taskrabbit Profile"/></a>
                        <a
                            href="https://www.thumbtack.com/wa/renton/movers/jamison-rubino/service/488671145822986247"
                            target="_blank"
                            alt="My Thumbtack Profile"
                            className="px-2"><img
                            src={thumbtackIcon}
                            width="34"
                            height="34"
                            className="rounded ml-3"
                            alt="Thumbtack Profile"
                            style={{
            opacity: 0.4
        }}/></a>
                        <a
                            href="https://www.fiverr.com/jamisonrubino"
                            target="_blank"
                            alt="My Fiverr Profile"
                            className="px-2"><img
                            src={fiverrIcon}
                            width="34"
                            height="34"
                            className="rounded ml-3"
                            alt="Fiverr Profile"
                            style={{
            opacity: 0.4
        }}/></a>
                        <a
                            href="https://www.upwork.com/freelancers/~0180302a9d35e1993e"
                            target="_blank"
                            alt="My Upwork Profile"
                            className="px-2"><img
                            src={upworkIcon}
                            width="34"
                            height="34"
                            className="rounded ml-3"
                            alt="Upwork Profile"/></a>
                    </div>
                </div>
                <div className="row m-0">
                    <div className="col pt-3 m-1">
                        <a
                            href="https://www.linkedin.com/in/jamison-rubino/"
                            target="_blank"
                            alt="My LinkedIn Profile"
                            className="px-2"><img
                            src={linkedinIcon}
                            width="34"
                            height="34"
                            className="rounded ml-3"
                            alt="LinkedIn Profile"/></a>
                        <a
                            href="https://www.yelp.com/biz/jamison-rubino-seattle"
                            target="_blank"
                            alt="My Yelp Profile"
                            className="px-2"><img
                            src={yelpIcon}
                            width="34"
                            height="34"
                            className="rounded ml-3"
                            alt="Yelp Profile"/></a>
                        <a
                            href="https://www.angi.com/companylist/us/wa/carnation/jamison-rubino-reviews-10741858.htm"
                            target="_blank"
                            alt="My Angi's List Profile"
                            className="px-2"><img
                            src={angiIcon}
                            width="34"
                            height="34"
                            className="rounded ml-3"
                            alt="Angi's List Profile"/></a>
                    </div>
                </div>

            </div>
            <div className="row p-0 m-0">
                <div className="col-8 col-md-4 col-sm-6 mx-auto mb-4">
                    <hr className="hr"></hr>
                </div>
            </div>

            <SelectedService service={service}/>

            <form onSubmit={e => handleSubmit(e)} className="pt-3">
                <div className="row mx-0 mb-2 justify-content-center pb-2 pt-4">
                    <div className="col-sm-6 col-lg-3">
                        <div className="form-group">
                            <label htmlFor="firstName" className="form-label mb-0">First Name</label>
                            <input
                                value={contact.firstName}
                                onChange={e => setContact({
                                ...contact,
                                firstName: e.target.value
                            })}
                                className="form-control"
                                id="firstName"/>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="form-group">
                            <label htmlFor="lastName" className="form-label mb-0">Last Name</label>
                            <input
                                value={contact.lastName}
                                onChange={e => setContact({
                                ...contact,
                                lastName: e.target.value
                            })}
                                className="form-control"
                                id="lastName"/>
                        </div>
                    </div>
                </div>
                <div className="row mx-0 mb-2 justify-content-center pb-2">
                    <div className="col-sm-6 col-lg-3">
                        <div className="form-group">
                            <label htmlFor="phone" className="form-label mb-0">Phone</label>
                            <input
                                value={contact.phone}
                                onChange={e => setContact({
                                ...contact,
                                phone: e.target.value
                            })}
                                id="phone"
                                type="phone"className="form-control"/>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="form-group">
                            <label htmlFor="email" className="form-label mb-0">Email</label>
                            <input
                                value={contact.email}
                                onChange={e => setContact({
                                ...contact,
                                email: e.target.value
                            })}
                                className="form-control"
                                id="email"
                                type="email"/>
                        </div>
                    </div>
                </div>
                <div className="row mx-0 mb-2 justify-content-center pb-2">
                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group pb-4">
                            <label htmlFor="message" className="form-label mb-0">Message</label>
                            <textarea
                                value={contact.message}
                                onChange={e => {
                                setContact({
                                    ...contact,
                                    message: e.target.value,
                                    resetService: contact.message.length < 3
                                        ? true
                                        : contact.resetService
                                })
                            }}
                                className="form-control"
                                id="message"/>
                        </div>
                        <div className="row mx-0">
                            <button type="submit" className="btn btn-dark btn-block mb-4">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )

}