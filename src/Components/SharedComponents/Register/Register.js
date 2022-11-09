import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import registerImage from '../../../Assets/registration.jpg'
import { AuthContext } from '../../../contextApi/AuthProvider/AuthProvider';

const provider = new GoogleAuthProvider();

const Register = () => {
    const [error, setError] = useState('');
    const {googleLogin, createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        //console.log(name, photoURL, email, password);
        createUser(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            setError('');
            handleUpdateUserProfile(name, photoURL);
            //handleEmailVerification();
            //alert('Please verify your email address.')
            form.reset();
        })
        .catch( e => {
            console.error(e);
            setError(e.message);
        });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }
    const handleGoogleLogin = () => {
        googleLogin(provider);
        navigate(from, {replace: true});
    }
    return (
        <div className="hero w-full">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={registerImage} alt='' />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleRegistration}>
                        <h1 className="text-5xl font-bold text-center">Register now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Full Name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="photo url" name='photoURL' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Register" className="btn btn-primary" />
                        </div>
                        <p className='text-black'>I have an account. <Link className='text-warning font-bold' to='/Login'>Login</Link> Here</p>
                        <p>or Login with</p>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login with Google" className="btn btn-primary" onClick={handleGoogleLogin}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;