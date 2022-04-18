import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between authorization and authentication</Accordion.Header>
                    <Accordion.Body className='text-success'>
                        Authorization is the process to determine the actions and resources a person can access and use. Where authentication mainly means verifiying a user. Authorization always takes place after authentication. Users can make authentication visible and changable but authorization is not visible to a user and it can not be changed by them.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body className='text-success'>
                        Firebase makes it easy for users to be authicated. By using firebase I don't need to face the complexities of making a full authentication system all by myself. Connecting to firebase is easy as it takes only a few number of steps.

                        The Other options that I have to implement authentication are MonboDb, Passport, Okta etc.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>What other services does firebase provide other than authentication</Accordion.Header>
                    <Accordion.Body className='text-success'>
                        Other Services that Firebase provide are:
                        <br />
                        1. Cloud Firestore
                        <br />
                        2. Cloud Functions
                        <br />
                        3. Hosting
                        <br />
                        4. Cloud Storage
                        <br />
                        5. Google Analytics
                        <br />
                        6. Predictions
                        <br />
                        7. Cloud Messaging
                        <br />
                        8. Dynamic Links
                        <br />
                        9. Remote Config
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;