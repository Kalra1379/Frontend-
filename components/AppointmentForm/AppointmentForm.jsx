import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from './../../services/axios';
// import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { useSelector, useDispatch } from 'react-redux'
import { fetchServices } from './../../store/slices/servicesSlice'
import { NotificationManager } from 'react-notifications';
import DatePicker from 'react-datepicker'
import { fetchHolidays } from '../../store/slices/holidaysSlice';

const padTo2Digits = (num) => {

    return num.toString().padStart(2, '0');
}

const AppointmentHeader = (props) => {
    const initialFormData = {
        customerEmail: "",
        customerName: "",
        customerPhone: "",
        message: "",
        serviceId: props.serviceId || "",
        appointmentDate: ""
    }
    const [formData, setFormData] = useState(initialFormData);
    const [isVerified, setIsVerified] = useState(false);
    // const { serviceId } = useParams()
    const dispatch = useDispatch()
    const services = useSelector((state) => {
        return state.services.services;
    })
    const holidays = useSelector((state) => {
        return state.holidays.holidays;
    })

    const [date, setDate] = useState("");
    //filter function for date timepicker
    const filterWeekends = date => {
        // 0 is Sunday
        const day = date.getDay();
        return day !== 0;
    };

    const handleDateChange = (date) => {

        const formattedDate = [
            date.getFullYear(),
            padTo2Digits(date.getMonth() + 1),
            padTo2Digits(date.getDate()),
        ].join('-') +
            'T' +
            [
                padTo2Digits(date.getHours()),
                padTo2Digits(date.getMinutes()),
                padTo2Digits(date.getSeconds()),
            ].join(':')
        console.log('formatted date', formattedDate);

        console.log('custom ', formattedDate);
        setFormData({ ...formData, appointmentDate: formattedDate });


        setDate(date);
    }


    useEffect(() => {

        //in future it will fetch only list of serviceId
        dispatch(fetchServices())
        dispatch(fetchHolidays())
        // setFormData({ ...formData, serviceId: serviceId ? serviceId : "" });

    }, [])
    // const handleRecaptchaChange = (value) => {
    //     // This function will be called when the user interacts with the reCAPTCHA widget
    //     setIsVerified(!!value);
    // };
    const handleSubmit = async (event) => {
        event.preventDefault();
        // handleRecaptchaChange()
        try {
            const response = await axios.post('/appointment', formData);
            NotificationManager.success('Appointment requested');
            setFormData(initialFormData);
            setDate("")
            console.log('Data posted successfully:', response.data);
            // Perform further actions with the response data as needed
        } catch (error) {
            console.error('Error:', error);
        }

        if (isVerified) {
            // Your form submission logic here
            console.log('Form submitted successfully!');
        } else {
            // Show an error or prevent the form submission
            console.error('reCAPTCHA verification failed!');
        }
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        console.log(formData)

        setFormData({ ...formData, [id]: value });
    }

    return (
        <>
            <div className="container-xxl py-5">

                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="border-start border-5 border-primary ps-4 mb-5">
                                <h6 className="text-body text-uppercase mb-2">Appointment</h6>
                                <h1 className="display-6 mb-0">Schedule Your Service with Ease!</h1>
                            </div>
                            <p className="mb-0">We're thrilled to assist you in booking our top-notch services. Please fill out the form below to schedule a convenient time for our team to take care of your cleaning, AC repair, or filter replacement needs.</p>
                        </div>
                        <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input type="text" value={formData.customerName} className="form-control bg-light border-0" id="customerName" onChange={handleInputChange} placeholder="Gurdian Name" required />
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input type="email" value={formData.customerEmail} className="form-control bg-light border-0" id="customerEmail" onChange={handleInputChange} placeholder="Gurdian Email" required />
                                            <label for="gmail">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input type="tel" value={formData.customerPhone} keyboardType="numeric" maxLength={10} className="form-control bg-light border-0" id="customerPhone" onChange={handleInputChange} placeholder="Child Name" required />
                                            <label for="mobile">Your Mobile</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">

                                            <label for="service"></label>
                                            <select id="serviceId" value={formData.serviceId} style={{ padding: '1rem 0.75rem' }} className="form-control bg-light border-0" name="cars" onChange={handleInputChange} placeholder="Child Name" required>
                                                <option value="" hidden>Service Type</option>
                                                {!!services.length && services.map(service => {
                                                    return <option key={service.serviceId} value={service.serviceId}>{service.serviceName}</option>
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    {/* <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input type="datetime-local" value={formData.appointmentDate}  maxLength={10} className="form-control bg-light border-0" id="appointmentDate" onChange={handleInputChange} min={new Date().toISOString().split('.')[0]}  placeholder="Child Name" />
                                            <label for="appointmentDate">Appointment Date</label>
                                        </div>
                                    </div> */}
                                    <div className="col-sm-12">
                                        <DatePicker
                                            selected={date}
                                            onChange={(date) => handleDateChange(date)}
                                            className="form-control bg-light border-0"
                                            showTimeSelect
                                            dateFormat="MMMM d, yyyy h:mm aa"
                                            filterDate={filterWeekends}
                                            // holidays={[
                                            //     ...holidays?.map(holiday => {
                                            //         return {
                                            //             date: holiday.holidayDate,
                                            //             holidayName: holiday.holidayTitle
                                            //         }
                                            //     })
                                            // ]}
                                            excludeDates={[
                                                ...holidays?.map(holiday => {
                                                    return new Date(holiday.holidayDate)
                                                })
                                            ]}
                                            minTime={new Date().setHours(9, 0, 0)}
                                            maxTime={new Date().setHours(21, 0, 0)}
                                            placeholderText="Select date and time"
                                            required
                                        >
                                            <div className='text-primary'>Off on Weekends!</div>
                                        </DatePicker>

                                    </div>



                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control bg-light border-0" placeholder="Leave a message here" value={formData.message} onChange={handleInputChange} id="message" style={{ height: "100px" }} required></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        {/* <GoogleReCaptchaProvider
                                  reCaptchaKey="6Ld2MR8pAAAAAJGOIESEJSIYy2zCB-8QtK1f6-pH"
                                  scriptProps={{
                                      async: false, // optional, default to false,
                                      defer: false, // optional, default to false
                                      appendTo: 'head', // optional, default to "head", can be "head" or "body",
                                      nonce: undefined // optional, default undefined
                                  }}
                              ></GoogleReCaptchaProvider> */}
                                        <button className="btn btn-primary w-100 py-3" type="submit">Get Appointment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div></>
    );
};

export default AppointmentHeader;
