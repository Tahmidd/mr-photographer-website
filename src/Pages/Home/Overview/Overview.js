import React from 'react';
import view from '../../../images/tiger-gbc0ec6835_1920.jpg'

const Overview = () => {
    return (
        <div>
            <div class="container my-3 py-3 ">
                <div class="row gy-5 d-flex align-items-center">
                    <div class="col-12 col-md-12 col-lg-6">
                        <h1> <span>Explore the WildLife.</span> <br /></h1>
                        <p>Come look at the world through my lens as
                            <br /> you learn about different animals.
                        </p>

                        <button
                            type="button" class="btn btn-success"><i class="fas fa-shopping-cart"></i> See today</button>
                    </div>
                    <div class="col-12 col-md-12 col-lg-6">
                        <img className='img-fluid' src={view} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;