import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://wallpaperaccess.com/full/185289.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-2xl font-semibold text-warning">Get Your Guide</h1>
                    <p className="mb-5 text-6xl font-bold">Discover unforgettable travel experiences</p>
                    <button className="btn btn-outline btn-warning">Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;