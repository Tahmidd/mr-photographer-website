import { async } from '@firebase/util';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);
    let errorElement;

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {

    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');

    }
    return (
        <div className='container w-50 '>
            <h1 className='text-success'>Please Register</h1>

            <Form onSubmit={handleRegister} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <br />
                    <input className='w-75 ' type="text" name="name" id="" placeholder='Your Name' />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <br />
                    <input className='w-75' type="email" name="email" id="" placeholder='Email Address' required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <br />
                    <input className='w-75' type="password" name="password" id="" placeholder='Password' required />
                </Form.Group>
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />

                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Terms and Conditions</label>
                <br />
                {errorElement}
                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-primary mt-2 bg-success'
                    type="submit"
                    value="Register" />
            </Form>


            <p className='mt-3'>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none text-success' onClick={navigateLogin}>Please Login</Link> </p>
            <GoogleLogin></GoogleLogin>

        </div>
    );
};

export default Register;