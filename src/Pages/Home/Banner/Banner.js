import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner from '../../../images/banner.jpg';
import banner2 from '../../../images/lions.jpg';


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                    src={banner}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Mr. PhotoGrapher</h3>
                    <p>Explore wild life with a different view through my lens.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                    src={banner2}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Mr. PhotoGrapher</h3>
                    <p>Explore wild life with a different view through my lens.</p>
                </Carousel.Caption>
            </Carousel.Item>



        </Carousel>
    );
};

export default Banner;