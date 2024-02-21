import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import BaseLayout from './components/BaseLayout/BaseLayout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import NotFound from './pages/NotFound/NotFound';
import Appointment from './pages/Appointment/Appointment';
import Contact from './pages/Contact/Contact';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ServiceOne from './pages/Services/ServiceOne';

const AppRoutes = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<BaseLayout><Home /></BaseLayout>} />
                <Route path="/about" element={<BaseLayout><About /></BaseLayout>} />
                <Route path="/services" element={<BaseLayout><Services /></BaseLayout>} />
                <Route path="/appointment" element={<BaseLayout><Appointment /></BaseLayout>} />
                <Route path="/contact" element={<BaseLayout><Contact /></BaseLayout>} />
                <Route path="/404" element={<BaseLayout><NotFound /></BaseLayout>} />
                <Route path="/service/:serviceSlug" element={ <BaseLayout><ServiceOne/></BaseLayout>} />
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
