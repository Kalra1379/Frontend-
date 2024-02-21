import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import PageHeader from '../../components/PageHeader/PageHeader';
import axios from './../../services/axios';


const Contact = () => {

    const initialFormValues = {
        customerEmail: "",
        customerName: "",
        subject: "",
        message: ""
    }
    const [formData, setFormData] = useState(initialFormValues);

    useEffect(() => {
        document.title = `Contact us - ServiceX`
    }, [])

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {
            await axios.post('/contact', formData);
            NotificationManager.success('Message Sent Successfully');
            setFormData(initialFormValues)
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    }
    return (
        <>
            <PageHeader title="Contact Us" />
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        {/* <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="row g-4 align-items-center">
                                <div className="col-sm-6">
                                    <img className="img-fluid" src="img/team-1.jpg" alt="" />
                                </div>
                                <div className="col-sm-6">
                                    <h3 className="mb-0">Full Name</h3>
                                    <p>Head of Sales</p>
                                    <h6>Contact Details</h6>
                                    <p>Lorem ipsum dolor sit amet conse elit sed eiu smod lab ore.</p>
                                    <p className="mb-0">Call: +012 345 6789</p>
                                    <p className="mb-0">Email: sales@example.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="row g-4 align-items-center">
                                <div className="col-sm-6">
                                    <img className="img-fluid" src="img/team-2.jpg" alt="" />
                                </div>
                                <div className="col-sm-6">
                                    <h3 className="mb-0">Full Name</h3>
                                    <p>Head of Marketing</p>
                                    <h6>Contact Details</h6>
                                    <p>Lorem ipsum dolor sit amet conse elit sed eiu smod lab ore.</p>
                                    <p className="mb-0">Call: +012 345 6789</p>
                                    <p className="mb-0">Email: sales@example.com</p>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: "450px" }}>
                            <div className="position-relative h-100">
                                <iframe className="position-relative w-100 h-100" title='Map Location'
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98318.54618256209!2d176.73198804507103!3d-39.63948321781622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6851486a538aeb%3A0x500ef6143a29918!2sHastings%2C%20New%20Zealand!5e0!3m2!1sen!2sin!4v1701162988172!5m2!1sen!2sin"
                                    frameborder="0" style={{ minHeight: "450px", border: 0 }} allowfullscreen="" aria-hidden="false"
                                    tabindex="0"></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="border-start border-5 border-primary ps-4 mb-5">
                                <h6 className="text-body text-uppercase mb-2">Contact Us</h6>
                                <h1 className="display-6 mb-0">Get in Touch with ServiceX</h1>
                            </div>
                            <p className="mb-4">Have a question or need information? Fill out the form below, and we'll get back to you as soon as possible.</p>
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" value={formData.customerName} className="form-control border-0 bg-light" id="customerName" placeholder="Your Name" onChange={handleInputChange} required />
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" value={formData.customerEmail} className="form-control border-0 bg-light" id="customerEmail" placeholder="Your Email" onChange={handleInputChange} required />
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" value={formData.subject} className="form-control border-0 bg-light" id="subject" placeholder="Subject" onChange={handleInputChange} required />
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control border-0 bg-light" placeholder="Leave a message here" value={formData.message} id="message" onChange={handleInputChange} style={{ height: "150px" }} required></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary py-3 px-5" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;