import { useState, useRef, useEffect } from "react"
import { useLocation } from 'react-router-dom'
import emailjs from "@emailjs/browser";
import taskrabbitIcon from "../taskrabbit.jpeg";
import thumbtackIcon from "../thumbtack.jpeg";
import fiverrIcon from "../fiverr.jpg";
import upworkIcon from "../upwork.jpg";
import linkedinIcon from "../linkedin.png"

function AlertMessage(props) {
    if (props.submitted === true && props.error === false) {
        // return success message
        return (
            <div className="alert alert-success mt-3 mx-4 pb-0" role="alert">
                <h4 className="alert-heading">Success!</h4>
                <p>Your message has been sent.</p>
            </div>
        )
    } else if (props.submitted === false && props.error === true) {
        return (
            <div className="alert alert-warning mt-3 mx-4 pb-0" role="alert">
                <h4 className="alert-heading">Warning!</h4>
                <p>Please fill out all fields before submitting.</p>
            </div>
        ) 
    }
}

function SelectedService(props) {
    if (props.service !== null) {
        console.log(props.service)
        return (
            <div className="selected-service">
                <p>You have selected the <strong>{props.service}</strong> service.</p>
            </div>
        )
    }
}


export default function Contact() {
    useEffect(() => emailjs.init("zkU-2f38aCFEWMoLW"), []);
    //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
    // const emailRef = useRef<HTMLInputElement>();
    // const nameRef = useRef<HTMLInputElement>();
    const [loading, setLoading] = useState(false);

    console.log("Contact")

    const [contact, setContact] = useState({ firstName: "", lastName: "", phone: "", email: "", message: "", submitted: false, error: false, resetService: null });

    const location = useLocation();
    var service = null;
    if (location.state) {
        if (location.state.service) {
            service = location.state.service;
            if (contact.message.length === 0 && contact.resetService !== true)
                setContact({...contact, message: "Hello! I am interested in your " + service + " service."});
        }
    }

    console.log('location',location)

    // console.log(service);
    // send contact form as email to admin
    const handleSubmit = async (e) => {
        e.preventDefault();
        var successful = false, error = false;
        console.log(contact);
        try {
            if (contact.firstName.length === 0 || contact.lastName.length === 0 || contact.phone.length === 0 || contact.email.length === 0 || contact.message.length === 0) {
                console.log('error');
                throw new Error("Please fill out all fields before submitting.");
            }
            //from_email, from_name, message
            const serviceId = "service_s2w7qvx";
            const templateId = "template_wzqz139";
            try {
            setLoading(true);
            await emailjs.send(serviceId, templateId, {
            from_name: `${contact.firstName} ${contact.lastName}`,
                from_email: contact.email, message: `${contact.message}&nbsp;&nbsp;&nbsp;Phone: ${contact.phone}`
            });
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
            
            successful = true;
            error = false;
            setContact({ firstName: "", lastName: "", phone: "", email: "", message: "", submitted: successful, error: error, resetService: true });

        } catch (error) {
            console.log('catch');
            successful = false;
            error = true;
            setContact({...contact, submitted: successful, error: error});
        }

        console.log(contact);

    }

    return (
        <div className="mx-auto">
            <AlertMessage submitted={contact.submitted} error={contact.error} />
            <div className="contact-info my-3">
                <h2>Contact Info</h2>
                <p className="p-0 m-1">Phone: +1 541-970-4404</p>
                <p className="p-0 m-1">Email: jamison.rubino@gmail.com</p>
                <p className="p-0 m-1">Locale: Seattle, WA</p>
                <p className="px-0 pt-3 m-1">
                    <a href="https://www.taskrabbit.com/profile/jamison-r--5" target="_blank" alt="My Taskrabbit Profile" className="px-2"><img src={taskrabbitIcon} width="34" height="34" className="rounded" alt="Taskrabbit Profile" /></a>
                <a href="https://www.thumbtack.com/wa/renton/movers/jamison-rubino/service/488671145822986247" target="_blank" alt="My Thumbtack Profile" className="px-2"><img src={thumbtackIcon} width="34" height="34" className="rounded ml-3" alt="Thumbtack Profile" style={{opacity: 0.7}} /></a>
                <a href="https://www.fiverr.com/jamisonrubino" target="_blank" alt="My Fiverr Profile" className="px-2"><img src={fiverrIcon} width="34" height="34" className="rounded ml-3" alt="Fiverr Profile" style={{opacity: 0.7}} /></a>
                <a href="https://www.upwork.com/freelancers/~0180302a9d35e1993e" target="_blank" alt="My Upwork Profile" className="px-2"><img src={upworkIcon} width="34" height="34" className="rounded ml-3" alt="Upwork Profile" /></a>
                <a href="https://www.linkedin.com/in/jamison-rubino/" target="_blank" alt="My LinkedIn Profile" className="px-2"><img src={linkedinIcon} width="34" height="34" className="rounded ml-3" alt="LinkedIn Profile" /></a>

                </p>

            </div>
            
            <SelectedService service={service} />

            <form onSubmit={e=>handleSubmit(e)} >
            <div className="row mx-0  justify-content-center pb-2 pt-4">
                <div className="col-sm-6 col-lg-3">
                    <div className="form-group">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input value={contact.firstName} onChange={e => setContact({ ...contact, firstName: e.target.value })} className="form-control" id="firstName" />
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="form-group">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input value={contact.lastName} onChange={e => setContact({ ...contact, lastName: e.target.value })} className="form-control" id="lastName" />
                    </div>
                </div>
            </div>
            <div className="row mx-0  justify-content-center pb-2">
            <div className="col-sm-6 col-lg-3">
                    <div className="form-group">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input value={contact.phone} onChange={e => setContact({ ...contact, phone: e.target.value })}className="form-control" id="phone" 
                        type="phone" />
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input value={contact.email} onChange={e => setContact({ ...contact, email: e.target.value })} className="form-control" id="email" 
                        type="email" />
                    </div>
                </div>
            </div>
            <div className="row mx-0  justify-content-center pb-2">
                <div className="col-sm-12 col-lg-6">
                    <div className="form-group pb-4">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea value={contact.message} onChange={e => {setContact({ ...contact, message: e.target.value, resetService: contact.message.length < 3 ? true : contact.resetService })}} className="form-control" id="message" />
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