import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import AppointmentForm from '../../components/AppointmentForm/AppointmentForm';

const Appointment = () => {
    useEffect(() => {
        document.title = `Book Appointment - ServiceX`
    }, [])
    return (
        <>
            <PageHeader title="Book Appointment" />
            <AppointmentForm />
        </>
    );
};

export default Appointment;