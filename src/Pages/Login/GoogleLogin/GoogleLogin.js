import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/google-logo-9834.png'
import Loading from '../../Shared/Loading/Loading';

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const navigate = useNavigate();
    let errorElement;

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-success w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-success w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-white border-success w-50 d-block mx-auto my-2'>
                    <img style={{ width: '80px' }} src={google} alt="" />

                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;