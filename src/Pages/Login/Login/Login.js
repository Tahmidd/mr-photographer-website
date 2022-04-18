import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    let errorElement;

    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {
        navigate(from, { replace: true });
    }


    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='container w-50 '>
            <h1 className='text-success'>Please Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                {errorElement}

                <Button variant="success" type="submit">
                    Login
                </Button>
            </Form>

            <p className='mt-3'>New to the website? <Link to="/register" className='text-success pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>

            <p className='mt-3'>Forgot your password? <button className='btn btn-link text-success pe-auto text-decoration-none' onClick={resetPassword}>Click Reset</button> </p>
            <GoogleLogin></GoogleLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;