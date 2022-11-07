import React from 'react';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-4xl" />
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Unforgettable Travel Experiences | BDTour</h1>
                    <p className="py-10">Go beyond the surface of the world’s must-see travel destinations. Discover our authentic, unforgettable experiences and explore the world for real.</p>
                    <button className="btn btn-warning font-bold">Discover All Destination</button>
                </div>
            </div>
        </div>
    );
};

export default About;