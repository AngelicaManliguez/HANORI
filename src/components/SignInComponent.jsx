import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../style/SignIn.css'

export const SignInComponent = () => {

    const navigate_login = useNavigate();

    const handleLogInClick = () => {
        navigate_login('/login');
    };

    return (
        <>
            <div className='container-fluid vh-100 d-flex p-0'>
                <div className='col-md-7 d-none d-md-block p-0'>
                    <img src='/src/assets/univ.png' alt='University' className='w-100 h-100' style={{ objectFit: 'cover' }} ></img>
                </div>
                
                <div className='col-md-5 d-flex align-items-center justify-content-center'>
                    <div className='form-container'>

                        <div className='d-flex justify-content-center'>
                            <img src='/src/assets/HANR_LOGO-4.png' alt='University' className='w-50 h-50'></img>
                        </div>

                        <h3 className='text-center mb-3'>Sign In to your Account</h3>
                        
                        <form className='w-100'>
                            <div className='form-group'>
                                <label for='email'>Email</label>
                                <input type='email' id='email' className='form-control' placeholder='user@abc.com' required></input>
                            </div>

                            <div className='form-group mt-2'>
                                <label for='password'>Password</label>
                                <input type='password' id='password' className='form-control' placeholder='*********' required></input>
                            </div>

                            <a href='#' className='d-block mb-3 text-danger text-end'>Forgot Password?</a>
                            <button type='submit' className='w-100 custom-button' onClick={handleLogInClick}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>   
    )
}
