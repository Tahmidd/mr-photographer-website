import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {

    const handleSubmit = e => {
        e.preventDefault();
        toast('Thank You for Purchasing');
    }

    return (
        <div className='container w-50 mt-3'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Address" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your PhoneNumber</Form.Label>
                    <Form.Control type="number" placeholder="Enter Your PhoneNumber" required />
                </Form.Group>



                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default Checkout;