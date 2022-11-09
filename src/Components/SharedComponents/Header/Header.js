import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contextApi/AuthProvider/AuthProvider';
import logo from './../../../logo.svg';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error)
    }

    const menuItem = <>
        <li className='font-semibold text-black'><Link to="/">Home</Link></li>
        <li className='font-semibold text-black'><Link to="/services">Services</Link></li>
    </>
    const authorized_menuItem = <>
        <li className='font-semibold text-black'><Link to="/addservice">Add Service</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            user?.uid ?
                            <>
                                {menuItem}
                                {authorized_menuItem}
                            </>
                            :
                            <>
                                {menuItem}
                            </>
                        }
                    </ul>
                </div>
                <Link to='/' className='font-bold px-5'><img src={logo} alt="Logo SVG file"/>BDTour</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                {
                            user?.uid ?
                            <>
                                {menuItem}
                                {authorized_menuItem}
                            </>
                            :
                            <>
                                {menuItem}
                            </>
                        }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                    <>
                        <button className="btn btn-warning pr-5" onClick={handleLogOut}>Log Out</button>
                    </>
                    :
                    <>
                        <Link className='pr-5' to='/login'><button className="btn btn-warning">Log In</button></Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Header;