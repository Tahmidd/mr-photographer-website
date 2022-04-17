import React from 'react';
import Banner from '../Banner/Banner';
import Overview from '../Overview/Overview';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Overview></Overview>
            <Services></Services>
        </div>
    );
};

export default Home;