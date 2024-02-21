import React, { useState, useEffect } from 'react';
import AppointmentForm from '../../components/AppointmentForm/AppointmentForm';
import { fetchServices } from '../../store/slices/servicesSlice';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import './Home.css'
const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [carouselNumber, setCarouselNumber] = useState(0);
    const services = useSelector((state) => state.services.services)
    const slides = services.filter(service => service.onCarousel)

    const next = () => {
        if (carouselNumber < slides?.length - 1) setCarouselNumber(carouselNumber + 1);
        else
            setCarouselNumber(0);

    };
    const previous = () => {
        if (carouselNumber >= 1) setCarouselNumber(carouselNumber - 1);
        else setCarouselNumber(slides.length - 1)
    }


    useEffect(() => {
        dispatch(fetchServices());
        document.title = `ServiceX`
    }, [dispatch]);

    const handleServiceClick = (serviceSlug) => {
        navigate(`/service/${serviceSlug}`);
    }

    return (
        <>
            {!!slides?.length && <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {slides.map((service, index) => {
                            return (
                                <div key={service.serviceId} className={carouselNumber == index ? "carousel-item active " : "carousel-item "}>
                                    <img className="w-100" style={{ maxHeight: 700, objectFit: 'cover' }} src={process.env.REACT_APP_API_BASE_URL + '/static/' + service.serviceImage} alt={service.serviceName} />
                                    <div className="carousel-caption">
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <div className="col-12 col-lg-10">
                                                    <h5 className="text-light text-uppercase mb-3 animated slideInDown">Welcome to ServiceX</h5>
                                                    <h1 className="display-2 text-light mb-3 animated slideInDown">{service.serviceName}</h1>
                                                    <ol className="breadcrumb mb-4 pb-2">
                                                        <li className="breadcrumb-item fs-5 text-light">Commercial</li>
                                                        <li className="breadcrumb-item fs-5 text-light">Residential</li>
                                                        <li className="breadcrumb-item fs-5 text-light">Industrial</li>
                                                    </ol>
                                                    <Link to={`/service/${service.serviceSlug}`} className="btn btn-primary py-3 px-5">Book Appointment</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <button onClick={previous} className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button onClick={next} className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>}

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{ minHeight: "400px" }}>
                                <img className="position-absolute w-100 h-100" src="img/about.jpg" alt="" style={{ objectFit: "cover" }} />
                                <div className="position-absolute top-0 start-0 bg-white pe-3 pb-3" style={{ width: "200px", height: "200px" }}>
                                    <div className="d-flex flex-column justify-content-center text-center bg-primary h-100 p-3">
                                        <h1 className="text-white">5</h1>
                                        <h2 className="text-white">Years</h2>
                                        <h5 className="text-white mb-0">Experience</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="h-100">
                                <div className="border-start border-5 border-primary ps-4 mb-5">
                                    <h6 className="text-body text-uppercase mb-2">About Us</h6>
                                    <h1 className="display-6 mb-0">Your Trusted Partner for Exceptional Services!</h1>
                                </div>
                                <p>At ServiceX, our mission is simple yet profound: to enhance the comfort and well-being of our customers by providing top-notch services. We believe in transforming spaces into clean, cool, and healthy environments, ensuring satisfaction and peace of mind for every client we serve.</p>
                                <p className="mb-4">Our vision is to be the go-to service provider known for reliability, professionalism, and excellence in every aspect. We aspire to set the industry standard, continually raising the bar to meet and exceed the evolving needs of our valued customers.</p>
                                <div className="border-top mt-4 pt-4">
                                    <div className="row g-4">
                                        <div className="col-sm-4 d-flex wow fadeIn" data-wow-delay="0.1s">
                                            <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                                            <h6 className="mb-0">Ontime at services</h6>
                                        </div>
                                        <div className="col-sm-4 d-flex wow fadeIn" data-wow-delay="0.3s">
                                            <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                                            <h6 className="mb-0">24/7 hours services</h6>
                                        </div>
                                        <div className="col-sm-4 d-flex wow fadeIn" data-wow-delay="0.5s">
                                            <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                                            <h6 className="mb-0">Verified professionals</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid my-5 p-0">
                <div className="row g-0">
                    <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="position-relative">
                            <img className="img-fluid w-100" src="img/fact-1.jpg" alt="" />
                            <div className="facts-overlay">
                                <h1 className="display-1">01</h1>
                                <h4 className="text-white mb-3">Cleaning Services</h4>
                                <p className="text-white">Spotless homes and offices, enhancing well-being with meticulous residential and commercial cleaning</p>
                                <Link className="text-white small" to="/services">READ MORE<i className="fa fa-arrow-right ms-3"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                        <div className="position-relative">
                            <img className="img-fluid w-100" src="img/fact-2.jpg" alt="" />
                            <div className="facts-overlay">
                                <h1 className="display-1">02</h1>
                                <h4 className="text-white mb-3">HVAC Services</h4>
                                <p className="text-white">Efficient AC repair, preventive maintenance, and filter replacements for optimal comfort and longevity</p>
                                <Link className="text-white small" to="/services">READ MORE<i className="fa fa-arrow-right ms-3"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                        <div className="position-relative">
                            <img className="img-fluid w-100" src="img/fact-3.jpg" alt="" />
                            <div className="facts-overlay">
                                <h1 className="display-1">03</h1>
                                <h4 className="text-white mb-3">Specialized Solutions</h4>
                                <p className="text-white">Deep cleaning, air purifier filter changes, and custom filtration for a healthier environment</p>
                                <Link className="text-white small" to="/services">READ MORE<i className="fa fa-arrow-right ms-3"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                        <div className="position-relative">
                            <img className="img-fluid w-100" src="img/fact-4.jpg" alt="" />
                            <div className="facts-overlay">
                                <h1 className="display-1">04</h1>
                                <h4 className="text-white mb-3">Additional Services</h4>
                                <p className="text-white">Comprehensive solutions like window cleaning and office organization for well-maintained and organized spaces</p>
                                <Link className="text-white small" to="/services">READ MORE<i className="fa fa-arrow-right ms-3"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="border-start border-5 border-primary ps-4 mb-5">
                                <h6 className="text-body text-uppercase mb-2">Why Choose Us!</h6>
                                <h1 className="display-6 mb-0">Elevating Your Space with Excellence and Satisfaction</h1>
                            </div>
                            <p className="mb-5">ServiceX is your trusted partner for a seamless service experience – from reliable professionals and timely service to affordable pricing and a commitment to customer satisfaction. Choose ServiceX for excellence in cleaning, AC repair, and filter replacements.</p>
                            <div className="row gy-5 gx-4">
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="d-flex align-items-center mb-3">
                                        <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                                        <h6 className="mb-0">Reliable Professionals</h6>
                                    </div>
                                    <span>Our skilled technicians are thoroughly vetted and dedicated to delivering professional services, ensuring your space is in trustworthy hands.</span>
                                </div>
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                                    <div className="d-flex align-items-center mb-3">
                                        <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                                        <h6 className="mb-0">Timely Service</h6>
                                    </div>
                                    <span>At ServiceX, we value your time and guarantee prompt service delivery, ensuring your schedule is respected and services are completed efficiently.</span>
                                </div>
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                                    <div className="d-flex align-items-center mb-3">
                                        <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                                        <h6 className="mb-0">Affordable Pricing</h6>
                                    </div>
                                    <span>Experience quality services without breaking the bank – our competitive and transparent pricing ensures affordability without compromising on excellence.</span>
                                </div>
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                                    <div className="d-flex align-items-center mb-3">
                                        <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                                        <h6 className="mb-0">Customer Satisfaction Guaranteed</h6>
                                    </div>
                                    <span>Your satisfaction is our priority. ServiceX goes the extra mile to ensure every service exceeds expectations, leaving you delighted with the results.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{ minHeight: "400px" }}>
                                <img className="position-absolute w-100 h-100" src="img/feature.jpg" alt="" style={{ objectFit: "cover" }} />
                                <div className="position-absolute top-0 start-0 bg-white pe-3 pb-3" style={{ width: "200px", height: "200px" }}>
                                    <div className="d-flex flex-column justify-content-center text-center bg-primary h-100 p-3">
                                        <h1 className="text-white">5</h1>
                                        <h2 className="text-white">Years</h2>
                                        <h5 className="text-white mb-0">Experience</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-end mb-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="border-start border-5 border-primary ps-4">
                                <h6 className="text-body text-uppercase mb-2">Our Services</h6>
                                <h1 className="display-6 mb-0">Featured Services</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 text-lg-end wow fadeInUp" data-wow-delay="0.3s">
                            <Link className="btn btn-primary py-3 px-5" to="/services">More Services</Link>
                        </div>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {
                            !!services.length && services.slice(0, 3).map(service => {
                                return (

                                    <div key={service.serviceId} onClick={() => { handleServiceClick(service.serviceSlug) }} style={{ cursor: "pointer" }} className="col-lg-4 col-md-6 wow fadeInUp  " data-wow-delay="0.1s"  >
                                        <div className="service-item bg-light text-center overflow-hidden h-100    ">
                                            <img className=" equal-height-image" src={`${process.env.REACT_APP_API_BASE_URL}/static/${service.serviceImage}`} alt="" />
                                            <div className="service-text position-relative text-center h-100 p-4">
                                                <h5 className="mb-3">{service.serviceName}</h5>
                                                <p className='ellipses' >{service.serviceDescription}</p>
                                                <Link className="small" to={`/service/${service.serviceId}`}>READ MORE<i className="fa fa-arrow-right ms-3"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </div>

            <AppointmentForm title='Appointment' />

            {/* <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-end mb-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="border-start border-5 border-primary ps-4">
                                <h6 className="text-body text-uppercase mb-2">Our Team</h6>
                                <h1 className="display-6 mb-0">Our Expert Worker</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item position-relative">
                                <img className="img-fluid" src="img/team-1.jpg" alt="" />
                                <div className="team-text bg-white p-4">
                                    <h5>Full Name</h5>
                                    <span>Engineer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item position-relative">
                                <img className="img-fluid" src="img/team-2.jpg" alt="" />
                                <div className="team-text bg-white p-4">
                                    <h5>Full Name</h5>
                                    <span>Engineer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item position-relative">
                                <img className="img-fluid" src="img/team-3.jpg" alt="" />
                                <div className="team-text bg-white p-4">
                                    <h5>Full Name</h5>
                                    <span>Engineer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="border-start border-5 border-primary ps-4 mb-5">
                                <h6 className="text-body text-uppercase mb-2">Testimonial</h6>
                                <h1 className="display-6 mb-0">What Our Happy Clients Say!</h1>
                            </div>
                            <p className="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <div className="row g-4">
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="fa fa-users fa-2x text-primary flex-shrink-0"></i>
                                        <h1 className="ms-3 mb-0">123+</h1>
                                    </div>
                                    <h5 className="mb-0">Happy Clients</h5>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="fa fa-check fa-2x text-primary flex-shrink-0"></i>
                                        <h1 className="ms-3 mb-0">123+</h1>
                                    </div>
                                    <h5 className="mb-0">Projects Done</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="owl-carousel testimonial-carousel">
                                <div className="testimonial-item">
                                    <img className="img-fluid mb-4" src="img/testimonial-1.jpg" alt="" />
                                    <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                    <div className="bg-primary mb-3" style={{ width: "60px", height: "5px" }}></div>
                                    <h5>Client Name</h5>
                                    <span>Profession</span>
                                </div>
                                <div className="testimonial-item">
                                    <img className="img-fluid mb-4" src="img/testimonial-2.jpg" alt="" />
                                    <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                    <div className="bg-primary mb-3" style={{ width: "60px", height: "5px" }}></div>
                                    <h5>Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default Home;