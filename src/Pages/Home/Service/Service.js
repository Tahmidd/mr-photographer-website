import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="card-text"> Price: {price}</p>
                    <p className="card-text"> Description: {description}</p>
                    <button onClick={() => navigateToServiceDetail(id)} className='btn btn-success'>Buy: {name}</button>
                </div>
            </div>
        </div>
    );
};

export default Service;