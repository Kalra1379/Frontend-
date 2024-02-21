import React from 'react';
import { Link } from 'react-router-dom';
const PageHeader = ({ title, breadcrumb,backgroundUrl }) => {
    const style = {};
    if(backgroundUrl){
        style.background=`linear-gradient(rgba(0, 0, 0, .65), rgba(0, 0, 0, .65)), url(${  backgroundUrl } ) center center/cover no-repeat`
    }
    return (
        <>
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s" style={style} >
                <div className="container text-center py-5">
                    <h1 className="display-4 text-white animated slideInDown mb-4">{title}</h1>
                    
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
                            {
                                breadcrumb &&
                                breadcrumb.map(bc =>
                                    <li key={bc} className="breadcrumb-item"><Link className='text-white' to={bc.to}>{bc.title}</Link></li>
                                )
                            }
                            <li className="breadcrumb-item text-body active">{title}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default PageHeader;