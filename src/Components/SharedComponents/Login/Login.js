import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logInImage from '../../../Assets/login.webp'
import { AuthContext } from '../../../contextApi/AuthProvider/AuthProvider';
import useTitle from '../../../Hook/useTitle';


const provider = new GoogleAuthProvider();

const Login = () => {
    useTitle("Login");
    const [error, setError] = useState('');
    const { signIn, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            console.log("Working")
            const user = result.user;
            console.log(user)
            setError('');
            form.reset();
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.error(error)
            setError(error.message);
        })
    }

    const handleGoogleLogin = () => {
        googleLogin(provider);
        navigate(from, {replace: true});
    }
    return (
        <div className="hero w-full">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={logInImage} alt='' />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <h1 className="text-5xl font-bold text-center">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <p className='text-danger'>{error}</p>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn btn-primary" />
                        </div>
                        <p className='text-black'>I don't have an account. <Link className='text-warning font-bold' to='/register'>Register</Link> Here</p>
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

export default Login;