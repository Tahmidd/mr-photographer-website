import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <div>
                <h2 className='text-center text-success mt-2'>Thank You For selecting</h2>
                <div className='text-center'>

                    <Link to="/checkout">
                        <button className='btn btn-primary'>Proceed Checkout</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;