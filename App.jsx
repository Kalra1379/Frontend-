import React from 'react';
import Routes from './Routes';
import './App.scss';
import 'react-notifications/lib/notifications.css';
import "react-datepicker/dist/react-datepicker.css";
process.env.TZ='UTC'
const App = () => {

  return <Routes />;
};

export default App;
